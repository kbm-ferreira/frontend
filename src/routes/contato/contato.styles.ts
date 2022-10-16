import styled from "styled-components";
import { ButtonComponent } from "../../components/Button/Button";

export const Container = styled.body``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled(ButtonComponent)`
  cursor: pointer;
`;
