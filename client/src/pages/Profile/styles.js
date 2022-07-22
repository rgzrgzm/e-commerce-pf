import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto 0 auto;
  padding-top: 180px;
  min-height: 1080px;
  width: 100%;
  min-width: 375px;
  max-width: 1440px;
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`

export const FormEdit = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  min-width: 325px;
`

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid gray;
`

export const Input = styled.input`
  padding: 0.5rem 0.8rem;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, .4);
  border-radius: 5px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  min-width: 325px;
`

export const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid gray;
  list-style: none;
`

export const LI = styled.li`
  &.Info{
    color: gray;
  }
`

export const Button = styled.button`
  align-self: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;
  color: ${props => props.theme.colorTextPri};
  font-weight: 600;
  background-color: ${props => props.theme.background};
  border-radius: 500px;
  cursor: pointer;
  ${props => props.aceptar && css`
    align-items: flex-end;
    color: #FFFFFF;
    background-color: rgba(0, 0, 0, 1);
  `}
  ${props => props.disabled && css`
    align-items: flex-end;
    color: #FFFFFF; 
    background-color: rgba(0, 0, 0, .2);
  `}
`

export const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const P = styled.p`
  font-weight: 600;
  cursor: pointer;
`
export const LinkTo = styled(Link)`
  text-decoration: none;
`


