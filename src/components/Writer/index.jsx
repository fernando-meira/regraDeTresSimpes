import React from 'react';
import Typewriter from 'typewriter-effect';

import { Container } from './styles';

export default function Writer() {
  return (
    <Container>
      <Typewriter
        options={{
          strings: [
            'Desenvolvido por <a href="http://fernando-meira.netlify.app">Fernando Meira</a>',
            'Github: <a href="https://github.com/fernando-meira">/fernando-meira</a>',
            'Linkedin: <a href="https://www.linkedin.com/in/lassofend/">/lassofend</a>',
          ],
          autoStart: true,
          loop: false,
        }}
      />
    </Container>
  );
}
