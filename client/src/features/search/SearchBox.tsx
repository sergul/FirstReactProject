import React from "react";

import styles from "./SearchBox.module.css";

export const SearchBox = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" className={styles.textbox} placeholder="Search"/>
      <button title="Search" value="" type="submit" className={styles.button}></button>
    </div>
  );
};
