import * as S from "./error.styles";

export default function PageError() {
  return (
    <S.Container>
      <S.ErrorTitle> ERROR: </S.ErrorTitle>
      <S.ErrorMsg> NOT FOUND </S.ErrorMsg>
    </S.Container>
  );
}
