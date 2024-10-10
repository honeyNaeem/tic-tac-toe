import React from "react";

const Square = (props) => {
    return (
        <div
        onClick={props.onClick}
        style={{
            // borderLeft:" 1px solid",
            // borderRight: "1px solid",
            // border:"1px solid",
            // height:"100px",
            // width:"100%",
            // display:"flex",
            // justifyContent:"center",
            // alignItems:"center",
        }}
         className=" border-black w-[100px] h-[100px] flex justify-center items-center text-5xl  ">
            <div className="absolute left-1/3 top-4 bottom-4 w-3 border-2 border-pink-600 rounded-full" style={{ boxShadow: '0 0 2px #dd15d5' }}></div>
            <div className="absolute left-[87px] z-10 top-4 bottom-4 w-2 bg-gray-900 rounded-full"></div>
            <div className="absolute right-1/3 top-4 bottom-4 w-3 border-2 border-pink-600 rounded-full" style={{ boxShadow: '0 0 2px #dd15d5' }}></div>
            <div className="absolute right-[87px] z-10 top-4 bottom-4 w-[9px] bg-gray-900 rounded-full"></div>
            <div className="absolute top-1/3 left-4 right-4 h-3 border-2 border-pink-600 rounded-full" style={{ boxShadow: '0 0 2px #dd15d5' }}></div>
            <div className="absolute top-[102px] z-10 left-4 right-4 h-[8px] bg-gray-900 rounded-full"></div>
            <div className="absolute bottom-1/3 left-4 right-4 h-3 border-2 border-pink-600 rounded-full" style={{ boxShadow: '0 0 2px #dd15d5' }}></div>
            <div className="absolute bottom-[102px] z-10 left-4 right-4 h-[8px] bg-gray-900 rounded-full"></div>

        </div>
    );
};
{/* <div className="absolute left-1/3 top-4 bottom-4 w-0.5 bg-pink-500 rounded-full" style={{ boxShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff' }}></div> */}

export default Square;