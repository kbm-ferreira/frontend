import { Link } from "react-router-dom";
import * as S from "./contato.styles";

export default function PageContato() {
  return (
    <S.Container>
      <S.ButtonContainer>
        <Link to="/">
          <S.Button label="Voltar" color="black" height="32px" width="90px" />
        </Link>

        <S.Button label="Botão" color="black" height="32px" width="90px" />
      </S.ButtonContainer>
    </S.Container>
  );
}
