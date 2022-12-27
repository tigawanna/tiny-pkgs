// Generated with util/create-component.js
import React from "react";
import { LoadingSpinnerProps } from "./LoadingSpinner.types";
import "./LoadingSpinner.css";

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (
    { size, backgroundColor, border = "10px dotted yellow" }) => {
    const styles = { "--rel-size": size, backgroundColor, border }
    return (
    <div className='flex justify-center items-center '>
        <span 
        style={styles}
        className="tiny-pkgs-loading-spinner"></span>
     </div>
);}

export default LoadingSpinner;

