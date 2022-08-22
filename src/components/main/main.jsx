import React from "react";
import { covidApi } from "../../redux/covidApi";
import Card from "../card/card";
import Table from "../table/table";
import {
  Header,
  CardsContainer,
  MainContainer,
  LoaderOverlay,
} from "./main.styles";
import { Triangle } from "react-loader-spinner";

const Main = () => {
  const { data, isError, isLoading } =
    covidApi.endpoints.getCovidData.useQuery();

  if (isLoading) {
    return (
      <LoaderOverlay>
        <Triangle
          height="120"
          width="120"
          color="#4fa94d"
          ariaLabel="triangle-loading"
        />
      </LoaderOverlay>
    );
  } else if (isError) {
    return <div>Error!</div>;
  } else {
    return (
      <MainContainer>
        <Header>Covid Nigeria</Header>
        <CardsContainer>
          <Card results={data?.totalSamplesTested} name={"Samples Tested"} />
          <Card results={data?.totalConfirmedCases} name={"Confirmed Cases"} />
          <Card results={data?.totalActiveCases} name={"Active Cases"} />
          <Card results={data?.discharged} name={"Discharged Cases"} />
          <Card results={data?.death} name={"Death"} />
        </CardsContainer>
        <Table data={data} />
      </MainContainer>
    );
  }
};

export default Main;
