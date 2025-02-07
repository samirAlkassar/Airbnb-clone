import { Children } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRouter } from "next/router"
import {format} from "date-fns"
import {LocationData} from "../constants/exploreData"
import InformationCard from "../components/InformationCard"

function Search() {
    const router = useRouter();
    const {location="Loading...", startDate="00", endDate="00", numberOfGuests=0}:any = router.query;

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
                        <Elements>Cancellation Flexobolity</Elements>
                        <Elements>Type of Place</Elements>
                        <Elements>Price</Elements>
                        <Elements>Rooms and Beds</Elements>
                        <Elements>More filters</Elements>
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
    children: React.ReactNode;
};

function Elements(props: Props) {
    return (
        <div>
            <p className="button">{props.children}</p>
        </div>
    );
}

export default Search


// export async function getServerSideProps() {
//     const searchResults = await fetch("https://links.papareact.com/isz")
// }
