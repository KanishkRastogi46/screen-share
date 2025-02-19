'use client';

import React, { useState, useRef } from "react";
import screenRecording from "@/utils/screenRecording";


export default function Screen() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [record, setRecord] = useState<boolean>(false);
    const [stream, setStream] = useState<MediaStream>();

    const startRecording = async function () {
        setRecord(true);
        setStream(await screenRecording(videoRef));
    }

    const stopRecording = function () {
        if (stream && videoRef.current) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
        setRecord(false);
    }

    return (
        <>
            <div className="flex md:w-[60vw] w-[90vw] h-[70vh] items-center justify-center">
                <div className="flex flex-col justify-center items-center w-full h-full shadow-2xl bg-violet-300 rounded-lg">
                    <div className="w-full h-[80%]">
                        {
                            record && <video className="w-full h-full" ref={videoRef}></video>
                        }
                    </div>
                    <div className="flex justify-center items-center w-full h-[20%] gap-4">
                        <button 
                            onClick={startRecording}
                            className="px-4 py-2 bg-green-600 text-white rounded-xl"
                            disabled={record ? true : false}
                        >
                            Record
                        </button>
                        <button 
                            onClick={stopRecording}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg"
                            disabled={record ? false : true}
                        >
                            Stop
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}