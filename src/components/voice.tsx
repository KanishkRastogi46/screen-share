'use client'

import React from "react";
import voiceRecorder from "@/utils/voiceRecorder";


export default function Voice() {
    const [audioStream, setAudioStream] = React.useState<MediaStream | undefined>();
    const [record, setRecord] = React.useState<Boolean>(false);

    const startRecording = async function () {
        setAudioStream(await voiceRecorder());
        setRecord(!record);

        if (audioStream) {

            const audioContext = new AudioContext();
            const src = audioContext.createMediaStreamSource(audioStream);

            const analyzer = audioContext.createAnalyser();
            analyzer.fftSize = 2048;
            const bufferLength = analyzer.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            analyzer.getByteTimeDomainData(dataArray);

            src.connect(analyzer);
            analyzer.connect(audioContext.destination);
        }
    }

    const stopRecording = function () {
        if (audioStream) {
            const tracks = audioStream.getTracks();
            tracks.forEach((track) => track.stop());
            setRecord(!record);
        }
        setAudioStream(undefined);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-evenly md:w-[80vw] w-[100vw] h-[70vh]">
                <div className="flex flex-wrap justify-around w-full gap-3">
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">General Advisor</div>
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Workflow</div>
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Technical issues</div>
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Others</div>
                </div>
                <h1 className="text-5xl font-bold uppercase">Text</h1>
                <div 
                    className="rounded-full bg-black w-[200px] h-[200px] flex justify-center items-center text-xl"
                >
                    LOGO
                </div>
                <div className="text-center font-semibold text-xl text-black px-2">Welcome! Speak clearly to describe your issue and our AI <br />agent will guide you step-by-step to a quick solution.</div>
                <button 
                    type="button" 
                    className={`px-4 py-2 ${record ? 'bg-red-700 animate-pulse' : 'bg-green-600'} text-white rounded-xl`}
                    onClick={record ? stopRecording : startRecording}
                >
                    {record ? 'Stop' : 'Record'}
                </button>
            </div>
        </>
    )
}