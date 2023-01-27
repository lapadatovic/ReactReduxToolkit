import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUserById } from './usersSlice';
import { selectAllPosts } from '../posts/postsSlice'

export default function UserPage() {
    const { userId } = useParams();
    const user = useSelector(state => selectUserById(state,Number(userId)));

    
    const postsForUser = useSelector(state => {
        const allPosts = selectAllPosts(state);
        return allPosts.filter(post => post.userId === Number(userId));
    })

    console.log(postsForUser)

    const postTitle = postsForUser.map(post =>(
        <li key={post.id}> 
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

  return (
    <div>
        <h2>{user?.name}</h2>
        <ol>{postTitle}</ol>
    </div>
  )
}
