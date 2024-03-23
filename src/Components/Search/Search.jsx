import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" className="search-input" />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};
