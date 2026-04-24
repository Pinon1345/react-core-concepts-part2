import { use } from "react"
import Comment from "./Comment";

export default function Comments({fetchComments}) {

    const comments = use (fetchComments);
    console.log (comments);
    return (
        <div className="card">
            <h3>Comments: {comments.length}</h3>

            {
               comments.map (comment => <Comment key={comment.id} comment = {comment}></Comment> ) 
            }
        </div>
    )
}