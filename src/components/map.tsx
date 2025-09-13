import { useEffect, useRef, useState } from "react";
import L from "leaflet";

interface MapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
  height?: string;
  width?: string;
}

const Map = ({
  center = [31.582045, 74.329376],
  zoom = 13,
  className = "",
  height = "500px",
  width = "100%",
}: MapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    if (mapRef.current) return;

    try {
      // Initialize map
      mapRef.current = L.map("map").setView(center, zoom);

      // Satellite Layer (Esri)
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "",
          maxZoom: 19,
        }
      ).addTo(mapRef.current);

      // Add error handling for tile loading
      mapRef.current.on("tileerror", () => {
        setMapError(
          "Failed to load map tiles. Please check your internet connection."
        );
      });
    } catch (error) {
      setMapError("Failed to initialize map. Please refresh the page.");
      console.error("Map initialization error:", error);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center, zoom]);

  if (mapError) {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`rounded-2xl border border-red-200 bg-red-50 p-8 text-center ${className}`}
          style={{ height, width }}
        >
          <p className="text-red-600 font-medium">{mapError}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div
        id="map"
        className={`rounded-2xl shadow-inner border border-green-200 ${className}`}
        style={{ height, width }}
        role="img"
        aria-label="Interactive map showing location data"
      />
    </div>
  );
};

export default Map;
