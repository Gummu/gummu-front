import React from "react";
import { Cover } from "./Cover";
import { covers } from "../data";

export default function Home() {
    return (
        <div className="bg-dark text-white flex min-h-screen max-h-screen overflow-y-auto overflow-x-hidden">
            <div className="nav bg-red-500 w-[52px] p-5 box-content"></div>

            <div className="app bg-blue-500 grow max-h-screen flex flex-col">
                <div className="searchbar bg-green-500 w-full h-[52px] p-5 box-content"></div>

                <div className="content w-full p-5 overflow-auto pb-24">
                    <div class="flex ">
                        <div className="bg-red-500 w-48"></div>
                    </div>
                </div>
            </div>

            <div className="player absolute bottom-0 h-20 w-full bg-yellow-500"></div>
        </div>
    );
}
