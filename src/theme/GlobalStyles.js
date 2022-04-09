import {createGlobalStyle} from 'styled-components';
import aller from '../assets/fonts/Aller_Rg.ttf';

const GlobalStyles = createGlobalStyle`

@font-face {
font-family: aller;
src: url(${aller});
}

* {
  font-size: 17px;
  font-family: aller, sans-serif;
  overflow-x: hidden;
  text-align: center;
}


@media (min-width: 850px) {
  h1 {
  font-size: 3rem;  
    }

h2 {
  font-size: 2rem;
  
  }

h3 {
  font-size: 1rem;
  color: #a1a1a6;
}

}

  @media (max-width: 850px) {
  h1 {
  font-size: 2rem;  
}

h2 {
  font-size: 1.2rem;
  
}

h3 {
  font-size: 0.8rem;
  color: #a1a1a6;
}
  }


  @media (max-width: 500px) {
  h1 {
  font-size: 3rem;  
}

h2 {
  font-size: 2rem;
  
}

h3 {
  font-size: 0.8rem;
  color: #a1a1a6;
}
}
`;

export default GlobalStyles;
