import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRouter } from "next/router"
import {format} from "date-fns"
import {LocationData} from "../constants/exploreData"
import InformationCard from "../components/InformationCard"

function Search() {
    const router = useRouter();
    const {location="Loading...", startDate="00", endDate="00", numberOfGuests=0}: { location?: string; startDate?: string; endDate?: string; numberOfGuests?: number } = router.query;

    const formatedStartDate = format(new Date(startDate), "dd MMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMM yy");
    const range = `${formatedStartDate} - ${formatedEndDate}`;
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`}/>

            <main className="flex flex-col">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-sm">{`300+ Stays`} <b>{range}</b> {`for ${numberOfGuests} guests`}</p>
                    <h1 className="text-3xl font-semibold mt-1 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <Elements text="Cancellation Flexobolity"/>
                        <Elements text="Type of Place"/>
                        <Elements text="Price"/>
                        <Elements text="Rooms and Beds"/>
                        <Elements text="More filters"/>
                    </div>
                </section>

                <section>
                    {LocationData.map(({img, location, title, description,star, price, total},index)=>(
                        <InformationCard key={`${index}${img}`} 
                        description={description} 
                        title={title} location={location} 
                        image={img}
                        star={star}
                        price={price}
                        total={total}/>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )
}

type Props = {
    text: string;
};

function Elements({ text }: Props) {
    return (
            <p className="button">{text}</p>
    );
}

export default Search


// export async function getServerSideProps() {
//     const searchResults = await fetch("https://links.papareact.com/isz")
// }
