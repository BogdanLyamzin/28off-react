import PageTitle from "./PageTitle";
import Card from "../Card";
import BaseInfoCard from "../BaseInfoCard";

import styles from "./Main.module.scss";

import data from "./mainPage.json";

const Main = () => {
    return (
        <main className={styles.main}>
            <PageTitle title="Информация о университете" />
            <div className={styles.baseInfo}>
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