import React, {useContext} from "react";
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
        <div className="flex overflow-auto flex-col p-5 pb-24 w-full bg-black content grow">
            <div className="flex">
                <div className="mt-4 mr-10 ml-4">
                    <HeroSection />
                </div>

                <div className="mt-4 w-6/12">
                    <TopSongs />
                </div>
            </div>

            <div className="flex flex-col mt-7 max-w-screen">
                <div className="mb-2 ml-5 text-2xl">
                    <h2>New releases</h2>
                </div>
                <NewRelease />
                <div className="mb-2 ml-5 text-2xl">
                    <h2>Top 15</h2>
                </div>
                <AlbumCard />
            </div>
        </div>
    );
}

function ArtistProfile() {
    return (
        <div className="flex overflow-auto flex-col p-5 pb-24 w-screen bg-black content grow">
            <div className="profile-page min-h-[300px] flex">
                {/* 1 */}
                <div className="w-[300px] h-[300px]flex-none">
                    <div className="flex w-full h-full">
                        <div className="m-auto w-10/12 h-10/12">
                            <img src="/laylow.jpg" alt="pp" />
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="w-[300px] h-[300px] grow">
                    <div className="flex flex-col w-full h-full">
                        <h1 className="pt-10 text-5xl">Laylow</h1>
                        <h2 className="pt-1 text-gray-500 text-md">
                            2 091 267 listeners
                        </h2>
                        <p className="pt-1 text-sm text-gray-300 grow">
                            Jeremy Larroux, better known as Laylow is a French
                            rapper from Toulouse. In 2018, Laylow released the
                            EPs .RAW and RAW-Z. His debut album, Trinity,
                            featuring collaborations with Lomepal, S.Pri Noir,
                            Jok'Air, Wit. and Alpha Wann, was released on 28
                            February 2020. The album reached number 3 in the
                            French Albums Charts
                        </p>
                        <div className="flex">
                            <button className="px-4 py-2 mr-2 mb-6 text-white bg-black rounded-full border hover:bg-red-600">
                                Subscribe
                            </button>
                            <button className="px-4 py-2 mr-2 mb-6 text-white bg-black rounded-full border hover:bg-violet-600">
                                Join
                            </button>
                            <button className="px-4 py-2 mb-6 text-white bg-black rounded-full border hover:bg-yellow-600">
                                Donate
                            </button>
                            <div className="grow"></div>
                            <button className="flex py-2 pr-3 pl-2 mr-2 mb-6 text-white bg-black rounded-full border hover:bg-blue-600">
                                <img
                                    src="/play.svg"
                                    alt="play"
                                    className="mr-1 w-6 h-6"
                                />
                                Play
                            </button>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="w-[500px] h-[320px] flex-none p-10">
                    <div className="flex flex-col w-full h-full rounded-xl border-2 shadow-lg border-white-500">
                        <div className="w-full h-16 text-center fundings">
                            <h2 className="m-3 text-2xl">Fundings</h2>
                            <p className="mb-3 text-gray-300">
                                Participate in the creation of Laylow's next
                                album ! Support the artist and get royalties
                                each month.
                            </p>
                            <p className="mb-3 text-sm text-green-400">
                                236 934 € / 1 000 000 € collected
                            </p>
                            <p className="mb-3 text-sm text-gray-300">
                                <a href="#" className="underline">
                                    See more details about the funding here
                                </a>
                            </p>
                            <div>
                                <button className="px-4 py-2 mr-2 mb-6 text-white bg-black rounded-full border hover:bg-green-600">
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
                        <h1 className="text-2xl pt-4 pl-4">Most Listened</h1>
                        <div className="w-full h-20">
                            <div className="flex w-full h-full hover:bg-dark_alt">
                                <div className="my-auto">
                                    <div className="ml-10 w-12 h-12 flex">
                                        <img src="/laylow1.jpeg" alt="pp" />
                                        <div className="ml-2 my-auto">
                                            <h3 className="text-sm ml-4 w-24">
                                                IVERSON
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1"></div>
                                <div className="my-auto mr-10">2:45</div>
                            </div>
                        </div>
                        <div className="w-full h-20">
                            <div className="flex w-full h-full hover:bg-dark_alt">
                                <div className="my-auto">
                                    <div className="ml-10 w-12 h-12 flex">
                                        <img src="/laylow3.jpeg" alt="pp" />
                                        <div className="ml-2 my-auto">
                                            <h3 className="text-sm ml-4 w-24">
                                                Vent de l'Est
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1"></div>
                                <div className="my-auto mr-10">2:25</div>
                            </div>
                        </div>
                        <div className="w-full h-20">
                            <div className="flex w-full h-full hover:bg-dark_alt">
                                <div className="my-auto">
                                    <div className="ml-10 w-12 h-12 flex">
                                        <img src="/laylow1.jpeg" alt="pp" />
                                        <div className="ml-2 my-auto">
                                            <h3 className="text-sm ml-4 w-80">
                                                SPECIAL (ft. Nekfeu & Foushée)
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1"></div>
                                <div className="my-auto mr-10">3:51</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="h-[300px] grow flex flex-col pt-12">
                <div className="w-full h-20">
                            <div className="flex w-full h-full hover:bg-dark_alt">
                                <div className="my-auto">
                                    <div className="ml-10 w-12 h-12 flex">
                                        <img src="/laylow6.jpeg" alt="pp" />
                                        <div className="ml-2 my-auto">
                                            <h3 className="text-sm ml-4">
                                                10'
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1"></div>
                                <div className="my-auto mr-10">3:58</div>
                            </div>
                        </div>
                        <div className="w-full h-20">
                            <div className="flex w-full h-full hover:bg-dark_alt">
                                <div className="my-auto">
                                    <div className="ml-10 w-12 h-12 flex">
                                        <img src="/laylow1.jpeg" alt="pp" />
                                        <div className="ml-2 my-auto">
                                            <h3 className="text-sm ml-4 w-60">
                                                R9R-Line (ft Damso)
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1"></div>
                                <div className="my-auto mr-10">2:39</div>
                            </div>
                        </div>
                        <div className="w-full h-20">
                            <div className="flex w-full h-full hover:bg-dark_alt">
                                <div className="my-auto">
                                    <div className="ml-10 w-12 h-12 flex">
                                        <img src="/laylow2.jpeg" alt="pp" />
                                        <div className="ml-2 my-auto">
                                            <h3 className="text-sm ml-4">
                                                MEGATRON
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1"></div>
                                <div className="my-auto mr-10">2:45</div>
                            </div>
                        </div>
                </div>
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
        <div className="flex overflow-y-auto overflow-x-hidden flex-col min-h-screen max-h-screen text-white bg-dark">
            <div className="flex flex-col max-h-screen bg-black app grow">
                <div className="flex w-full min-h-[5rem] h-20 searchbar bg-dark_alt">
                    <div className="m-auto">
                        <SearchBar />
                    </div>
                    <div className="flex justify-center items-center mr-4 w-20">
                        <img src="/user.png" alt="profile" className="w-9" />
                    </div>
                </div>

                <div className={`${(showBubleSearch) ? 'flex' : 'hidden'} overflow-auto flex-col w-full grow content`}>
                    <BubbleSearch/>
                </div>

                <div className={`${(!showBubleSearch) ? 'flex' : 'hidden'} overflow-auto flex-col p-5 pb-24 w-full grow content`}>
                    <div className="flex">
                        <div className="mt-4 mr-10 ml-4">
                            <HeroSection />
                        </div>

                        <div className="mt-4 w-6/12">
                            <TopSongs />
                        </div>
                    </div>

                    <div className="flex flex-col mt-7 max-w-screen">
                        <div className="mb-2 ml-5 text-2xl">
                            <h2>New releases</h2>
                        </div>
                        <NewRelease />
                        <div className="mb-2 ml-5 text-2xl">
                            <h2>Top 15</h2>
                        </div>
                        <AlbumCard />
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
