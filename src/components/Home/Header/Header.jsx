import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    if (isOpen) {
      closeDropDown();
    } else {
      openDropDown();
    }
  };

  const openDropDown = () => {
    let dropDown = document.getElementById("dropDown");
    dropDown.style.display = "flex";
    dropDown.classList.add(styles.dropDownAnimation);
    dropDown.classList.remove(styles.dropDownAnimationReverse);
  };

  const closeDropDown = () => {
    let dropDown = document.getElementById("dropDown");
    dropDown.classList.remove(styles.dropDownAnimation);
    dropDown.classList.add(styles.dropDownAnimationReverse);
    setTimeout(() => {
      dropDown.style.display = "none";
    }, 300);
  };

  // ---------------------------- CSS ----------------------------

  const outerDiv = [styles.outerDiv].join("");
  const mainDiv = [styles.mainDiv].join("");
  const topHeading = [styles.topHeading].join("");
  const threeDots = [styles.threeDots].join("");
  const dropDown = [styles.dropDown].join(" ");
  const dropDownItems = [styles.dropDownItems].join("");
  const dropDownItemsText = [styles.dropDownItemsText].join("");

  // ---------------------------- JSX ----------------------------

  return (
    <div className={outerDiv}>
      <div className={mainDiv}>
        <h1 className={topHeading}>Parko</h1>
        <div className={threeDots} onClick={toggleDropdown}>
          &#x2807;
        </div>
      </div>

      <div className={dropDown} id="dropDown">
        <a href="#" className={dropDownItems}>
          <div className={dropDownItemsText}>dropdown 1</div>
        </a>
        <a href="#" className={dropDownItems}>
          <div className={dropDownItemsText}>dropdown 2</div>
        </a>
        <a href="#" className={dropDownItems}>
          <div className={dropDownItemsText}>dropdown 3</div>
        </a>
      </div>
    </div>
  );
};

export default Header;