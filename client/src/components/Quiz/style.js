import styled from 'styled-components';
import {colors} from '../../layout/colors';

export const Wrapper = styled.div`
    padding: 2em;
    background-color: ${colors.darkBackground};
    width: 100%;
    height: 100%;

`

export const Question = styled.h2`
    font-size: 26px;
    font-weight: 300; 
    color: #ffcc66; 
    margin: 0 0 24px;
    text-align: center; 
    margin-bottom: 2em;
`

export const Answers = styled.ul`
    font-size: 16px;
    font-weight: 500;
    color: #ffcc66;
    display: flex;
    justify-content: space-around;
    padding: 2em 0;
    border: 3px solid #ffcc66;
`

export const Answer = styled.li`
    padding-right: 6em;
    border-right: 2px dashed #ffcc66;
    :hover {
		color: #ed1212;
		cursor: pointer;
	}

`