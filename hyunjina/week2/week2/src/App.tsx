import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import { searchDocuments } from "./api/search";
import { DocumentItem } from "./types";

const App = () => {
  const [results, setResults] = useState<DocumentItem[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await searchDocuments(query);
      setResults(data.items || []);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <h1>네이버 전문자료 검색</h1>
      <SearchBar onSearch={handleSearch} />
      <Results items={results} />
    </div>
  );
};

export default App;
