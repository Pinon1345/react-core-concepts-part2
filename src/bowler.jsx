import { useState } from "react"

export default function Bowler() {

    const [balls, setBalls] = useState(0);

    const [singles, setSingles] = useState (0);

    const [wickets, setWickets] = useState (0);

    const handleBalls = () => {
        const updatedBalls = balls + 1;
        setBalls(updatedBalls);

    }

    const handleWickets = () => {
        const updatedWickets = wickets + 1;
        setWickets (updatedWickets);
    }

    const handleSingle = () => {
        const updatedBalls = balls + 6;
        const singleBall = singles + 1;
        setBalls(updatedBalls);
        setSingles (singleBall);
    }

    const handleDotted = () => {
        const updatedBalls = balls + 1;
        setBalls(updatedBalls);
    }

    const handleNoBall = () => {
        const updatedBalls = balls + 1;
        setBalls(updatedBalls);
    }

    const handleWide = () => {
        const updatedBalls = balls + 1;
        setBalls(updatedBalls);
    }

    const handleWicket = () => {
        const updatedBalls = balls + 1;
        setBalls (updatedBalls);
    }


    const bowlerStyle = {
        border: "5px solid purple",
        borderRadius: "15px",
        marginBottom: "10px",
        paddingBottom: "10px",
        paddingTop: "10px"
    }

    return (
        <div style={bowlerStyle}>
            <p><small>Total Ball: {singles} & Wicket: {wickets}</small></p>
            
            {
                singles === 6 && <p>You completed one over.</p>
            }

            {
                wickets === 3 && <p>Congratulations! You got Hat-tick.</p>
            }

            <h3>Bowler: Mustafizur Rahman</h3>
            <h1>Score: {balls}</h1>
            <button onClick={handleSingle} className="button">Single</button>
            <button onClick={handleDotted} className="button">Dotted</button>
            <button onClick={handleNoBall} className="button">No Ball</button>
            <button onClick={handleWide} className="button">Wide</button>
            <button onClick={handleWickets} className="button">Wicket</button>
        </div>
    )
}

