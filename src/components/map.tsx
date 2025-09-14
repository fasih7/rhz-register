import { useEffect, useRef, useState } from "react";
import L from "leaflet";

interface MapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
  height?: string;
  width?: string;
  bounds?: string; // "BOX(xmin ymin,xmax ymax)"
}

const Map = ({
  center = [31.582045, 74.329376],
  zoom = 13,
  className = "",
  height = "500px",
  width = "100%",
  bounds,
}: MapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  // Helper: parse BOX string to Leaflet bounds
  const parseBox = (box: string): L.LatLngBoundsExpression => {
    const coords = box.replace("BOX(", "").replace(")", "").split(",");
    const [minX, minY] = coords[0].trim().split(" ").map(Number);
    const [maxX, maxY] = coords[1].trim().split(" ").map(Number);

    // Leaflet expects: [[southWestLat, southWestLng], [northEastLat, northEastLng]]
    return [
      [minY, minX],
      [maxY, maxX],
    ];
  };

  useEffect(() => {
    if (mapRef.current) return;

    try {
      // Initialize map with default center/zoom
      mapRef.current = L.map("map").setView(center, zoom);

      // Tile layer (Satellite)
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "",
          maxZoom: 19,
        }
      ).addTo(mapRef.current);

      // Tile error handling
      mapRef.current.on("tileerror", () => {
        setMapError(
          "Failed to load map tiles. Please check your internet connection."
        );
      });

      // If bounds provided, fit map to bounds
      if (bounds) {
        const leafletBounds = parseBox(bounds);
        mapRef.current.fitBounds(leafletBounds);

        // Optional: adjust zoom after fitting bounds
        const fittedZoom = mapRef.current.getZoom();
        if (fittedZoom) {
          mapRef.current.setZoom(fittedZoom);
        }
      }
    } catch (error) {
      setMapError("Failed to initialize map. Please refresh the page.");
      console.error("Map initialization error:", error);
    }

    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center, zoom, bounds]);

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
