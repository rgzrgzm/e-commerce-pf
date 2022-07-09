import styled from "styled-components";

export const Contenido = styled.ul`
  & li {
    & a {
      color: ${(props) => props.theme.colorTextPri};
    }
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Liauto = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.result === "true" && "#c0c0c0"};
  backdrop-filter: blur(7px);
  color: ${(props) => props.result === "true" && "black"};
  cursor: ${(props) => props.result === "true" && "pointer"};
  font-weight: ${(props) => props.result === "true" && "700"};
  &:hover {
    background-color: "black";
    color: "#c0c0c0";
    cursor: pointer;
    font-weight: 700;
  }
  & p {
    margin-left: 8px;
  }
`;

export const Ulauto = styled.ul`
  position: relative;
  z-index: 4;
  top: 4px;
  border: 1px solid grey;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(400px + 1rem);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px 0 rgb(31 38 135 / 37%);
  &::-webkit-scrollbar {
    width: 0.2rem;
    height: 0rem;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 20px;
  }
`;
