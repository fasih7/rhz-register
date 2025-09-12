import { useEffect, useRef } from "react";
import L from "leaflet";

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return;

    // Initialize map
    mapRef.current = L.map("map").setView([31.582045, 74.329376], 13);

    // Satellite Layer (Esri)
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "",
      }
    ).addTo(mapRef.current);

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div
        id="map"
        className="rounded-2xl shadow-inner border border-green-200"
        style={{ height: "500px", width: "100%" }}
      ></div>
      </div>
  );
};

export default Map;
