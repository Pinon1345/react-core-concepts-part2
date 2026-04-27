import { useEffect } from "react";
import { useState } from "react";

export default function Players() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setPlayers(data));


    }, [])

    return (
        <div className="card2">
            <h2>Players of Bangladesh: {players.length}</h2>

            {
                players.map(player => <p className="card">{player.name}</p>)
            }

        </div>
    )
}