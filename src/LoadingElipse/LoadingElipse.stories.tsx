import React from "react";
import LoadingElipse from "./LoadingElipse";
import '../index.css'
export default {
    title: "LoadingElipse"
};


export const SimpleLoadingSpinner = () => {
    const [open, setOpen] = React.useState(true);
    return (
        <div className="w-full h-full  flex justify-center items-center ">

         <LoadingElipse/>
        </div>
    );
};
