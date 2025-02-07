import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/16/solid";

type Props = {
    image: string,
    location: string,
    title: string,
    description: string,
    star: number,
    price: string | number,
    total: string | number
}

function InformationCard({ image, location, title, description, star, price, total }: Props) {
    return (
        <div className="flex py-7 m-2 px-2 border-b cursor-pointer hover:opacity-90 pr-4 transition duration-200 first:border-top hover:shadow-lg rounded-xl bg-gray-50">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>

            <div className="flex flex-col flex-grow pl-5 p-4">
                <div className="flex justify-between">
                    <p>{location} </p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h1 className="text-xl">{title}</h1>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div>
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationCard;
