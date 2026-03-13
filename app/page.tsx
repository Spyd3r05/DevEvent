import { events } from "@/lib/constants";
import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import FeaturedEventsTracker from "@/components/FeaturedEventsTracker";

const Home = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Developer <br /> You Cannot Afford To Miss
      </h1>
      <p className="text-center mt-2">
        Hackathons, Meetups and so much more. All in one place
      </p>
      <ExploreBtn />

      <FeaturedEventsTracker eventCount={events.length} />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
