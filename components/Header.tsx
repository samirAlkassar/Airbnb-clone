import Image from "next/image"
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useState, ChangeEvent } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";
import { RangeKeyDict } from "react-date-range"; // Import the correct type


function Header({ placeholder }: { placeholder?: string }) {
    const [searchInput, setSearchInput] = useState<string>("");
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
    const router = useRouter();

    const minumumNumberOfGuests = 1;

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        console.log(searchInput)
    }

    const handleDataSelect = (rangesByKey: RangeKeyDict) => {
        const selection = rangesByKey.selection;
        if (selection) {
            setStartDate(selection.startDate ?? new Date()); // Fallback to current date
            setEndDate(selection.endDate ?? new Date());     // Fallback to current date
        }
    };

    const handleSelectNumberOfGuests = (event: ChangeEvent<HTMLInputElement>) => {
        setNumberOfGuests(Number(event.target.value))
    }

    const restInput = () =>{
        if (!(searchInput.trim() == "")) {setSearchInput("")}
        else {return}
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests,
            }
        })
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div onClick={()=>router.push("/")} className="relative h-10 flex items-center cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                    alt="Airbnb logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left" />
            </div>


            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input type="text"
                    placeholder={placeholder || "Start your search"}
                    className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                    value={searchInput}
                    onChange={handleInput} />
                <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2" />
            </div>


            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <Bars3Icon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            {searchInput &&
                <div className="flex flex-col mt-2 m-auto col-span-3">
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#fd5b61"]}
                            onChange={handleDataSelect}/>
                    <div className="flex items-center border-b">
                        <h2 className="text-2xl flex-grow">Number Of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input type="number"
                            className="w-12 pl-2 text-lg outline-none text-red-400"
                            value={numberOfGuests}
                            onChange={handleSelectNumberOfGuests}
                            min={minumumNumberOfGuests} />
                    </div>
                    <div className="flex">
                        <button onClick={restInput} className="flex-grow text-gray-500 hover:bg-gray-200 hover:text-gray-800">Cancle</button>
                        <button onClick={search}  className="flex-grow text-red-400 hover:bg-red-200 hover:text-red-700 p-3">Search</button>
                    </div>
                </div>
            }

        </header>
    )
}

export default Header
