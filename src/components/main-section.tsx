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
        } else if (tabName === "Screen Share") {
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
                <div className="w-full h-full flex flex-col items-center justify-evenly bg-gradient-to-r from-violet-300 via-[rgb(108,9,138)] to-violet-300 bg-[length:200%_200%] animate-move-bg">
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
                    
                    <div className="flex rounded-2xl h-[5vh] mb-12 bg-black">
                        <button 
                            className={`w-16 ${voice ? 'bg-blue-700': ''} rounded-2xl`}
                            onClick={handleClick}
                        >
                            Call
                        </button>
                        <button 
                            className={`w-32 ${screen ? 'bg-blue-700': ''} rounded-2xl`}
                            onClick={handleClick}
                        >
                            Screen Share
                        </button>
                        <button 
                            className={`w-16 ${chat ? 'bg-blue-700': ''} rounded-2xl`}
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