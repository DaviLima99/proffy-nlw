import React from 'react';
import PageHeader from '../../components/PageHeader';

import "./styles.css";

function TeacherForm() {
    return (
        <div className="container" id="page-teacher-form">
            <PageHeader title="Que incrível que você quer dar aulas.">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>   
        </div>
    );
}

export default TeacherForm;