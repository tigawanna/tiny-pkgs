// Generated with util/create-component.js
import React from "react";
import { TheIconProps } from "./TheIcon.types";
import "./TheIcon.css";
import { IconContext } from "react-icons/lib";


const TheIcon: React.FC<TheIconProps> = ({
  Icon,
  color,
  iconAction,
  iconstyle,
  size,
}) => {
  return ( 
  <IconContext.Provider value={{
    size,color,className: iconstyle}}>
   <Icon onClick={() => iconAction && iconAction()} />
</IconContext.Provider>
  );
};

export default TheIcon;
