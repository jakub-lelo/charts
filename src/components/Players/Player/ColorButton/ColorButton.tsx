import React from "react";

const ColorButton: React.FC<{
    color: string
    index: number
    setNewPlayerColor?: (name: string, index: number) => void;
}> = ({color, index, setNewPlayerColor}) => {

    const onChange = (e: { target: { value: any; }; }) => {
        setNewPlayerColor?.(e.target.value, index);
    }

    return (
        <input type="color" value={color} onChange={onChange}/>
    );
};

export default ColorButton;
