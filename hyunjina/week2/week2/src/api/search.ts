export async function searchDocuments(query: string) {
  const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_NAVER_CLIENT_SECRET;

  const response = await fetch(
    `/v1/search/doc.json?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        "X-Naver-Client-Id": clientId,
        "X-Naver-Client-Secret": clientSecret,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`검색 실패: ${response.status}`);
  }

  return await response.json();
}
