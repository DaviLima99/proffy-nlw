import React, { useState, FormEvent } from 'react';

import "./styles.css";
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [wpp, setWpp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);


    function handleCreate(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            wpp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert("Cadastro realizado com sucesso!");
        }).catch(() => {
            alert("Erro no cadastro!");
        });


    }

    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems,
            {week_day: 0, from: '', to: ''},
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        });
        
        setScheduleItems(updatedScheduleItems);
    }

    return (
        <div className="container" id="page-teacher-form">
            <PageHeader title="Que incrível que você quer dar aulas." 
                description="O primeirto passo é preencher esse formulário de inscrição."
            />

            <main>
                <form onSubmit={handleCreate}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome completo" value={name} onChange={(e) => { setName(e.target.value)}}/>

                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value)}}/>

                        <Input name="wpp" label="WhatsApp" value={wpp} onChange={(e) => { setWpp(e.target.value)}}/>

                        <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value)}}/>

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select 
                            name="subject" 
                            label="Matéria"
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
                            options={[
                                { value: 'Artes', label: 'Artes'},
                                { value: 'Matemática', label: 'Matemática'},
                                { value: 'Redes', label: 'Redes'},
                                { value: 'LPOO', label: 'LPOO'},
                            ]}
                        />

                        <Input name="cost" label="Custo da sua hora por aula" value={cost}
                            onChange={(e) => {setCost(e.target.value)}}/>

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={() => addNewScheduleItem()}>
                                + Novo horário
                            </button>
                        
                        </legend>
                        
                        {scheduleItems.map( (scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select 
                                        name="week_day" 
                                        label="Dia da Semana"
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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

                                    <Input name="from" label="Das" type="time" value={scheduleItem.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>
                                    <Input name="to" label="Até" type="time" value={scheduleItem.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>

                                </div>
                            );
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br/>

                            Preencha todos os  dados
                        </p>

                        <button type="submit">
                            Salvar dados
                        </button>
                    </footer>
                </form>
            
            </main>

        </div>
    );
}

export default TeacherForm;