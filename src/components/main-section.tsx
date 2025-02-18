'use client'

import React, { useState } from "react";
import Voice from "./voice";
import Screen from "./screen";
import Chat from "./chat";


export default function Main() {
    let [voice, setVoice] = useState(true);
    let [screen, setScreen] = useState(false);
    let [chat, setChat] = useState(false);

    return (
        <>
            <div className="w-screen h-[90vh]">
                <div className="w-full h-full bg-gradient-to-b from-violet-500 via-pink-300 to-violet-700 ">
                    {
                        voice && <Voice />
                    }
                    {
                        screen && <Screen />
                    }
                    {
                        chat && <Chat />
                    }
                </div>
            </div>
        </>
    )
}