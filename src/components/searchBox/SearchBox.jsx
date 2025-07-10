import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selector";


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter=useSelector(selectNameFilter);
  const handleChange=(event)=>{
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={styles.searchContainer}>
      <label>Filtrele:</label>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search by name"
        className={styles.searchInput}
      />
      <FaSearch className={styles.searchIcon} />
    </div>
  );
};
export default SearchBox;
