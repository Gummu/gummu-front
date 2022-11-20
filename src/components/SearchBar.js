import React, { useContext } from "react";
import { StatesContext } from "../contexts/StatesProvider";


export default function SearchBar() {
    const {showBubleSearch, setBubleSearch, setSearchTerm} = useContext(StatesContext);

    return (
        <navbar className="flex-auto w-auto text-light_gray">
            <div className="relative grow">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 text-gray-500 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search"
                id="default-search"
                className="focus:ring-2 ring-blue-400 focus:outline-[0.5px] border-0 outline-none block p-4 pl-10 text-sm bg-black rounded-lg  w-[1122px] height-[73px] "
                placeholder="Search" required
                onChange={e => {
                    setSearchTerm(e.target.value);
                        setBubleSearch(e.target.value.length > 0);
                    
                }}
                />
            </div>
        </navbar>
    );
}