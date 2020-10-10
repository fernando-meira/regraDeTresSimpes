import React from 'react';

import { Header } from '../../components';

import mathImage from '../../styles/assets/images/math.png';

import { Container } from './styles';

function Main({ toggleTheme }) {
  return (
    <Container>
      <Header toggleTheme={toggleTheme} />

      <section>
        <img src={mathImage} alt="Math" />

        <div>
          <h1>Calculadora de regras de três simples</h1>

          <p>
            A calculadora de regra de três simples permite descobrir um número
            em proporção a outros dois que são conhecidos.
          </p>

          <div className="inputs">
            <input type="number" />

            <span>está para</span>

            <input type="number" />
          </div>

          <h2>Assim como</h2>

          <div className="inputs">
            <input type="number" />

            <span>está para</span>

            <input type="number" />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Main;
