import Post from '../Post/Post'


const PostList = (props) => {
    return (<ul>
        {props.parentEntries.map( item => <li><Post/></li> )}
    </ul>)
}

export default PostList