'use client'

import React, { useState } from "react";
import Voice from "./voice";
import Screen from "./screen";
import Chat from "./chat";


export default function Main() {
    let [voice, setVoice] = useState(true);
    let [screen, setScreen] = useState(false);
    let [chat, setChat] = useState(false);

    const handleClick = function (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        let tabName = e.currentTarget.textContent;
        if (tabName === "Call") {
            setVoice(true);
            setScreen(false);
            setChat(false);
        } else if (tabName === "Screen") {
            setVoice(false);
            setScreen(true);
            setChat(false);
        } else if (tabName === "Chat") {
            setVoice(false);
            setScreen(false);
            setChat(true);
        }
    }

    return (
        <>
            <div className="w-screen h-[90vh]">
                <div className="w-full h-full flex flex-col items-center justify-between bg-gradient-to-r from-violet-500 via-pink-300 to-violet-700 bg-[length:200%_200%] animate-move-bg">
                    <div className="">
                    {
                        voice && <Voice />
                    }
                    </div>
                    
                    <div className="flex">
                    {
                        screen && <Screen />
                    }
                    </div>
                    
                    <div className="flex">
                    {
                        chat && <Chat />
                    }
                    </div>
                    
                    <div className="flex rounded-2xl h-[5vh] mb-8 bg-black">
                        <button 
                            className={`w-16 ${voice ? 'bg-purple-500': ''} rounded-2xl`}
                            onClick={handleClick}
                        >
                            Call
                        </button>
                        <button 
                            className={`w-16 ${screen ? 'bg-purple-500': ''} rounded-2xl`}
                            onClick={handleClick}
                        >
                            Screen
                        </button>
                        <button 
                            className={`w-16 ${chat ? 'bg-purple-500': ''} rounded-2xl`}
                            onClick={handleClick}
                        >
                            Chat
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}