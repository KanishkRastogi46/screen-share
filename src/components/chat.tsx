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
                    <div className="flex justify-start items-center p-2 bg-blue-500 w-full h-[20%] md:h-[10%]">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-300 mr-2" style={{ backgroundImage: 'url()', backgroundSize: 'cover' }}></div>
                            <span className="text-white font-bold">Username</span>
                        </div>
                    </div>
                    <div className="text-black md:h-[80%] h-[60%] w-full p-2 overflow-y-auto">
                        <div className="flex justify-start mt-2">
                            <div className="bg-purple-100 text-black p-2 rounded-lg max-w-xs">
                                <p><span className="font-bold text-violet-500">Bot: </span>Hello User, How can I help you? I hope you are doing well</p>
                            </div>
                        </div>
                        {
                            messages.map((msg, index) => {
                                return (
                                    <div className="w-full mb-4" key={index}>
                                        <div className="flex justify-end mt-2">
                                            <div className="bg-blue-100 text-black p-2 rounded-lg max-w-xs">
                                                <p><span className="font-bold text-blue-500">User: </span>{msg}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-start mt-2">
                                            <div className="bg-purple-100 text-black p-2 rounded-lg max-w-xs">
                                                <p><span className="font-bold text-violet-500">Bot: </span>{botMessage}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center items-center w-full md:h-[10%] h-[20%]  gap-2 px-2 rounded-lg">
                        <input 
                            type="text" 
                            className="flex-grow h-10 bg-white rounded-[10px] px-2 py-1 text-black border-2 border-black focus:border-blue-500" 
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            placeholder="Type your message..."
                            autoFocus
                        />
                        <input 
                            type="file" 
                            className="hidden" 
                            id="filePicker"
                        />
                        <label 
                            htmlFor="filePicker" 
                            className="flex-shrink-0 h-10 bg-gray-300 text-black rounded-xl px-4 flex items-center cursor-pointer"
                        >
                            +
                        </label>
                        <button 
                            className="flex-shrink-0 h-10 bg-black text-white rounded-xl px-4"
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


