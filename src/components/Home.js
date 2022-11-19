import React from "react";
import { Cover } from "./Cover";
import { covers } from "../data";
import SearchBar from "./SearchBar";
import { Player } from "./Player";

export default function Home() {
    return (
        <div className="flex flex-col overflow-y-auto overflow-x-hidden min-h-screen max-h-screen text-white bg-dark">
            <div className="flex flex-col max-h-screen bg-black app grow">
                <div className="flex w-full h-20 searchbar bg-dark_alt">
                    <div className="m-auto">
                        <SearchBar />
                    </div>
                    <div className="flex justify-center items-center w-20 mr-4">
                        <img src="/user.png" alt="profile" className="w-9" />
                    </div>
                </div>

                <div className="grow overflow-auto p-5 pb-24 w-full content">
                    <div className="flex">
                        <div className="w-48 bg-red-500"></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-24 bg-dark_alt player">
                <Player />
            </div>
        </div>
    );
}
