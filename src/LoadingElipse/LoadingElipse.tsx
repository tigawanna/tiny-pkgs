// Generated with util/create-component.js
import React from "react";

import { LoadingElipseProps } from "./LoadingElipse.types";

import "./LoadingElipse.css";

const LoadingElipse: React.FC<LoadingElipseProps> = ({ size,backgroundColor,border="2px solid yellow" }) => {
  const styles = { "--rel-size":size,backgroundColor,border }
    return (
        <div className='flex justify-center items-center'>
            <div className="lds-ellipsis ">
                <div style={styles}></div>
                <div style={styles}></div>
                <div style={styles}></div>
        </div>
        </div>
    );
}
export default LoadingElipse;

