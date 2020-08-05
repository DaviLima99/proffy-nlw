import React from 'react';
import PageHeader from '../../components/PageHeader';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

function TeacherList() {
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader  title="Estes são os proffys disponíveis.">
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