import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import DocumentDetail from "./components/DocumentDetail";
import RecommendedList from "./components/RecommendedList";
import MainContent from "./components/MainContent";
import { DocumentItem } from "./types";
import { searchDocuments } from "./api/search";
import { recommendedDocuments } from "./data/RecommendData";
import "./styles/global.css";

const App = () => {
  const [results, setResults] = useState<DocumentItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<DocumentItem | null>(null);
  const [recommendations, setRecommendations] = useState<DocumentItem[]>([]);
  const [hasSearched, setHasSearched] = useState(false); // 검색 여부 체크

  // 앱 처음 렌더링 시 추천 문서 미리 세팅
  useEffect(() => {
    const shuffled = [...recommendedDocuments].sort(() => 0.5 - Math.random());
    setRecommendations(shuffled.slice(0, 4));
  }, []);

  const handleSearch = async (query: string) => {
    try {
      const data = await searchDocuments(query);
      setResults(data.items || []);
      setSelectedItem(null);
      setHasSearched(true); // 검색 완료됨 표시

      const shuffled = [...recommendedDocuments].sort(
        () => 0.5 - Math.random()
      );
      setRecommendations(shuffled.slice(0, 4));
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  const handleBack = () => setSelectedItem(null);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {selectedItem ? (
        <DocumentDetail
          item={selectedItem}
          onBack={handleBack}
          onSelect={setSelectedItem}
        />
      ) : (
        <MainContent
          left={
            hasSearched ? (
              <Results items={results} onClick={setSelectedItem} />
            ) : null
          }
          right={
            <RecommendedList
              documents={recommendations}
              onClick={setSelectedItem}
            />
          }
        />
      )}
    </div>
  );
};

export default App;
