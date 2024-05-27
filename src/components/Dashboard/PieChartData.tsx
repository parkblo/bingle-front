import { useState, useEffect } from 'react';
import colors from "constants/colors"; 

const originData = {
    roads: [
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color1"
		},
		{
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color1"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color2"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color3"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color1"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color2"
		},
		{
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color1"
		},
		{
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color2"
		},
		{
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color3"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color1"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color1"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color1"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color4"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color7"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color9"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color10"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color8"
        },
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color11"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color14"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color15"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color5"
		},
        {
			"coords": "MULTILINESTRINT( ... )",
			"colorId": "Traffic_color16"
		},
	]
};

interface Road {
    coords: string;
    colorId: string;
}

const usePieChartData = () => {
    const [data, setData] = useState<{ id: string; label: string; value: number; color: string }[]>([]);

    useEffect(() => {
        const colorCounts: { [colorId: string]: number } = {};
        originData.roads.forEach(road => {
            const colorid = road.colorId;
            colorCounts[colorid] = (colorCounts[colorid] || 0) + 1;
        });

        const totalCount = Object.values(colorCounts).reduce((acc, count) => acc + count, 0);
        const percentageData = Object.entries(colorCounts).map(([colorid, count]) => ({
            id: colorid,
            label: colorid,
            value: (count / totalCount) * 100,
            color: colors[colorid] || "#000000"
        }));

        setData(percentageData);
    }, []);

    return data;
};

export default usePieChartData;