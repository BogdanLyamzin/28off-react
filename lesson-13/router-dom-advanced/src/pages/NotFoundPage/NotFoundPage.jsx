import { Link } from "react-router-dom";

import Button from "../../shared/components/Button";
import PageContainer from "../../shared/containers/PageContainer";

const NotFoundPage = ({title})=> {
    return (
        <PageContainer title={title}>
            <p>404 error</p>
            <Button text="Go back" render={
                props => {
                    alert(props);
                    return  (<Link to="/">
                                Go Back
                            </Link>)
                }
            }>
                </Button>

        </PageContainer>
    )
}

export default NotFoundPage