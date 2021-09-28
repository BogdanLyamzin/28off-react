import PageTitle from "./PageTitle";
import Card from "../Card";
import BaseInfoCard from "../BaseInfoCard";

import "./Main.css";

import data from "./mainPage.json";

const Main = () => {
    return (
        <main className="main">
            <PageTitle title="Информация о университете" />
            <div className="base-info">
                <Card>
                    <img src="" alt="" />
                    <p>Университет</p>
                    <h4>MIT</h4>
                </Card>
                <BaseInfoCard text={data["base-info-text"]} />
            </div>
        </main>
    )
};

export default Main;