import React from "react";
import LaylowCard from "./LaylowCard";
import {
    ClientFactory,
    INodeStatus,
    IAccount,
    DefaultProviderUrls,
    IDatastoreEntryInput,
    IContractStorageData,
} from "@massalabs/massa-web3";

const baseAccount = {
  publicKey: "P12f2K8YoeqZCzWASs2wktFYYGtaHGYaeSukFBrgEnw9d3J1WsMZ",
  secretKey: "S17Zw8KN3QSzsWGof7PTgkTvyGYbZLNMZmjC4urr6ZziLonThqk",
  address: "A1qZL4iJYRDRo9EtDauJuWNj56FNXWhtKinv15GEakraBa91dEA",
};

const sc_addr = "A12egHo2xkg2s68WJzu8CofoZ9vwz2M3dYhcsxZ6PCqqXoJCST4q"

export default function ArtistProfile() {

    const handleClick = () => {
        ClientFactory.createDefaultClient(
            DefaultProviderUrls.TESTNET,
            false,
            baseAccount
        ).then(function (web3Client) {
            web3Client.smartContracts().callSmartContract(
                {
                    /// storage fee for taking place in books
                    fee: 0,
                    /// The maximum amount of gas that the execution of the contract is allowed to cost.
                    maxGas: 70000000,
                    /// The price per unit of gas that the caller is willing to pay for the execution.
                    gasPrice: 0,
                    /// Extra coins that are spent from the caller's balance and transferred to the target
                    coins: 5,
                    /// Target smart contract address
                    targetAddress: sc_addr,
                    /// Target function name. No function is called if empty.
                    functionName: "play",
                    /// Parameter to pass to the target function
                    parameter: "" //call_params.serialize()
                },
                baseAccount
            ).then(function (txid) {
                console.log("handleClick ", txid);
            });
        });
    }



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
                        <h1 className="pt-4 pl-4 text-2xl">Most Listened</h1>
                        <div className="w-full h-20">
                            <div className="flex w-full h-full hover:bg-dark_alt">
                                <div className="my-auto">
                                    <div className="flex ml-10 w-12 h-12">
                                        <img src="/laylow1.jpeg" alt="pp" />
                                        <div className="my-auto ml-2">
                                            <h3 className="ml-4 w-24 text-sm">
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
                                    <div className="flex ml-10 w-12 h-12">
                                        <img src="/laylow3.jpeg" alt="pp" />
                                        <div className="my-auto ml-2">
                                            <h3 className="ml-4 w-24 text-sm">
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
                                    <div className="flex ml-10 w-12 h-12">
                                        <img src="/laylow1.jpeg" alt="pp" />
                                        <div className="my-auto ml-2">
                                            <h3 className="ml-4 w-80 text-sm">
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
                                <div className="flex ml-10 w-12 h-12">
                                    <img src="/laylow6.jpeg" alt="pp" />
                                    <div className="my-auto ml-2">
                                        <h3 className="ml-4 text-sm">10'</h3>
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
                                <div className="flex ml-10 w-12 h-12">
                                    <img src="/laylow1.jpeg" alt="pp" />
                                    <div className="my-auto ml-2">
                                        <h3 className="ml-4 w-60 text-sm">
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
                                <div className="flex ml-10 w-12 h-12">
                                    <img src="/laylow2.jpeg" alt="pp" />
                                    <div className="my-auto ml-2">
                                        <h3 className="ml-4 text-sm">
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