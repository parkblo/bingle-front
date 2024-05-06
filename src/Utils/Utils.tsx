interface Coord {
  y: number;
  x: number;
}

const getRadius = (pointA: Coord, pointB: Coord) => {
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
};

export default getRadius;
