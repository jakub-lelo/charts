import React from "react";

const Gameover: React.FC<{
    winner: string;
}> = ({winner}) => {

    return (
        <div>
            <h1> {winner} </h1>
            <p> you are a winner!</p>
        </div>
    )
};

export default Gameover;
