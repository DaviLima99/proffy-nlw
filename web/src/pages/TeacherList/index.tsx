import React, { useState, FormEvent } from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import api from '../../services/api';


interface TeacherItem {
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    subject: string;
    user_id: number;
    wpp: string;
}

function TeacherList() {
    const [teachers, setTeachers ]= useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function seacrhTeachers(e :FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        
        setTeachers(response.data);
    }

    async function createNewConnection(user_id: number) {
        await api.post('connections', {
            user_id
        });
    }

    return (
        <div className="container" id="page-teacher-list">
            <PageHeader  title="Estes são os proffys disponíveis.">
                <form onSubmit={seacrhTeachers} id="search-teachers">

                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'Redes', label: 'Redes'},
                            { value: 'LPOO', label: 'LPOO'},
                        ]}
                    />


                    <Select 
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda-feira'},
                            { value: '2', label: 'Terça-feira'},
                            { value: '3', label: 'Querta-feira'},
                            { value: '4', label: 'Quinta-feira'},
                            { value: '5', label: 'Sexta-feira'},
                            { value: '6', label: 'Sábado'},
                        ]}
                    />

                    <Input name="time" label="Hora" type="time" value={time}
                        onChange={(e) => { setTime(e.target.value) }}/>

                    <button type="submit">
                        Buscar
                    </button>

                </form>
            </PageHeader>

            <main>

                {teachers.map((teacher: TeacherItem) => {
                    return(
                        <article className="teacher-item">
                            <header>
                                <img src="https://avatars1.githubusercontent.com/u/42526185?s=460&u=41ee0c79fceb78d616239b336ed97cf50c4441a0&v=4" alt=""/>
                                <div>
                                    <strong>{ teacher.name }</strong>
                                    <span>{ teacher.subject }</span>
                                </div>
                            </header>
        
                            <p>
                                {teacher.bio}
                            </p>
        
                            <footer>
                                <p>
                                    Preço/hora
                                    <strong>R$ {teacher.cost}</strong>
                                </p>
        
                                <a target="_blank" onClick={() => createNewConnection(teacher.user_id)} href={`https://wa.me/${teacher.wpp}`}>
                                    <img src={wppIcon} alt="Whats App"/>
                                    Entrar em contato
                                </a>
                            </footer>
                        </article>
                
                    );
                })}

              </main>

        </div>
    );
}

export default TeacherList;