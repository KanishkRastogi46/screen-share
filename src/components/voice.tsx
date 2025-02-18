import React from "react";


export default function Voice() {
    return (
        <>
            <div className="flex flex-col items-center justify-around md:w-[80vw] w-[100vw] h-[70vh]">
                <div className="flex justify-around w-full">
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Option1</div>
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Option2</div>
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Option3</div>
                    <div className="p-2 bg-black rounded-3xl md:w-1/6 text-center">Option4</div>
                </div>
                <h1 className="text-5xl font-bold">Logo</h1>
                <canvas className="rounded-full bg-black w-[200px] h-[200px]"></canvas>
                <div className="text-center px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate aut fuga sunt itaque nisi ad sint voluptas illum perferendis quas veritatis, facilis perspiciatis facere dolor quis magnam. Officia, dicta.</div>
            </div>
        </>
    )
}