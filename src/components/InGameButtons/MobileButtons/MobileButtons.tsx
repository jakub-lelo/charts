import React, {useState} from "react";
import styled from "styled-components";
import MobileButton from "./MobileButton/MobileButton";

const MobileButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

const CurrentPoints = styled.h1`
  flex-grow: 1;
`;

const MobileButtons: React.FC = () => {

    const [currentPoints, setCurrentPoints] = useState<string>("0");

    const mobileButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "<-", "0", "ok!"];


    return (
        <>
            <CurrentPoints> {currentPoints.toString() !== "0" ? currentPoints : "enter score"}
            </CurrentPoints>

            <MobileButtonsContainer>
                {mobileButtons.map((item, index) => (

                    <MobileButton value={item} currentPoints={currentPoints} setCurrentPoints={setCurrentPoints}
                                  key={`Player Button + ${index}`}/>
                ))}
            </MobileButtonsContainer>
        </>
    )

}


export default MobileButtons;
