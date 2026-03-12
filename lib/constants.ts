export type Event = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: Event[] = [
  {
    title: "Google I/O 2026",
    image: "/images/event1.png",
    slug: "google-io-2026",
    location: "Shoreline Amphitheatre, Mountain View, CA (Hybrid)",
    date: "May 20–21, 2026",
    time: "9:00 AM PT",
  },
  {
    title: "Microsoft Build 2026",
    image: "/images/event2.png",
    slug: "microsoft-build-2026",
    location: "Seattle, WA (Hybrid)",
    date: "May 12–14, 2026",
    time: "9:00 AM PT",
  },
  {
    title: "React Summit 2026",
    image: "/images/event3.png",
    slug: "react-summit-2026",
    location: "Amsterdam, NL (In‑person)",
    date: "Jun 19, 2026",
    time: "9:30 AM CEST",
  },
  {
    title: "ETHGlobal Hackathon — Spring 2026",
    image: "/images/event4.png",
    slug: "ethglobal-hackathon-spring-2026",
    location: "Remote (Online)",
    date: "Apr 24–26, 2026",
    time: "6:00 PM UTC",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event5.png",
    slug: "pycon-us-2026",
    location: "Pittsburgh, PA",
    date: "Apr 22–30, 2026",
    time: "9:00 AM ET",
  },
  {
    title: "KubeCon + CloudNativeCon Europe 2026",
    image: "/images/event6.png",
    slug: "kubecon-cloudnativecon-europe-2026",
    location: "Paris, FR",
    date: "Mar 31–Apr 3, 2026",
    time: "9:00 AM CET",
  },
  {
    title: "Local Dev Meetup: Next.js + Tailwind Night",
    image: "/images/event-full.png",
    slug: "nextjs-tailwind-night",
    location: "Downtown • Community Space",
    date: "Mar 26, 2026",
    time: "6:30 PM",
  },
];
