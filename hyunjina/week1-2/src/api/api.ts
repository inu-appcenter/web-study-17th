export const fetchLiteratureItems = async () => {
  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
  const url = `/api/openapi/API_CCA_163/request?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=5`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    return data?.body?.items?.item || [];
  } catch (error) {
    console.error("API 호출 에러:", error);
    return [];
  }
};
