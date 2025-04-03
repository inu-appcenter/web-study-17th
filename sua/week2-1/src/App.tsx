import React, { useEffect } from "react";
import { generateSignature } from "./utils/signature";

const App: React.FC = () => {
  useEffect(() => {
    const method = "GET";
    const url = "/v1/search/parking?query=서울"; // 예제 URL (실제 API에 맞게 수정)
    const timestamp = String(Date.now()); // 현재 타임스탬프 (밀리초)
    const accessKey = import.meta.env.VITE_NAVER_ACCESS_KEY || "";
    const secretKey = import.meta.env.VITE_NAVER_SECRET_KEY || "";

    if (!accessKey || !secretKey) {
      console.error("API 키가 설정되지 않았습니다!");
      return;
    }

    const signature = generateSignature(method, url, timestamp, accessKey, secretKey);
    console.log("생성된 Signature:", signature);
  }, []);

  console.log("네이버 지도 API 키:", import.meta.env.VITE_NAVER_ACCESS_KEY);

  return <div>네이버 API 테스트</div>;
};

export default App;
