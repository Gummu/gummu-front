import React from "react";
import DashboardGraph from "./DashboardGraph";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    return (
        <div className="w-screen h-screen bg-black flex flex-col pb-28">
            <div className="header h-20 flex">
                <div className="flex justify-center items-center px-5">
                    <h1 className="text-2xl">Dashboard</h1>
                </div>
                <div className="buttons flex-1"></div>
                <div className="buttons flex-1 flex  items-center">
                    <button className="px-4 py-2 mr-4 text-white bg-black rounded-full border hover:bg-blue-600">
                        Upload
                    </button>
                    <button className="px-4 py-2 mr-4 text-white bg-black rounded-full border hover:bg-blue-600">
                        Start a new Funding
                    </button>
                    <button className="px-4 py-2 text-white bg-black rounded-full border hover:bg-blue-600">
                        Settings
                    </button>
                </div>
            </div>

            <div className="body w-screen flex-1 flex">
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 flex">
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 flex m-4 justify-center items-center bg-dark_alt">
                                coucou
                            </div>
                            <div className="flex-1 flex m-4 justify-center items-center bg-dark_alt">
                                coucou
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 flex m-4 justify-center items-center bg-dark_alt">
                                coucou
                            </div>
                            <div className="flex-1 flex m-4 justify-center items-center bg-dark_alt">
                                coucou
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="m-4 mb-4 flex h-full justify-center items-center bg-dark_alt">
                            coucou
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 flex m-4 justify-center items-center bg-dark_alt">
                                coucou
                            </div>
                            <div className="flex-1 flex m-4 justify-center items-center bg-dark_alt">
                                coucou
                            </div>
                        </div>
                        <div className="flex-1 flex m-4 bg-dark_alt justify-center items-center">
                            coucou
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1 flex m-4 basis-1/3 bg-dark_alt justify-center items-center">
                            coucou
                        </div>
                        <div className="flex-1 flex m-4 basis-2/3 bg-dark_alt justify-center items-center">
                            coucou
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
