import { FunctionComponent } from "react";

/**
 * SearchContainer Component
 * 
 * Displays detailed information about a featured or selected event/workshop.
 * Shows event title, instructor, module information, timing, meeting link,
 * and action buttons for sharing and calendar integration.
 * 
 * @component
 * @example
 * ```tsx
 * <SearchContainer />
 * ```
 * 
 * @returns {JSX.Element} A container component displaying comprehensive event details
 * 
 * @note Currently displays hardcoded event data. In future, accept props for dynamic content:
 * ```typescript
 * type SearchContainerProps = {
 *   title?: string;
 *   instructor?: string;
 *   module?: string;
 *   date?: string;
 *   time?: string;
 *   zoomLink?: string;
 *   onShare?: () => void;
 *   onAddCalendar?: () => void;
 * };
 * ```
 */
const SearchContainer: FunctionComponent = () => {
  return (
    <div className="relative w-[350px] h-[280px] text-left text-sm text-black font-inter">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[350px] h-[280px]" />
      <div className="absolute top-[155px] left-[193px] text-7xl inline-block w-[148px] h-[31px]">
        @ 10.00AM
      </div>
      <div className="absolute top-[78px] left-[15px] w-[276px] h-[22px] text-gray-200">
        <div className="absolute top-[0px] left-[69px] font-light inline-block w-[207px] h-[22px]">
          Modern Approach to AI
        </div>
        <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[66px] h-[22px]">
          Module :
        </div>
      </div>
      <div className="absolute top-[155px] left-[69px] inline-block w-[70px] h-[22px]">{`Today `}</div>
      <div className="absolute top-[177px] left-[14px] text-right inline-block w-[152px] h-[22px]">
        Monday, Sep 29, 2023
      </div>
      <div className="absolute top-[39px] left-[17px] text-gray-200 inline-block w-[158px] h-[22px]">
        By Janindu Attanayaka
      </div>
      <div className="absolute top-[106px] left-[15px] w-80 h-[26px] text-xs">
        <div className="absolute top-[0px] left-[0px] rounded bg-silver-100 w-80 h-6" />
        <div className="absolute top-[-1px] left-[-1px] rounded bg-darkgray box-border w-[53px] h-[26px] border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[4px] left-[10px] inline-block w-[41px] h-[22px]">
          Zoom
        </div>
        <div className="absolute top-[4px] left-[62px] text-darkslategray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:17] [-webkit-box-orient:vertical] w-64">
          https://learn.zoom.us/j/69441620938?pwd=ZitNMDhBNVg5QElDd2YvbepsUUd4QT09
        </div>
      </div>
      <div className="absolute top-[12px] left-[17px] text-xl font-medium">
        Introduction to Searching
      </div>
      <div className="absolute top-[227px] left-[193px] w-[98px] h-10">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-200 w-[98px] h-10" />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-silver-200 w-10 h-10" />
        <div className="absolute top-[11px] left-[44px] inline-block w-[43px] h-[22px]">
          Share
        </div>
        <img
          className="absolute top-[5px] left-[8px] w-[21px] h-7"
          alt=""
          src="/group-1.svg"
        />
      </div>
      <div className="absolute top-[227px] left-[16px] w-[161px] h-10">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-200 w-[161px] h-10" />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-silver-200 w-10 h-10" />
        <div className="absolute top-[11px] left-[45px] inline-block w-28 h-[22px]">
          Add to Calender
        </div>
        <img
          className="absolute top-[3.5px] left-[7px] w-[26px] h-[28.5px]"
          alt=""
          src="/group-4.svg"
        />
      </div>
      <img
        className="absolute top-[235.14px] left-[314.6px] w-[23.81px] h-[17.16px]"
        alt=""
        src="/vector-6.svg"
      />
    </div>
  );
};

export default SearchContainer;
