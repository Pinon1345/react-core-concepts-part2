export default function Post({ post }) {
    console.log(post);
    const { title, body, userId } = post;
    return (
        <div className="card">
            <h4>User I'd: {userId}</h4>
            <h2>Title: {title}</h2>
            <p>Body: {body}</p>

        </div>
    )
}