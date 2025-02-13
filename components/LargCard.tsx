import Image from "next/image"
interface LargCardProps {
    image: string,
    title: string,
    description: string,
    buttonText: string
}


function LargCard({image, title, description, buttonText}:LargCardProps) {
  return (
    <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
            <Image src={image} 
            alt={title} 
            layout="fill" 
            objectFit="cover"
            className="rounded-2xl"/>
        </div>

        <div className="absolute top-32 left-12">
            <h3 className="text-4xl mb-3 w-64">{title}</h3>
            <p>{description}</p>

            <button type="button" className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
        </div>
    </section>
  )
}

export default LargCard
