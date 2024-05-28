import colors from "constants/colors";

interface Coord {
  y: number;
  x: number;
}

export function getRadius(pointA: Coord, pointB: Coord) {
  const earthRadius = 6371e3; // 지구의 반지름(미터)
  const lat1 = pointA.y * (Math.PI / 180);
  const lat2 = pointB.y * (Math.PI / 180);
  const deltaLat = (pointB.y - pointA.y) * (Math.PI / 180);
  const deltaLon = (pointB.x - pointA.x) * (Math.PI / 180);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;
  return distance;
}

function getColorCode(colorId: string) {
  // TODO: colorId와 색상코드를 매치하는 조건문
  return colors.example;
}

export function convertToGeoJson(originData: any) {
  if (!originData) {
    return null;
  }

  return {
    type: "FeatureCollection",
    features: originData.roads.map((road: any) => ({
      type: "Feature",
      geometry: {
        type: "MultiLineString",
        mantle_properties: {
          strokeColor: getColorCode(road.colorId),
          strokeOpacity: 1,
          strokeWeight: 3,
          strokeStyle: "solid",
          fillOpacity: 0.7,
          visible: true,
        },
        coordinates: [
          road.coords
            .replace("MULTILINESTRING ((", "")
            .replace("))", "")
            .split(", ")
            .map((coord: any) => coord.split(" ").map(Number)),
        ],
      },
    })),
  };
}
