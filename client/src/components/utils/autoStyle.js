import styled from "styled-components";

export const Liauto = styled.li`
    padding: 0.5rem;
    background-color: ${props => props.result && "#008f68"};
    color: ${props => props.result && "#fae042"};
    cursor: ${props => props.result && "pointer"};
    font-weight: ${props => props.result && "700"};
    &:hover {
        background-color: #008f68;
        color: #fae042;
        cursor: pointer;
        font-weight: 700; 
    }
`

export const Ulauto = styled.ul`
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 143px;
    overflow-y: auto;
    padding-left: 0;
    width: calc(300px + 1rem);
`