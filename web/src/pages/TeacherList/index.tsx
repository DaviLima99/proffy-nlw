import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

function TeacherList() {
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader  title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">

                    <Select 
                        name="subject" 
                        label="Matéria" 
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
                        options={[
                            { value: '1', label: '1'},
                            { value: '1', label: '1'},
                            { value: '1', label: '1'},
                            { value: '1', label: '1'},
                        ]}
                    />

                    <Input name="time" label="Hora" type="time"/>

                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/42526185?s=460&u=41ee0c79fceb78d616239b336ed97cf50c4441a0&v=4" alt=""/>
                        <div>
                            <strong>Davi Lima</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Fullstack developer apaixonado por tecnologia
                        <br/> <br/>
                        Gosto de aprender coisas novas e sempre buscando novos desafios
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>

                        <button type="button">
                            <img src={wppIcon} alt="Whats App"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>

        </div>
    );
}

export default TeacherList;