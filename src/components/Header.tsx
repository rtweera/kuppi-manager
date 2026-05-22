import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

/**
 * Header Component
 * 
 * Displays the application header with a search bar and navigation controls.
 * Includes a menu button, search input field, and user profile icon placeholder.
 * 
 * @component
 * @example
 * ```tsx
 * <Header />
 * ```
 * 
 * @returns {JSX.Element} A header component with search functionality and navigation
 */
const Header: FunctionComponent = () => {
  return (
    <div className="relative w-[390px] h-[70px] text-left text-sm text-gray-100 font-inter">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[390px] h-[70px]" />
      <Button
        className="w-[26px] absolute top-[26px] left-[27px]"
        variant="outline-primary"
      />
      <div className="absolute top-[15px] left-[73px] w-[297px] h-[41px]">
        <div className="absolute top-[1px] left-[257px] bg-silver-200 w-10 h-10" />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-100 w-[245px] h-10" />
        <div className="absolute top-[12px] left-[14px] tracking-[0.11em] font-medium">
          Search
        </div>
        <img
          className="absolute top-[21.67px] left-[277.63px] w-[9.74px] h-[10.67px]"
          alt=""
          src="/vector-1.svg"
        />
        <div className="absolute top-[6px] left-[264px] rounded-[50%] bg-gainsboro-200 box-border w-[18px] h-[18px] border-[1px] border-solid border-black" />
      </div>
    </div>
  );
};

export default Header;
