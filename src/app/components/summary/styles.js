import styled from "@emotion/styled";

const col12 = "100";

export const Wrapper = styled.div``;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-gap: 8px;
  align-items: center;
  justify-content: center;
  background: #fcfcfc;
  border-radius: 10px;
  padding: 40px;
  @media (min-width: 1150px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;

export const GridItem = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin: 4px;
  height: 100px;
  width: ${col12}%;
`;

export const HeaderSummary = styled.div``;

export const CloseIcon = styled.div``;

export const Typography = styled.div``;
export const Divider = styled.div``;

export const Button = styled.button``;

export const SummaryLabel = styled.p`
  font-weight: 600;
  ${(props) =>
    props.primary &&
    `
  background: #6301cc;
    padding: 10px;
    border-radius: 21px;
    text-align: center;
    color: white;`}
`;

export const SummaryText = styled.p``;
export const FlatOptions = styled.div`
  display: contents;
`;
export const Options = styled.div``;
