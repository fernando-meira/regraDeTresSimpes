import React, { useState, useEffect } from 'react';

import { Header, Footer } from '../../components';

import mathImage from '../../styles/assets/images/math.png';

import { Container } from './styles';

function Main({ toggleTheme }) {
  const [firstValue, setFirstValue] = useState('');
  const [thirdValue, setThirdValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  const [result, setResult] = useState('');

  console.log(result);

  useEffect(() => {
    if (firstValue && thirdValue && secondValue) {
      const multiply = secondValue * thirdValue;
      const division = multiply / firstValue;
      const limitindDecimal = parseFloat(division.toFixed(2));

      setResult(limitindDecimal);
    }
  }, [firstValue, thirdValue, secondValue, setResult]);

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
            <input
              type="number"
              value={firstValue}
              onChange={e => setFirstValue(e.target.value)}
            />

            <span>está para</span>

            <input
              type="number"
              value={secondValue}
              onChange={e => setSecondValue(e.target.value)}
            />
          </div>

          <h2>Assim como</h2>

          <div className="inputs">
            <input
              type="number"
              value={thirdValue}
              onChange={e => setThirdValue(e.target.value)}
            />

            <span>está para</span>

            <input type="number" value={result} />
          </div>
        </div>
      </section>

      <Footer />
    </Container>
  );
}

export default Main;
