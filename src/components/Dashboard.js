import React from "react";
import DashboardGraph from "./DashboardGraph";
import DashboardCard from "./DashboardCard";
import DashboardLastFunding from "./DashboardLastFunding";

const Dashboard = () => {
    return (
        <div className="w-screen bg-black pb-32 flex flex-col">
            <div className="header h-20 flex">
                <div className="flex justify-center items-center px-5">
                    <h1 className="text-3xl">Dashboard</h1>
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

            <div className="body min-w-full min-h-full p-4 pb-28">
                <div className="grid grid-cols-4 gap-4 content-center">
                    {/* 1 */}
                    <DashboardCard number={62} description={"Listners"}>
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 70 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="35" cy="35" r="35" fill="#6644A9" />
                            <path
                                d="M26 44C26 40.625 30.5 40.625 32.75 38.375C33.875 37.25 30.5 37.25 30.5 31.625C30.5 27.8754 31.9996 26 35 26C38.0004 26 39.5 27.8754 39.5 31.625C39.5 37.25 36.125 37.25 37.25 38.375C39.5 40.625 44 40.625 44 44"
                                stroke="#28176F"
                                stroke-width="2"
                                stroke-linecap="square"
                            />
                        </svg>
                    </DashboardCard>
                    {/* 2 */}
                    <DashboardCard number={23} description={"New Followers"}>
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 70 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="35" cy="35" r="35" fill="#33D69F" />
                            <path
                                d="M26 39L31 34"
                                stroke="#18919D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M32 34C32.5523 34 33 33.5523 33 33C33 32.4477 32.5523 32 32 32C31.4477 32 31 32.4477 31 33C31 33.5523 31.4477 34 32 34Z"
                                stroke="#18919D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M37 39C37.5523 39 38 38.5523 38 38C38 37.4477 37.5523 37 37 37C36.4477 37 36 37.4477 36 38C36 38.5523 36.4477 39 37 39Z"
                                stroke="#18919D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M38 37L44 31M33 34L36 37L33 34Z"
                                stroke="#18919D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </DashboardCard>
                    {/* 3 */}
                    <DashboardCard number={3} description={"Unfollowed"}>
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 70 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="35" cy="35" r="35" fill="#FF4C61" />
                            <path
                                d="M26 31L32 37L36 33L43.405 40.405"
                                stroke="#8B202D"
                                stroke-width="2"
                                stroke-linecap="square"
                            />
                            <path
                                d="M43.4048 40.405L43.9998 41"
                                stroke="#8B202D"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M44 38V41H41"
                                stroke="#8B202D"
                                stroke-width="2"
                                stroke-linecap="square"
                            />
                        </svg>
                    </DashboardCard>
                    {/* 4 */}
                    <DashboardCard
                        number={8}
                        description={"New Super Followers"}
                    >
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 70 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="35" cy="35" r="35" fill="#4CB8FF" />
                            <path
                                d="M26.0305 40.0129L32.0566 34.0391L36.0391 38.0565L43.4763 30.6837"
                                stroke="#116599"
                                stroke-width="2"
                                stroke-linecap="square"
                            />
                            <path
                                d="M43.4761 30.6836L44.0737 30.0912"
                                stroke="#116599"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M44.0608 33.0912L44.0738 30.0912L41.0738 30.0782"
                                stroke="#116599"
                                stroke-width="2"
                                stroke-linecap="square"
                            />
                        </svg>
                    </DashboardCard>
                    {/* 5 */}
                    <DashboardCard
                        number={25}
                        description={'Saved in "Favorites"'}
                    >
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 70 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="35" cy="35" r="35" fill="#FFB800" />
                            <path
                                d="M43.1598 27.6098C42.0981 26.5478 40.6905 25.9021 39.193 25.7902C37.6955 25.6782 36.2076 26.1075 34.9998 26.9998C33.7274 26.0535 32.1438 25.6243 30.5677 25.7989C28.9916 25.9734 27.5402 26.7386 26.5058 27.9404C25.4713 29.1422 24.9306 30.6913 24.9926 32.2758C25.0546 33.8603 25.7146 35.3625 26.8398 36.4798L34.2898 43.9298C34.3828 44.0235 34.4934 44.0979 34.6152 44.1487C34.7371 44.1995 34.8678 44.2256 34.9998 44.2256C35.1318 44.2256 35.2625 44.1995 35.3844 44.1487C35.5062 44.0979 35.6168 44.0235 35.7098 43.9298L43.1598 36.4798C43.7424 35.8975 44.2047 35.2062 44.52 34.4452C44.8354 33.6842 44.9977 32.8685 44.9977 32.0448C44.9977 31.2211 44.8354 30.4054 44.52 29.6444C44.2047 28.8835 43.7424 28.1921 43.1598 27.6098ZM41.7498 35.0698L34.9998 41.8098L28.2498 35.0698C27.655 34.4725 27.2498 33.7129 27.085 32.8862C26.9203 32.0594 27.0033 31.2025 27.3237 30.4228C27.6442 29.6431 28.1877 28.9754 28.8861 28.5034C29.5846 28.0315 30.4068 27.7763 31.2498 27.7698C32.3759 27.7726 33.4549 28.2221 34.2498 29.0198C34.3428 29.1135 34.4534 29.1879 34.5752 29.2387C34.6971 29.2895 34.8278 29.3156 34.9598 29.3156C35.0918 29.3156 35.2225 29.2895 35.3444 29.2387C35.4662 29.1879 35.5768 29.1135 35.6698 29.0198C36.4881 28.3107 37.5453 27.939 38.6273 27.9798C39.7094 28.0207 40.7355 28.4712 41.498 29.24C42.2605 30.0088 42.7024 31.0387 42.7343 32.121C42.7662 33.2034 42.3857 34.2574 41.6698 35.0698H41.7498Z"
                                fill="#765D1E"
                            />
                        </svg>
                    </DashboardCard>
                    {/* 6 */}
                    <DashboardCard number={396} description={"New Followers"}>
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 70 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="35" cy="35" r="35" fill="#4CB8FF" />
                            <path
                                d="M35 46C40.5228 46 45 41.5228 45 36C45 30.4772 40.5228 26 35 26C29.4772 26 25 30.4772 25 36C25 41.5228 29.4772 46 35 46Z"
                                stroke="#1D5276"
                                stroke-width="2"
                                stroke-linecap="square"
                            />
                            <path
                                d="M35 29V36L39 40"
                                stroke="#1D5276"
                                stroke-width="2"
                                stroke-linecap="square"
                            />
                        </svg>
                    </DashboardCard>
                    {/* 7 */}
                    <DashboardCard
                        number={235.34 + " Massa"}
                        description={"Total Fundings"}
                    >
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 70 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="35" cy="35" r="35" fill="#26943E" />
                            <path
                                d="M30 39C31 40 33 41 35 41C37.5 41 40 40.5 40 38C40 35.5 37.5495 35 35 35C32.5 35 30 34.5 30 32C30 29.5 32.5 29 35 29C37 29 39 30 40 31M35 26V44"
                                stroke="#FACD66"
                                stroke-width="3"
                            />
                        </svg>
                    </DashboardCard>
                    {/* 8 */}
                    <div className="row-span-6">
                        <img src="/fundings.png" alt="img" />
                    </div>
                    {/* 9 */}
                    <div className="col-span-2">
                        <DashboardGraph />
                    </div>
                    <div className="col-span-1">
                        <img src="/donation.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
