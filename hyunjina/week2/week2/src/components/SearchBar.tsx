import { useState } from "react";
import styles from "../styles/SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("내용을 입력해주세요!");
      return;
    }
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchBtn}>
        검색
      </button>
    </form>
  );
};

export default SearchBar;
