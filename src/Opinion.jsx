import { use } from "react"

export default function Opinions ({opinionPromise}) {

    const opinion = use (opinionPromise);
    console.log (opinion);
    return (
        <div className="card">
            <h3>Opinions: {opinion.length}</h3>
        </div>
    )
}