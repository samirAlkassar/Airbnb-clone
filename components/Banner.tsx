import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600] 2xl:h-[700px]">
      <Image
      src="https://links.papareact.com/0fm"
      alt="baner image" 
      layout="fill"
      objectFit="cover"/>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">{'Not sure where to go? Perfect.'}</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold mt-3 hover:shadow-xl active:scale-90 trastion duration-150">{"I'm flexable"}</button>
      </div>
    </div>
  )
}

export default Banner
