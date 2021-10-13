import PostList from "../../client/PostList/PostList";
import PageContainer from "../../shared/containers/PageContainer";

const HomePage = ({title})=> {
    return (
        <PageContainer title={title}>
            <p>Welcome to our site!</p>
        </PageContainer>
    )
}

export default HomePage;