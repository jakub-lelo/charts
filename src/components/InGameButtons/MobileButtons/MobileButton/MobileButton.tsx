import React, {useCallback} from 'react';
import {subtractPlayerPoints} from "../../../../context/actions";
import {useAppContext} from "../../../../context/context";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

const MobileButton: React.FC<{ value: string, currentPoints: string, setCurrentPoints: any }> =
    ({
         value,
         currentPoints,
         setCurrentPoints
     }) => {

        const {dispatch} = useAppContext();
        const setPlayerPoints = useCallback((points: number) => dispatch(subtractPlayerPoints(points))
            , [dispatch]);

        const onClick = (value: {} | null | undefined, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): any => {
            event.preventDefault();

            if (value === "ok!") {

                setPlayerPoints(parseInt(currentPoints));
                setCurrentPoints("0");

            } else if (value === "<-") {
                setCurrentPoints("0");
            } else {

                if (currentPoints === "0") {
                    setCurrentPoints(value);
                } else if (currentPoints.length < 3 && parseInt(currentPoints + value) < 181) {
                    setCurrentPoints(currentPoints + value);
                }
            }
        }

        return (
            <>
                <ButtonGroup>
                    <Button style={{
                        width: "25vw",
                        height: "10vh",
                        fontSize: "1.5rem"
                    }} onClick={(event) => onClick(value, event)}>
                        {value}
                    </Button>
                </ButtonGroup>

            </>
        )
    }

export default MobileButton;

