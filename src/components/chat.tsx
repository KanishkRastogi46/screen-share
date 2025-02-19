'use client';

import React, { useState } from "react";


export default function Chat() {
    let [message, setMessage] = useState<string>('');
    let [messages, setMessages] = useState<string[]>([]);

    const botMessage = "This is a bot message, just for testing purposes";

    const sendMessage = function (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        if (message !== '') {
            setMessages([...messages, message]);
            setMessage('');
        }
    }

    return (
        <>
            <div className="flex flex-col md:flex-row md:w-[80vw] w-[90vw] h-[70vh] items-center justify-center">
                <div className="flex justify-center items-center md:w-[60%] w-full h-full shadow-2xl bg-violet-300 rounded-lg">
                    <h1>Screen share</h1>
                </div>
                <div className="flex flex-col justify-center items-center md:w-[40%] w-full h-full bg-white rounded-lg">
                    <div className="text-black md:h-[90%] h-[80%] w-full p-2 overflow-y-auto">
                        {
                            messages.map((msg, index)=>{
                                return (
                                    <div className="w-full" key={index}>
                                        <div className="flex">
                                            <p className="text-black  p-2 mb-2"><span className="font-bold text-blue-500">User: </span>{msg}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="text-black  p-2 text-left mb-2"><span className="font-bold text-violet-500">Bot: </span>{botMessage}</p>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center items-center w-full md:h-[10%] h-[20%] bg-blue-500 gap-2 px-2">
                        <input 
                            type="text" 
                            className="w-3/4 h-1/2 bg-white rounded-[10px] px-2 py-1 text-black" 
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <button 
                            className="w-1/4 h-1/2 bg-black text-white rounded-xl"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


