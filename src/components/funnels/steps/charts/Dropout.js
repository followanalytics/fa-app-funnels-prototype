import styled, { keyframes } from 'styled-components';

const targetWidth = keyframes`
    0% {
      transform: scale(1, 0);
      margin-bottom: 0;
      opacity: 0;
    }
    40% {
      transform: scale(1, 1);
      margin-bottom: 15px;
      opacity: 1;
    }

    100% {
      transform: scale(1, 1);
    }
    `


const DropOut = styled.div.attrs({
  fillwidth: props => props.initialWidth || 5,
}) `
      background-color: #666;
      flex: 1;
      background-repeat: no-repeat;
      transform: scale(0, 1);
      width: ${props => props.initialWidth}%;
      height: 100%;
      animation-name: ${targetWidth};
      animation-duration: 1s;
      animation-delay: .4s;
      animation-timing-function: ease-out;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
      margin: 0 auto 15px auto;
      text-align: center;
      `;
// transform-origin: top left;
      
      export default DropOut;