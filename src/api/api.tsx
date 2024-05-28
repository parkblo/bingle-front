import { axios } from "./axios";

interface requestParams {
  centerCoord: Object;
  radius: number;
  topNP: number;
  roadDataType: string;
}

export default async function getRoadData(requestProps: any) {
  const response = await axios
    .post("/data", requestProps, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
}
