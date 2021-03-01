import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import styles from "./SearchBox.module.css";
import { setSearchText } from "./store/searchBoxSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
  };
  
  return (
    <div className={styles.wrapper}>
      <input onChange={onTextChange} type="text" className={styles.textbox} placeholder="Search problems, type title or ID"/>
    </div>
  );
};
