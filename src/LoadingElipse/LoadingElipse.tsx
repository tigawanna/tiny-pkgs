// Generated with util/create-component.js
import React from "react";
import { LoadingElipseProps } from "./LoadingElipse.types";
import "./LoadingElipse.css";

const LoadingElipse: React.FC<LoadingElipseProps> = ({ size,backgroundColor,border="2px solid yellow" }) => {
  const styles = { "--rel-size":size=1,backgroundColor,border }
    return (
        <div className='flex justify-center items-center'>
            <span
            style={styles} 
            className="tiny-pkg-loader-elipse"></span>
        </div>
    );
}
export default LoadingElipse;

