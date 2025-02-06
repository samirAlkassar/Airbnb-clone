import Banner from "../components/Banner";
import Header from "../components/Header";
import Head from "next/head";
import { exploreData,cardsData } from "../constants/exploreData";
import SmallCard from "../components/SmallCard";
import NextLogo from "./favicon.ico"
import MedumCard from "../components/MedumCard";
import LargCard from "../components/LargCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
      <>
        <Head>
          <title>PAPA Airbnb</title>
          <link rel="icon" href={NextLogo.src} />
        </Head>
        <Header />
        <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:p-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map((item)=>(
                <SmallCard
                key={item.img}
                image={item.img}
                distance={item.distance}
                location={item.location} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              {cardsData?.map((item)=>(
                <MedumCard key={item.img} image={item.img} title={item.title}/>
              ))}
            </div>

          </section>

          <LargCard image="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb"
                    buttonText="Get Inspired" />

          
        </main>
        <Footer />
      </>
  );
}


// export async function getStaticProps() {
//     const explloreData = await fetch("https://links.papareact.com/pyp")
//     .then(
//       (res) => res.json()
//     );
//     return {
//       props:{
//         explloreData
//       }
//     }
// }
// export async function getStaticProps() {
//   const cardsData :any = await fetch("https://links.papareact.com/zp1").
//   then((res)=> res.json());
//   return {
//     props:{
//       cardsData
//     }
//   }

// }