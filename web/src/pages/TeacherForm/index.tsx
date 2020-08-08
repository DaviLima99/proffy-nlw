import React, { useState } from 'react';

import "./styles.css";
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems,
            {week_day: 0, from: '', to: ''},
        ]);
    }

    return (
        <div className="container" id="page-teacher-form">
            <PageHeader title="Que incrível que você quer dar aulas." 
                description="O primeirto passo é preencher esse formulário de inscrição."
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo"/>

                    <Input name="avatar" label="Avatar"/>

                    <Input name="wpp" label="WhatsApp"/>

                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

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

                    <Input name="cost" label="Custo da sua hora por aula"/>

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={() => addNewScheduleItem()}>
                            + Novo horário
                        </button>
                    
                    </legend>
                    
                    {scheduleItems.map( scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
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

                                <Input name="from" label="Das" type="time"/>
                                <Input name="to" label="Até" type="time"/>

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

                    <button type="button">
                        Salvar dados
                    </button>
                </footer>
            </main>

        </div>
    );
}

export default TeacherForm;