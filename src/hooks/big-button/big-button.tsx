import React from "react";
import { IBigButtonProps } from "./big-button.model";

import "./big-button.scss";
export const BigButton: React.FC<IBigButtonProps> = ({
    text,
    onClick,
    color,
}) => {

    return(
        <button 
        className={`big-button ${color ? `big-button--${color}` : ""}`}
        onClick={onClick}
        color={color}
        >
            <span className="big-button__text">{text}</span>
        </button>
    )
}