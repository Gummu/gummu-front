import React, { useContext } from "react";
import { Cover } from "./Cover";
import { covers } from "../data";
import SearchBar from "./SearchBar";
import { Player } from "./Player";
import TopSongs from "./TopSongs";
import NewRelease from "./NewRelease";
import HeroSection from "./HeroSection";
import AlbumCard from "./AlbumCard";
import BubbleSearch from "./BubbleSearch";
import ArtistProfile from "./ArtistProfile";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { StatesContext } from "../contexts/StatesProvider";
import DashboardCard from "./DashboardCard";
import Dashboard from "./Dashboard";

function HomeContent() {
    const { showBubleSearch } = useContext(StatesContext);

    return (
        <div
            className={`${!showBubleSearch ? "flex" : "hidden"
                } overflow-auto flex-col p-5 pb-24 w-full grow content`}
        >
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

export default function Home() {
    const { showBubleSearch } = useContext(StatesContext);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeContent />,
        },
        {
            path: "/artist",
            element: <ArtistProfile />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        }
    ]);

    return (
        <div className="flex overflow-y-auto overflow-x-hidden flex-col min-h-screen max-h-screen text-white bg-dark">
            <div className="flex flex-col max-h-screen bg-black app grow">
                <div className="flex w-full min-h-[5rem] h-20 searchbar bg-dark_alt">
                    <a href="/" className="flex justify-center items-center mr-4 w-20">

                        <img
                            src="/GUMMU-removebg-preview.png"
                            alt="logo"
                            
                        />
                    </a>
                    <div className="m-auto">
                        <SearchBar />
                    </div>

                    <div className="flex justify-center items-center mr-4 w-20">
                        <img src="/user.png" alt="profile" className="w-9" />
                    </div>
                </div>

                <div
                    className={`${showBubleSearch ? "flex" : "hidden"
                        } overflow-auto flex-col w-full grow content`}
                >
                    <BubbleSearch />
                </div>
            </div>

            <RouterProvider router={router} />

            <div className="absolute bottom-0 w-full h-24 bg-dark_alt player">
                <Player />
            </div>
        </div>
    );
}
