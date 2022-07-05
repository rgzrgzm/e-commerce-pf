import styled from "styled-components";

export const DIV = styled.div`
    padding: 1rem 1.5rem;
    max-width: 335px;
    height: auto;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.background};
    overflow: hidden;
    &:hover{
        box-shadow: 0px 0px 2px #595959;
    }
`

export const ContainerImage = styled.div`
    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
`

export const InfoContainer = styled.div`
    text-align: center;
    padding: 1rem;
`

export const H2 = styled.div`
    color: ${props => props.theme.colorTextPri};
    font-size: 1.3rem;
    font-weight: 400;
`

export const ExtraInfo = styled.div`
    
`

export const PriceSize = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.9rem;
`

export const Select = styled.select`
    padding-left: 0.5rem;
    width: 70px;
    height: 40px;
    font-weight: 500;
    font-family: inherit;
    color: ${props => props.theme.colorTextSec};
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.backgroundElement};
`

export const P = styled.p`
    color: ${props => props.theme.colorTextPri};
    font-weight: 600;
    border-radius: 5px;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.9rem 0;
    width: 100%;
    height: 40px;
    font-weight: 600;
    color: ${props => props.theme.colorTextSec};
    background-color: ${props => props.theme.backgroundElement};
    cursor: pointer;
`