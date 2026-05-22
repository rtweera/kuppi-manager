import { FunctionComponent } from "react";
import Header from "../components/Header";
import SearchContainer from "../components/SearchContainer";
import LeadershipCard from "../components/LeadershipCard";

/**
 * Main Page Component
 * 
 * The primary page of the application displaying the event discovery interface.
 * Includes the application header, a featured event in the search container,
 * and a list of upcoming events displayed as leadership cards.
 * 
 * @component
 * @example
 * ```tsx
 * <Main />
 * ```
 * 
 * @returns {JSX.Element} The main event discovery page with header, featured event, and event list
 */
const Main: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[844px] overflow-hidden flex flex-col items-center justify-start gap-[15px]">
      <Header />
      <SearchContainer />
      <LeadershipCard
        componentText="Leadership Qualities"
        scheduleDate="Tomorrow"
        timeSlotLabel="10.00 AM "
        eventDate="Sep 30, 2023"
        vectorImageName="/vector-5.svg"
      />
      <LeadershipCard
        componentText="Inheritance"
        scheduleDate="Monday"
        timeSlotLabel="1.30 PM"
        eventDate="Oct 1, 2023"
        vectorImageName="/vector-5.svg"
        propWidth="70px"
      />
      <LeadershipCard
        componentText="Marketing"
        scheduleDate="Next week"
        timeSlotLabel="11.30 PM"
        eventDate="Oct 8, 2023"
        vectorImageName="/vector-5.svg"
        propWidth="77px"
      />
      <LeadershipCard
        componentText="CPU scheduling"
        scheduleDate="After 2 weeks "
        timeSlotLabel="7.45AM"
        eventDate="Oct 15, 2023"
        vectorImageName="/vector-5.svg"
        propWidth="108px"
      />
      <LeadershipCard
        componentText="Class Diagrams"
        scheduleDate="Next month"
        timeSlotLabel="11.30 PM"
        eventDate="Oct 1, 2023"
        vectorImageName="/vector-5.svg"
        propWidth="108px"
      />
      <div className="relative bg-darkgray w-[119px] h-4" />
    </div>
  );
};

export default Main;
