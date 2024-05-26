import { axios } from "./axios";

interface requestParams {
  centerCoord: Object;
  radius: number;
  topNP: number;
  roadDataType: string;
}

export default async function getRoadData(requestProps: requestParams) {
  const response = await axios
    .get("/data")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
}
