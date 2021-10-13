import PostList from "../../client/PostList";
import PageContainer from "../../shared/containers/PageContainer"

const PostListPage = ({title})=> {
    return (
        <PageContainer title={title}>
            <PostList />
        </PageContainer>
    )
}

export default PostListPage