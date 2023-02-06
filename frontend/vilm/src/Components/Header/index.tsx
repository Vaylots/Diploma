import { FC, useRef } from "react";
import homeIcon from "../../assets/home-icon.svg";
export const Header: FC = () => {
  return (
    <header
      className="
      flex 
      h-16
      w-full 
      items-center
      bg-[#141414]  
      px-12 
      text-white
      sm:justify-between 
      lg:px-24
      "
    >
      <ul className=" flex w-full flex-row items-end justify-center gap-2 sm:justify-start">
        <li className=" text-4xl font-bold">
          <a href="/">Vilm</a>
        </li>
        <li className="hidden text-2xl font-bold hover:text-white/90 sm:block ">
          <a href="/">Главная</a>
        </li>
      </ul>
    </header>
  );
};
