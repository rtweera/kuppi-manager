import { FunctionComponent, useMemo, type CSSProperties } from "react";

/**
 * Props for the LeadershipCard component
 */
type LeadershipCardType = {
  /** The title or name of the event/workshop */
  componentText?: string;
  /** When the event is scheduled (e.g., "Tomorrow", "Monday", "Next week") */
  scheduleDate?: string;
  /** The time slot for the event (e.g., "10.00 AM", "1.30 PM") */
  timeSlotLabel?: string;
  /** The full date of the event (e.g., "Sep 30, 2023") */
  eventDate?: string;
  /** Path to the vector icon image for the event */
  vectorImageName?: string;

  /** Optional custom width for the schedule date text */
  propWidth?: CSSProperties["width"];
};

/**
 * LeadershipCard Component
 * 
 * A reusable card component for displaying event/workshop summaries in a list format.
 * Each card shows the event title, scheduled date, time, full date, and an icon.
 * 
 * @component
 * @example
 * ```tsx
 * <LeadershipCard
 *   componentText="Leadership Qualities"
 *   scheduleDate="Tomorrow"
 *   timeSlotLabel="10.00 AM"
 *   eventDate="Sep 30, 2023"
 *   vectorImageName="/vector-5.svg"
 * />
 * ```
 * 
 * @param {LeadershipCardType} props - Component props
 * @returns {JSX.Element} A styled event card component with event information
 */
const LeadershipCard: FunctionComponent<LeadershipCardType> = ({
  componentText,
  scheduleDate,
  timeSlotLabel,
  eventDate,
  vectorImageName,
  propWidth,
}) => {
  const tomorrowStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="relative w-[350px] h-[70px] text-left text-sm text-black font-inter">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[350px] h-[70px]" />
      <div className="absolute top-[13px] left-[20px] text-xl font-medium">
        {componentText}
      </div>
      <div
        className="absolute top-[44px] left-[20px] inline-block w-[70px] h-[22px]"
        style={tomorrowStyle}
      >
        {scheduleDate}
      </div>
      <div className="absolute top-[44px] left-[129px] text-center inline-block w-[70px] h-[22px]">
        {timeSlotLabel}
      </div>
      <div className="absolute top-[44px] left-[211px] text-right inline-block w-[93px] h-[22px]">
        {eventDate}
      </div>
      <img
        className="absolute top-[27.7px] left-[316.6px] w-[23.81px] h-[17.16px]"
        alt=""
        src={vectorImageName}
      />
    </div>
  );
};

export default LeadershipCard;
