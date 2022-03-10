import React, {useState} from "react";
import styled from "styled-components"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = styled.form`
padding-top:  50px;
   `
;

const InGameButtons: React.FC<{
    setPlayerPoints: (points: number) => void;
}> = ({setPlayerPoints}) => {

    const [points, setPoints] = useState("");

    // tbd add buttons for the mobile view
    //const buttons = [1, 2, 3, 5, 8, 9, "-", "clear", "ok!"];

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
            <label>
                <TextField id="standard-basic" label="points" variant="standard" color="primary"
                           type="text" value={points} onChange={e => setPoints(e.target.value)}/>
            </label>
            <Button type="submit" value="Submit"> ok!</Button>
        </Form>
    );
};

export default InGameButtons;
