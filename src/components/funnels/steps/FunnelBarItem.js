import styled, {keyframes} from 'styled-components';

const toFullWidth = keyframes`
    from {
      transform: scale(0, 1);
    }

    to {
      transform: scale(1, 1);
    }
    `


const BarItem = styled.div.attrs({
      delay: props => props.delay || 0,
      fillwidth: props => props.fillwidth || 5,
      })`
      background-color: #666;
      flex: 1;
      background-repeat: no-repeat;
      transform: scale(0, 1);
      width: ${props => props.fillwidth}%;
      height: 100%;
      transform-origin: top left;
      animation-name: ${toFullWidth};
      animation-duration: .4s;
      animation-timing-function: ease-out;
      animation-delay: ${props => props.delay}s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
    `;

export default BarItem;