import Image from "next/image"

export default function Icon({ source }: { source: string }) {
    return (
        <figure>
            <Image alt="icon" src={source} width={150} height={150} />
        </figure>
    )
}
