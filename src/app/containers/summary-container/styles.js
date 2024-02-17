import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: block;
  background: rgb(252, 252, 252);
  padding: 80px 24px;
  width: 332px;
  border-radius: 10px;
  @media (max-width: 1279px) {
    display: ${(props) => (props.open ? "block" : "none")};
  }
`;
export const HeaderSummary = styled.div``;

export const CloseIcon = styled.div`
  cursor: pointer;
  position: relative;
  width: 33px;
  float: right;
  margin: 11px;
  top: 5px;
  text-align: center;
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const Typography = styled.div`
  color: rgb(150, 52, 255);
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 32px;
`;
export const Divider = styled.div`
  height: 1.5px;
  width: 100%;
  background: rgb(230, 229, 231);
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const SummaryLabel = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 50px;
  color: rgb(150, 52, 255);
  margin-bottom: 0px;
  text-transform: uppercase;
`;

export const SummaryText = styled.p`
  font-style: normal;
  font-size: 14px;
  color: black;
  font-weight: 500;
  margin-top: 0px;
`;
