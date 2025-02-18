import React from "react";


export default function Chat() {
    return (
        <>
            <div className="flex flex-col md:flex-row md:w-[80vw] w-[90vw] h-[70vh] items-center justify-center">
                <div className="flex justify-center items-center md:w-[60%] w-full h-full shadow-2xl bg-purple-800 rounded-lg">
                    <h1>Screen share</h1>
                </div>
                <div className="flex flex-col justify-center items-center md:w-[40%] w-full h-full bg-white rounded-lg">
                    <h1 className="text-black md:h-[90%] h-[80%]">Chats</h1>
                    <div className="flex justify-center items-center w-full md:h-[10%] h-[20%] bg-blue-500 gap-2 px-2">
                        <input type="text" className="w-3/4 h-1/2 bg-white rounded-[10px] px-2 py-1 text-black" />
                        <button className="w-1/4 h-1/2 bg-black text-white rounded-xl">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}