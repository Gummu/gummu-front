import React from "react";
import { Cover } from "./Cover";
import { covers } from "../data";
import SearchBar from "./SearchBar";
import { Player } from "./Player";
import TopSongs from "./TopSongs";
import NewRelease from "./NewRelease";
import HeroSection from "./HeroSection";
import AlbumCard from "./AlbumCard";

export default function Home() {
    return (
        <div className="flex flex-col overflow-y-auto overflow-x-hidden min-h-screen max-h-screen text-white bg-dark">
            <div className="flex flex-col max-h-screen bg-black app grow">
                <div className="flex w-full min-h-[5rem] h-20 searchbar bg-dark_alt">
                    <div className="m-auto">
                        <SearchBar />
                    </div>
                    <div className="flex justify-center items-center w-20 mr-4">
                        <img src="/user.png" alt="profile" className="w-9" />
                    </div>
                </div>

                <div className="grow overflow-auto p-5 pb-24 w-full content flex flex-col">

                    <div className="flex">
                        <div className="mt-4 ml-4 mr-10">
                            <HeroSection />
                        </div>
                    
                        <div className="w-6/12 mt-4">
                            <TopSongs />
                        </div>
                    </div>

                    <div className="flex max-w-screen mt-7 flex-col">
                        <div className="text-2xl ml-5 mb-2">
                            <h2>New releases</h2>
                        </div>
                        <NewRelease />
                        <div className="text-2xl ml-5 mb-2">
                            <h2>Top 15</h2>
                        </div>
                        <AlbumCard />
                    </div>
                </div>

            </div>

            <div className="absolute bottom-0 w-full h-24 bg-dark_alt player">
                <Player />
            </div>
        </div>
    );
}
