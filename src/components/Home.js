import React from "react";
import { Cover } from "./Cover";
import { covers } from "../data";
import SearchBar from "./SearchBar";
import { Player } from "./Player";
import TopSongs from "./TopSongs";
import NewRelease from "./NewRelease";
import HeroSection from "./HeroSection";
import AlbumCard from "./AlbumCard";
import LaylowCard from "./LaylowCard";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

function HomeContent() {
    return (
        <div className="content grow overflow-auto p-5 pb-24 w-full flex flex-col bg-black">
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
    );
}

function ArtistProfile() {
    return (
        <div className="content grow overflow-auto p-5 pb-24 w-screen flex flex-col bg-black">
            <div className="profile-page min-h-[300px] flex">
                {/* 1 */}
                <div className="w-[300px] h-[300px]flex-none">
                    <div className="flex w-full h-full">
                        <div className="m-auto w-10/12 h-10/12 ">
                            <img src="/laylow.jpg" alt="pp" />
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="w-[300px] h-[300px] grow">
                    <div className="flex flex-col w-full h-full">
                        <h1 className="text-5xl pt-10">Laylow</h1>
                        <h2 className="text-md text-gray-500 pt-1">
                            2 091 267 listeners
                        </h2>
                        <p className="text-sm text-gray-300 pt-1 grow">
                            Jeremy Larroux, better known as Laylow is a French
                            rapper from Toulouse. In 2018, Laylow released the
                            EPs .RAW and RAW-Z. His debut album, Trinity,
                            featuring collaborations with Lomepal, S.Pri Noir,
                            Jok'Air, Wit. and Alpha Wann, was released on 28
                            February 2020. The album reached number 3 in the
                            French Albums Charts
                        </p>
                        <div className="flex">
                            <button className="bg-black text-white rounded-full px-4 py-2 mb-6 border mr-2 hover:bg-red-600">
                                Subscribe
                            </button>
                            <button className="bg-black text-white rounded-full px-4 py-2 mb-6 border mr-2 hover:bg-violet-600">
                                Join
                            </button>
                            <button className="bg-black text-white rounded-full px-4 py-2 mb-6 border hover:bg-yellow-600">
                                Donate
                            </button>
                            <div className="grow"></div>
                            <button className="bg-black text-white rounded-full pl-2 pr-3 py-2 mb-6 mr-2 border hover:bg-blue-600 flex">
                                <img
                                    src="/play.svg"
                                    alt="play"
                                    className="w-6 h-6 mr-1"
                                />
                                Play
                            </button>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="w-[500px] h-[320px] flex-none p-10">
                    <div className="flex w-full h-full flex-col border-2 shadow-lg border-white-500 rounded-xl">
                        <div className="fundings w-full h-16 text-center">
                            <h2 className="text-2xl m-3">Fundings</h2>
                            <p className="text-gray-300 mb-3">
                                Participate in the creation of Laylow's next
                                album ! Support the artist and get royalties
                                each month.
                            </p>
                            <p className="text-green-400 text-sm mb-3">
                                236 934 € / 1 000 000 € collected
                            </p>
                            <p className="text-gray-300 text-sm mb-3">
                                <a href="#" className="underline">
                                    See more details about the funding here
                                </a>
                            </p>
                            <div>
                                <button className="bg-black text-white rounded-full px-4 py-2 mb-6 border mr-2 hover:bg-green-600">
                                    Participate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-page min-h-[300px] flex">
                {/* 1 */}
                <div className="h-[300px] grow">
                    <div className="flex flex-col">
                        <h1 className="text-xl pt-4 pl-4">Most Listened</h1>
                    </div>
                </div>
                {/* 2 */}
                <div className="h-[300px] bg-orange-500 grow"></div>
            </div>
            <div className="profile-page min-h-[300px] flex mt-6">
                <div className="h-[300px] grow">
                    <LaylowCard />
                </div>
            </div>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeContent />,
    },
    {
        path: "/artist",
        element: <ArtistProfile />,
    },
]);

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
            </div>

            <RouterProvider router={router} />

            <div className="absolute bottom-0 w-full h-24 bg-dark_alt player">
                <Player />
            </div>
        </div>
    );
}
