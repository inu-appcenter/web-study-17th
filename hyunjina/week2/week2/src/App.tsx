import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import DocumentDetail from "./components/DocumentDetail";
import { DocumentItem } from "./types";
import { searchDocuments } from "./api/search";

const App = () => {
  const [results, setResults] = useState<DocumentItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<DocumentItem | null>(null);

  const handleSearch = async (query: string) => {
    try {
      const data = await searchDocuments(query);
      setResults(data.items || []);
      setSelectedItem(null); // 검색하면 상세보기 초기화
    } catch (error) {
      console.error("검색 오류:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {selectedItem ? (
        <DocumentDetail
          item={selectedItem}
          onBack={() => setSelectedItem(null)}
        />
      ) : (
        <Results items={results} onItemClick={setSelectedItem} />
      )}
    </div>
  );
};

export default App;
