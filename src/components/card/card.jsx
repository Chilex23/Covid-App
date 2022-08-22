import React from "react";
import { CardContainer } from "./card.styles";
import { RiVirusLine } from "react-icons/ri";
import { GiDeathSkull } from "react-icons/gi";
import { GiTestTubes } from "react-icons/gi";
import { formatNumber } from "../../utils/formatNumber";

const Card = ({ results, name }) => {
  const getIcon = (name) => {
    if (name === "Death") {
      return <GiDeathSkull />;
    } else if (name === "Samples Tested") {
      return <GiTestTubes />;
    } else {
      return <RiVirusLine />;
    }
  };

  return (
    <CardContainer name={name}>
      <p>{name}</p>
      <span>
        <span>{getIcon(name)}</span> {formatNumber(results)}
      </span>
    </CardContainer>
  );
};

export default Card;
