import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);

    const [sixes, setSixes] = useState (0);

    const [fours, setFours] = useState (0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updateSixes = sixes + 1;
        setRuns(updatedRuns);
        setSixes (updateSixes);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFours = fours + 1;
        setRuns(updatedRuns);
        setFours (updatedFours);
    }

    const handleDotted = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleWide = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleNoBall = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const runStyles = {
        border: "3px solid salmon",
        marginTop: "10px",
        marginBottom: "10px",
        paddingBottom: "10px",
        borderRadius: "15px"

    }

    return (
        <div style={runStyles}>
            <h3>Player: Sakib Al Hasan</h3>
            <p><small>Six: {sixes} & Four: {fours}</small></p>

            {
                runs > 50 && <p>Congratulations! You beat Half Century!</p>

            }

            <h1>Score: {runs}</h1>
            <button onClick={handleSingle} className="button">Single</button>
            <button onClick={handleDotted} className="button">Dotted</button>
            <button onClick={handleWide} className="button">Wide</button>
            <button onClick={handleNoBall} className="button">No Ball</button>
            <button onClick={handleFour} className="button">Four</button>
            <button onClick={handleSix} className="button">Six</button>
        </div>
    )
}