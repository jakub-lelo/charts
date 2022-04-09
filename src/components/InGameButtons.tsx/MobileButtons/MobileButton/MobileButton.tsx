import React, {useCallback} from 'react';
import styled from "styled-components";
import {subtractPlayerPoints} from "../../../../context/actions";
import {useAppContext} from "../../../../context/context";

const MobileButtonStyled = styled.button` 
width: 25vw;
height: 10vh;
background-color: #fff;
`;


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
            console.log(value);

            if (value === "ok!") {

                setPlayerPoints(parseInt(currentPoints));
                setCurrentPoints("0");

            } else if (value === "clear") {
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
                <MobileButtonStyled onClick={(event) => onClick(value, event)}>
                    {value}
                </MobileButtonStyled>
            </>
        )
    }

export default MobileButton;

