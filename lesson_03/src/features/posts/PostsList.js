import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts,getPostsError, 
        getPostsStatus, fetchPosts } from "./postsSlice";
import { useEffect } from "react";
import PostExcertp from "./PostExcertp";

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts)
    const postsStatus= useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(( () => {
        if(postsStatus === 'idle'){
            dispatch(fetchPosts())
        }
    }),[postsStatus,dispatch])

    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    // const renderedPosts = orderedPosts.map(post => (
    //     <PostExcertp key={post.id} />
    // ))

    let content;
    if(postsStatus === 'loading'){
        content = <p>Loading...</p>
    }else if(postsStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostExcertp key={post.id} post={post} />)
    }else if( postsStatus === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}
export default PostsList