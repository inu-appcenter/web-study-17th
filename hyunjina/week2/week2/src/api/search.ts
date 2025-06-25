import axios from "axios";

export const searchDocuments = async (query: string) => {
  try {
    const params = new URLSearchParams({
      query: query,
    });

    const response = await axios.get(
      `/v1/search/doc.json?${params.toString()}`,
      {
        headers: {
          "X-Naver-Client-Id": import.meta.env.VITE_NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": import.meta.env.VITE_NAVER_CLIENT_SECRET,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("검색 실패: " + error);
  }
};
