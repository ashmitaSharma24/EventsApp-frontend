// utils/slides.js
import { fetchEvents } from "./event-service";

export const categories = [
  
  { bgColor: "bg-blue-950", text: "HACKATHONS", link: "hackathons" },
  { bgColor: "bg-blue-950", text: "MUNs", link: "muns" },
  { bgColor: "bg-blue-950", text: "WEBINARS", link: "webinars" },
  { bgColor: "bg-blue-950", text: "FESTS", link: "fests" },
  { bgColor: "bg-blue-950", text: "COMPETETIONS", link: "competetions" },
  
];

export const genres = [
  { bgColor: "bg-blue-950", text: "TECH", link: "/events/exhibit" },
  { bgColor: "bg-blue-950", text: "CULTURAL", link: "/events/quiz" },
  { bgColor: "bg-blue-950", text: "SPORTS", link: "/events/pitch" },
  { bgColor: "bg-blue-950", text: "ART", link: "/events/uiux" },
  { bgColor: "bg-blue-950", text: "DRAMA", link: "/events/workshop" },
  { bgColor: "bg-blue-950", text: "THEATRE", link: "/events/exhibit" },
  { bgColor: "bg-blue-950", text: "MUNS/DEBATES", link: "/events/exhibit" },
  { bgColor: "bg-blue-950", text: "FINANCE", link: "/events/exhibit" },
  
];

// Individual fetch functions
const getMuns = async () => {
  return await fetchEvents("mun/debate", "") || [];
};

const getHackathons = async () => {
  return await fetchEvents("Hackathon", "") || [];
};
const getFests = async () => {
  return await fetchEvents("fest", "") || [];
};
const getAll = async () => {
  return await fetchEvents("", "") || [];
};



// Master loader to fetch all needed event categories at once
export const loadEvents = async () => {
  const [muns, hackathons, fest, all] = await Promise.all([
    getMuns(),
    getHackathons(),
    getFests(),
    getAll(),
    // add more here later if needed
  ]);

  return {
    muns,
    hackathons,
    fest,
    all,
  };
};
