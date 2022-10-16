import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: ${({ theme }) => theme.spacing.xxl};
  ${({ theme }) => theme.font(16, 18, 400, "uppercase")};
  background: ${({ theme }) => theme.color.black[0]};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
