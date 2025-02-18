'use client';

import React, { useEffect, useRef } from "react";
import screenRecording from "@/utils/screenRecording";


export default function Screen() {
    let videoRef = useRef<HTMLVideoElement>(null);
    useEffect(()=>{
        screenRecording(videoRef);
    }, []);
    return (
        <>
            <div className="flex md:w-[60vw] w-[90vw] h-[70vh] items-center justify-center">
                <div className="flex justify-center items-center w-full h-full shadow-2xl bg-purple-800 rounded-lg">
                    <video className="w-full h-full" ref={videoRef}></video>
                </div>
            </div>
        </>
    )
}