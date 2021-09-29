import styled from "@emotion/styled";

import PageTitle from "./PageTitle";
import Card from "../Card";
import BaseInfoCard from "../BaseInfoCard";
import data from "./mainPage.json";

const MainContainer = styled.main`
  background-color: #dfdfdf;
  padding: 28px 32px;

  .base-info {
    display: grid;
    grid-template-columns: 144px 1fr;
    gap: 32px;
  }
`

const Main = () => {
    return (
        <MainContainer>
            <PageTitle title="Информация о университете" />
            <div className="base-info">
                <Card>
                    Тяжелый день
                    <img src="" alt="" />
                    <p>Университет</p>
                    <h4>MIT</h4>
                </Card>
                <BaseInfoCard text={data["base-info-text"]} />
            </div>
        </MainContainer>
    )
};

export default Main;