import React from "react";
import { Cover } from "./Cover";
import { covers } from "../data";

export default function Home() {
    return (
        <div className="flex overflow-y-auto overflow-x-hidden min-h-screen max-h-screen text-white bg-dark">
            <div className="nav bg-red-500 w-[52px] p-5 box-content"></div>

            <div className="flex flex-col max-h-screen bg-blue-500 app grow">
                <div className="searchbar bg-green-500 w-full h-[52px] p-5 box-content"></div>

                <div className="overflow-auto p-5 pb-24 w-full content">
                    <div class="flex">
                        <div className="w-48 bg-red-500"></div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full h-20 bg-yellow-500 player"></div>
        </div>
    );
}
