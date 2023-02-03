import { csv } from 'd3'

const csvUrl = 'https://gist.githubusercontent.com/jzmoolman/4aae71873c5e397d759c9a22278f1c33/raw/cars';

export const getData = async () => {
    const data = await csv(csvUrl);
    console.log(data[0]);
    console.log(data.columns);
    return data;
}