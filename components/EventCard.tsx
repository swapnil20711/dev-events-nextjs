import React from 'react'
import Link from "next/link";
import Image from "next/image";

interface Props {
    title: string
    image: string
    slug: string
    location: string
    date: string
    time: string
}

const EventCard = ({title, image, slug, location, date, time}: Props) => {
    return (
        <Link href={`/events/${slug}`} id={"event-card"}>
            <Image src={image} alt={title} width={410} height={300} className="poster"/>
            <div className={"flex flex-row gap-2"}>
                <Image src={"/icons/pin.svg"} width={14} height={14} alt={title}/>
                <p>{location}</p>
            </div>
            <div className={"datetime"}>
                <div>
                    <Image src={"/icons/calendar.svg"} width={14} height={14} alt={title}/>
                    <p>{date}</p>
                </div>
                <div>
                    <Image src={"/icons/clock.svg"} width={14} height={14} alt={title}/>
                    <p>{time}</p>
                </div>
            </div>
            <p className={"title"}>{title}</p>
        </Link>
    )
}
export default EventCard
