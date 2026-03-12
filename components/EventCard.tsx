import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/event/${slug}`} id="event-card">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="poster"
      />
      <div className="flex gap-2">
        <Image src="/icons/pin.svg" alt="pin icon" width={14} height={14} />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>

      <div className="datetime">
        <Image
          src="/icons/calendar.svg"
          alt="calendar icon"
          width={14}
          height={14}
        />
        <p>{date}</p>

        <Image src="/icons/clock.svg" alt="clock icon" width={14} height={14} />
        <p>{time}</p>
      </div>
    </Link>
  );
};

export default EventCard;
