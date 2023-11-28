import React from 'react';
import styles from './Form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './Header';
import Footer from './Footer';

const Form = () => {
  const [dataSelecionada, setDataSelecionada] = React.useState(null);

  const handleChange = (date) => {
    setDataSelecionada(date);
  };

  return (
    <>
      <Header formHeader={true} />
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.title}>
            <FontAwesomeIcon icon={faAlignRight} /> Inscreva-se
          </h2>
          <form className="mt-5 mb-5">
            <div className="row">
              <div className="col-md-6">
                {' '}
                <div className="mb-3">
                  <label
                    htmlFor="nome"
                    className={`form-label ${styles.label}`}
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    aria-describedby="emailHelp"
                    placeholder="seu-email@gmail.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className={`form-label ${styles.label}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="estudo"
                    className={`form-label ${styles.label}`}
                  >
                    Você já estudou inglês? Se sim, onde e por quanto tempo?
                  </label>
                  <input
                    type="textarea"
                    className="form-control"
                    id="estudo"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="estudo"
                    className={`form-label ${styles.label}`}
                  >
                    Como você considera seu nível de inglês?
                  </label>
                  <select class="form-select" aria-label="Nível inglês">
                    <option value="iniciante" selected>
                      Iniciante
                    </option>
                    <option value="basico">Básico</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="avancado">Avançado</option>
                    <option value="nao-sei">Não sei</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="motivacao"
                    className={`form-label ${styles.label}`}
                  >
                    Por que você deseja estudar inglês?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="motivacao"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="motivacao"
                    className={`form-label ${styles.label}`}
                  >
                    Qual seria o melhor horário de aula para você?
                  </label>
                  <input
                    type="datetime"
                    className="form-control"
                    id="motivacao"
                    placeholder="Ex: 09:00"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="estudo"
                    className={`form-label ${styles.label}`}
                  >
                    Quantas horas por semana você gostaria de estudar?
                  </label>
                  <select class="form-select" aria-label="Nível inglês">
                    <option value="1" selected>
                      1 hora
                    </option>
                    <option value="1.5">1 hora e 30 minutos</option>
                    <option value="2">2 horas</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="modalidade"
                    className={`form-label ${styles.label}`}
                  >
                    Qual modalidade de aula você gostaria de participar?
                  </label>
                  <select class="form-select" aria-label="Nível inglês">
                    <option value="1" selected>
                      Aula individual
                    </option>
                    <option value="1.5">Aula em grupo</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="datetimepicker"
                    className={`form-label ${styles.label} d-block`}
                  >
                    Selecione Data e Hora:
                  </label>
                  <DatePicker
                    selected={dataSelecionada}
                    onChange={handleChange}
                    className="form-control"
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy HH:mm"
                    timeCaption="Hora"
                    placeholderText="Data e Hora"
                    type="text"
                    id="datetimepicker"
                  />
                </div>
              </div>

              <button type="submit" className={styles.buttonForm}>
                Enviar inscrição
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
