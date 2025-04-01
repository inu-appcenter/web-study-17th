import { useEffect, useState } from "react";
import axios from "axios";
import { parseStringPromise } from "xml2js";

interface ShowItem {
  prfnm: string;
  fcltynm: string;
  prfpdfrom: string;
  prfpdto: string;
  poster: string;
}

type RawItem = {
  prfnm: string[];
  fcltynm: string[];
  prfpdfrom: string[];
  prfpdto: string[];
  poster: string[];
};

const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;

function App() {
  const [shows, setShows] = useState<ShowItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${SERVICE_KEY}&stdate=20240101&eddate=20241231&cpage=1&rows=5`;

      try {
        const response = await axios.get(API_URL, { responseType: "text" });
        const result = await parseStringPromise(response.data);
        const items = result.dbs.db;

        const parsed: ShowItem[] = (items as RawItem[]).map((item) => ({
          prfnm: item.prfnm[0],
          fcltynm: item.fcltynm[0],
          prfpdfrom: item.prfpdfrom[0],
          prfpdto: item.prfpdto[0],
          poster: item.poster[0],
        }));

        setShows(parsed);
      } catch (error) {
        console.error("API 호출 실패:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎭 공연 목록</h1>
      {shows.map((show, idx) => (
        <div key={idx} style={{ marginBottom: "20px" }}>
          <img src={show.poster} alt={show.prfnm} style={{ width: "150px" }} />
          <h2>{show.prfnm}</h2>
          <p>📍 장소: {show.fcltynm}</p>
          <p>
            🗓️ 기간: {show.prfpdfrom} ~ {show.prfpdto}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
