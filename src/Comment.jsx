export default function Comment({comment}) {
    console.log(comment);
    const {name, body, email, postId} = comment;
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Body: {body}</p>
            <p>Email: {email}</p>
            <p>Post I'D: {postId}</p>

        </div>
    )
}