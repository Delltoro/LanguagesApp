import styled from 'styled-components';
import {colors} from '../../layout/colors';
export const listyle = { marginBottom: '1em' }

export const Wrapper = styled.div`
    min-height: '100vh';
`

export const Question = styled.h2`
    font-size: 2.5em;
    font-weight: 600; 
    color: #2d3436;
    text-align: center; 
`

export const Answers = styled.ul`
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: space-around;
    padding: 2em 0;
    border-bottom: 1px solid ${colors.greyFont};
    font-family: "Mali cursive";
    text-transform: uppercase;
    letter-spacing: 0.25em;
`

export const Answer = styled.li`
    padding: 0.2em 0.6em;
    text-align: center;
    font-weight: bold;
    color: black;
    box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem ${colors.whiteFont};
    :hover {
		cursor: pointer;
	}

`