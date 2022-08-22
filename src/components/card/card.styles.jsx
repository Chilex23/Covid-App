import styled, { css } from "styled-components";

const SamplesStyle = css`
  background-color: #9d9872;
`;

const ConfirmStyle = css`
  background-color: #0492c2;
`;

const ActiveStyle = css`
  background-color: #ffc82d;
`;

const DischargeStyle = css`
  background-color: #138750;
`;

const DeathStyle = css`
  background-color: #f50000;
`;

const getCardBgColor = (props) => {
  if (props.name === "Samples Tested") {
    return SamplesStyle;
  } else if (props.name === "Confirmed Cases") {
    return ConfirmStyle;
  } else if (props.name === "Active Cases") {
    return ActiveStyle;
  } else if (props.name === "Discharged Cases") {
    return DischargeStyle;
  } else if (props.name === "Death") {
    return DeathStyle;
  }
};

export const CardContainer = styled.div`
  padding: 2rem 1rem;
  font-size: 2rem;
  color: #fff;

  & p {
    margin-bottom: 1rem;
  }

  & span {
    font-weight: 700;
    font-size: 3rem;
  }

  border-radius: 5px;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
  ${getCardBgColor}
`;
