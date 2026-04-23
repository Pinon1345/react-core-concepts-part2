import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAll = () => {
        const newCount = count + 1;
        setCount (newCount);
    }

    const dynamicStyle = {
        border: "2px solid Yellow",
        padding: "15px",
        borderRadius: "15px"
    }
    return (
        <div style={dynamicStyle}>
            <h2>Count: {count}</h2>
            <button onClick={handleAll} className="button">ADD</button>
        </div>
    )
}