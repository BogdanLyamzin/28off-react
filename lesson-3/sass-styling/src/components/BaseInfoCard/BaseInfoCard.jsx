import "./BaseInfoCard.scss";

const BaseInfoCard = ({ text }) => {
    return (
        <div className="base-info-card">
            <p className="base-info-card-text">{text}</p>
        </div>)
};

export default BaseInfoCard;