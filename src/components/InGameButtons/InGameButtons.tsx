import React, {useState} from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import MobileButtons from "./MobileButtons/MobileButtons";

const Form = styled.form`
          padding-top: 50px;
          display: flex;
          flex-grow: 1;
          flex-direction: column;

          @media (min-width: 501px) {
            flex-direction: row;
            justify-content: center;
          }
    `
;

const InGameButtons: React.FC<{
    setPlayerPoints: (points: number) => void;
}> = ({setPlayerPoints}) => {

    const [points, setPoints] = useState("");

    const handleSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        let numericValue: number;

        numericValue = parseInt(points);
        if (points === "") {
            numericValue = 0;

        } else if (isNaN(numericValue) || numericValue < 0 || numericValue > 180) {
            alert(`Please provide a number between 0 and 180`);
            return;
        }
        setPoints("");
        setPlayerPoints(numericValue);
    }


    return (
        <Form onSubmit={handleSubmit}>
            {window.innerWidth >= 500 &&
            <>
                <label>
                    <TextField id="standard-basic" label="points" variant="standard" color="primary"
                               type="number" value={points} onChange={e => setPoints(e.target.value)}/>
                </label>
                <Button type="submit" value="Submit"> ok!</Button>
            </>
            }
            {window.innerWidth < 500 &&
            <MobileButtons> </MobileButtons>
            }
        </Form>
    );
};

export default InGameButtons;
