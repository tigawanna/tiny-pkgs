// Generated with util/create-component.js
import React from "react";

import { LoadingElipseProps } from "./LoadingElipse.types";

import "./LoadingElipse.css";

const LoadingElipse: React.FC<LoadingElipseProps> = ({ }) => {
    return (
        <div className='w-full h-full flex justify-center items-center '>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
export default LoadingElipse;

