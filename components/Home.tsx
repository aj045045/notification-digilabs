'use client'
import { BsCursorFill } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import { FiBell } from "react-icons/fi";
import { ErrorTag } from "./Error";
import { useState, useEffect } from 'react';

export function NavBar() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(intervalId);
    }, []);
    const hour = currentTime.getHours();
    const min = currentTime.getMinutes();

    return (
        <>
            <div className="flex justify-between flex-row">
                <div className="flex space-x-2 flex-row">
                    <div>{hour < 10 ? '0' + hour : hour}:{min < 10 ? '0' + min : min}</div>
                    <div className="text-sm self-center"><BsCursorFill /></div>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="text-base self-center"><AiFillSignal /></div>
                    <div className="text-base self-center"><FaWifi /></div>
                    <div className="text-xl self-center"><FaBatteryThreeQuarters /></div>
                </div>
            </div>
            <div className="pt-16 mx-auto text-center">
                <div className="text-3xl font-sans font-semibold">Lorem Ipsum..</div>
                <div className="mt-3 text-lg text-stone-400">Lorem ipsum dolor ist amet.</div>
            </div>
        </>
    );
}


export function Bell() {
    return (
        <div className="py-20">
            <div className="flex justify-center items-center">
                <div className="relative rounded-full p-7 animate-pulse   border border-orange-500 to-slate-800">
                    <div className="relative rounded-full p-7 border border-orange-500">
                        <div className="relative rounded-full p-7 border border-orange-500">
                            <div className="relative rounded-full p-20 animate-pulse border border-orange-500">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-6xl p-4 animate-none bg-gradient-to-b from-orange-300 via-red-700 to-slate-800 w-fit mx-auto rounded-full my-52"><FiBell /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export function ButtonClick() {
    const [isClick, setClick] = useState(false);
    return (
        <div onClick={() => setClick(!isClick)} className="border-2 border-orange-400 font-bold text-center rounded-md py-2 text-lg bg-gradient-to-r from-red-900 via-orange-500 w-full to-slate-800">
            {<ErrorTag error_type="success" value="Explicabo a perferendis natus facere officia. Nisi voluptatem beatae voluptas velit aliquam necessitatibus. Ut est facilis consequuntur soluta provident quis sunt. Distinctio a asperiores natus aperiam sed incidunt." isClick={isClick} setClick={setClick} />}
            Send notification
        </div>
    )
}