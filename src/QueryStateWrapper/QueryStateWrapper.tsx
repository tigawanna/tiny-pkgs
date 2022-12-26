// Generated with util/create-component.js
import React from "react";
import { QueryStateWrapperProps } from "./QueryStateWrapper.types";

import "./QueryStateWrapper.css";

const QueryStateWrapper: React.FC<QueryStateWrapperProps> = (
    { children, loader,query,length }) => {

    if (query.isLoading) {
        return (
            <div className="w-full  flex items-center justify-center">
               <div className="w-[100%] h-full flex items-center justify-center  ">
                    {loader ? loader : <Loading />}
                </div>
            </div>
        );
    }
    if (query.isError) {
        return (
            <div className="w-full flex items-center justify-center  ">
                <div className="max-w-[90%] w-fit h-fit p-2 flex items-center justify-center 
                 text-red-700 bg-red-100 border border-red-900  text-base rounded-lg">
                    {/* @ts-expect-error */}
                    {query.error?.message}
                </div>
            </div>
        );
    }
    if (length && length === 0 ) {
       return ( 
       <div className="w-full  flex items-center justify-center ">
            <div className="max-w-[90%] w-fit h-fit p-2 flex items-center justify-center 
                 text-red-700 bg-red-100 border border-red-900  text-base rounded-lg">
                no records to show
            </div>
    </div>)
    }

    return (
    <>{children}</>
    );
}
interface Loading{

}
const Loading: React.FC<Loading> = ({ }) => {
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

export default QueryStateWrapper;

