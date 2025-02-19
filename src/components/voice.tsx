'use client'

import React, { useEffect } from "react";
import voiceRecorder from "@/utils/voiceRecorder";


export default function Voice() {
    let [audioStream, setAudioStream] = React.useState<MediaStream | undefined>();

    useEffect(() => {
        if (navigator.mediaDevices) {
            voiceRecorder()
            .then(s=>{
                setAudioStream(s)
            })
            .catch((e)=>{console.log(e)});
        }
        else alert("Your browser does not support voice recording");

        return ()=>{
            if (audioStream) {
                let tracks = audioStream.getTracks();
                tracks.forEach((track) => track.stop());
            }
            setAudioStream(undefined);
        }
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-around md:w-[80vw] w-[100vw] h-[70vh]">
                <div className="flex flex-wrap justify-around w-full gap-3">
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">General Advisor</div>
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Workflow</div>
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Technical issues</div>
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Others</div>
                </div>
                <h1 className="text-5xl font-bold uppercase">Text</h1>
                <div className="rounded-full bg-black w-[200px] h-[200px] flex justify-center items-center text-xl">LOGO</div>
                <div className="text-center font-semibold text-xl text-black px-2">Welcome! Speak clearly to describe your issue and our AI <br />agent will guide you step-by-step to a quick solution.</div>
            </div>
        </>
    )
}