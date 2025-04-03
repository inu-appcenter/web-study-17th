import { useEffect, useRef } from "react";

const NaverMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    if (!clientId) {
      console.error("네이버 지도 API 키가 없습니다!");
      return;
    }

    // 이미 스크립트가 추가되었는지 확인
    if (document.getElementById("naver-map-script")) {
      if (window.naver?.maps) {
        initMap();
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "naver-map-script";
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    script.async = true;
    script.onload = () => {
      if (window.naver?.maps) {
        initMap();
      }
    };
    document.head.appendChild(script);

    function initMap() {
      if (!mapRef.current || !window.naver?.maps) return;

      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.5665, 126.978),
        zoom: 15,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.5665, 126.978),
        map,
        title: "서울 시청",
      });
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};

export default NaverMap;
