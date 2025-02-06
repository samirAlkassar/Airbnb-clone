import Image from "next/image";

interface MediumCardProps {
    image: string;
    title: string;
}

function MedumCard({ image, title }: MediumCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
            <Image src={image}
                layout="fill"
                alt={title}
                className="rounded-xl"/>
        </div>
        <h3 className="text-2xl ml-3">{title}</h3>
    </div>
  )
}

export default MedumCard
