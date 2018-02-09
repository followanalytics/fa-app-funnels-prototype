import styled from 'styled-components';
import img from '../../assets/step-actions.png';

const StepAction = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${img});
    background-size: 128px 14px;
    width: 130px;
    height: 100%;
    display: inline-block;
    position: relative;
    right: -65px;
`;

export default StepAction;