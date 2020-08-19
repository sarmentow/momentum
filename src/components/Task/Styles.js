import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  color: var(--base07);
  border: none;
  border-top: 1px solid var(--base02);

  padding: 1rem 0;
  margin-top: 0.5rem;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${(props) => (props.completed ? "default" : "pointer")};
  transition: filter 300ms ease, color 300ms ease;

  &:hover {
    color: ${(props) => (props.completed ? "var(--base07)" : "var(--base0F)")};
    filter: ${(props) =>
      props.completed ? "brightness(1)" : "brightness(1.1)"};
  }
`;

export const DeleteButton = styled.button`
  background: var(--base02);
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 999px;
  padding: 5px;
  transition: all 300ms;
  svg {
    transition: all 300ms ease;
    fill: var(--base05);
    &:hover {
      fill: var(--base08);
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
