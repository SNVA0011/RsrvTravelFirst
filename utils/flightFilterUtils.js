import { stop } from "../static/EngineHead";

export const findStopResult = (data) => {
  const totallength = data.length;

  const dataArraylist = data.map((item) => {
    return {
      stop: item.outBound.length,
      price: item.fare.adultFare + item.fare.adultTax + item.fare.adultMarkup,
    };
  });

  const overAllMin = Math.min(...dataArraylist.map((item) => item.price));
  const all = {
    value: 0,
    title: "All",
    price: overAllMin.toFixed(2),
    count: totallength,
  };

  const uniqueValue = [
    ...new Set(
      dataArraylist.map((item) => {
        return item.stop;
      })
    ),
  ];

  let newObject = {};
  let newlength = {};
  let maxObj = {};
  let array = [];

  for (const key of uniqueValue) {
    newObject[key] = [];
    newlength[key] = 0;
  }

  for (let i = 0; i < dataArraylist.length; i++) {
    newObject[dataArraylist[i].stop].push(dataArraylist[i].price);
    newlength[dataArraylist[i].stop]++;
  }

  for (const airLine in newObject) {
    maxObj[airLine] = Math.min(...newObject[airLine]);
    if (newObject.hasOwnProperty(airLine)) {
      array.push(Number(airLine));
    }
  }

  const filterStop = stop.filter((item) =>
    array.some((ite) => item.value === ite)
  );

  const newStop = filterStop.map((item, i) => ({
    value: item.value,
    title: item.title,
    price: Object.values(maxObj)[i].toFixed(2),
    count: Object.values(newlength)[i],
  }));

  newStop.unshift(all);

  return newStop;
};

export const findAirlinePrice = (flightResponse) => {
  try {
    const airLineCode = flightResponse.flightData.airline.map(
      (item) => item.code
    );
    let arr = flightResponse.flightData.flightResult;

    let newObject = {};
    let lenAirline = {};
    let maxObj = {};
    for (const key of airLineCode) {
      newObject[key] = [];
      lenAirline[key] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].valCarrier) {
        newObject[arr[i]?.valCarrier]?.push(
          arr[i]?.fare?.adultFare +
            arr[i]?.fare?.adultTax +
            arr[i]?.fare?.adultMarkup
        );
        lenAirline[arr[i].valCarrier]++;
      }
    }

    for (const airLine in newObject) {
      maxObj[airLine] = Math.min(...newObject[airLine]);
    }

    const airline = flightResponse.flightData.airline.map((items, i) => ({
      value: items.code,
      title: items.name,
      price:
        Object.values(maxObj)[i] === Infinity
          ? 0
          : Object.values(maxObj)[i].toFixed(2),
      count:
        Object.values(lenAirline)[i] === 0 ? 0 : Object.values(lenAirline)[i],
    }));
    const data = airline.filter((item) => item.count !== 0);

    return data;
  } catch (error) {
    console.log("error", error.message);
  }
};

export const travelDuration = (flightResponse, tripType) => {
  if (tripType === "1") {
    const outEft = flightResponse.map((item) => item.outEFT);
    const MaxoutEft = Math.max(...outEft);
    const MinoutEft = Math.min(...outEft);
    return [MinoutEft, MaxoutEft];
  } else {
    console.log("outEFT");
    const inEft = flightResponse.map((item) => item.inEFT);
    const MaxinEft = Math.max(...inEft);
    const MininEft = Math.min(...inEft);
    const outEft = flightResponse.map((item) => item.outEFT);
    const MaxoutEft = Math.max(...outEft);
    const MinoutEft = Math.min(...outEft);
    const inB = `${MininEft}-${MaxinEft}`;
    const outB = `${MinoutEft}-${MaxoutEft}`;
    return [inB, outB];
  }
};
