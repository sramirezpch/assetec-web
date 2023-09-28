import React, { Dispatch, SetStateAction } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import "./styles.css";

const menuOptions = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "Desarrollos",
    href: "/desarrollos",
  },
  {
    id: 3,
    text: "Edificia",
    href: "",
  },
  {
    id: 4,
    text: "Contáctanos",
    href: "",
  },
];

type MenuProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};
const Menu = ({ isVisible, setIsVisible }: MenuProps) => {
  const handleOnClick = () => setIsVisible(!isVisible);

  return (
    <>
      <div className="navbar-collapse" onClick={handleOnClick}>
        <AiOutlineMenu size="1.8em" />
      </div>
      <ul className={`collapse ${isVisible ? "show" : ""} menu-options`}>
        {menuOptions.map((option) => (
          <li key={option.id}>{option.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
