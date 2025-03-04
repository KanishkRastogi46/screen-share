import React from "react";


export default function Header() {
    return (
        <>
            <div className="w-screen">
                <div className="w-full bg-[rgb(78,55,172)] h-[10vh] p-4 flex justify-between items-center">
                    <div className="logo text-xl font-semibold">Logo</div>
                    <div className="routes"></div>
                </div>
            </div>
        </>
    )
}