export const reducer = (state, action) => {
  const initState = [...state.flightData.flightResult];
  const stopCheck = action.payload.checkstop;
  const airlinechecked = action.payload.airlinechecked;
  const arrivalTime = action.payload.arrivalTime;
  const departureTime = action.payload.departureTime;
  const initialValue = action.payload.initialValue;
  const PriceValue = action.payload.value;
  const durationTime = action.payload.durationTime;
  switch (action.type) {
    case "High-to-Low":
      const flightResultHigh = initState.sort(
        (item, items) => items.fare.grandTotal - item.fare.grandTotal
      );
      return {
        ...state,
        flightData: { ...state.flightData, flightResult: flightResultHigh },
      };
    case "Low-to-High":
      const flightResultLow = initState.sort(
        (item, items) => item.fare.grandTotal - items.fare.grandTotal
      );
      return {
        ...state,
        flightData: { ...state.flightData, flightResult: flightResultLow },
      };
    case "stop":
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        arrivalTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = allslectedFilter(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime,
          arrivalTime
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0
      ) {
        const data = twoCombination(initialValue, stopCheck, airlinechecked);

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = threeCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = fourCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }

      if (stopCheck.includes(0) || stopCheck.length === 0) {
        return {
          ...state,
          flightData: { ...state.flightData, flightResult: initialValue },
        };
      } else {
        const results = initialValue.filter((item) =>
          stopCheck.some((items) => item.outBound.length === items)
        );
        return {
          ...state,
          flightData: { ...state.flightData, flightResult: results },
        };
      }
    case "Price":
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        arrivalTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = allslectedFilter(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime,
          arrivalTime
        );
        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0
      ) {
        const data = twoCombination(initialValue, stopCheck, airlinechecked);

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = threeCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = fourCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }

      const minPrice = PriceValue[0];
      const maxPrice = PriceValue[1];
      const priceFilter = initialValue.filter(
        (item) =>
          item.fare.adultFare + item.fare.adultTax + item.fare.adultMarkup >=
            minPrice &&
          item.fare.adultFare + item.fare.adultTax + item.fare.adultMarkup <=
            maxPrice
      );
      return {
        ...state,
        flightData: { ...state.flightData, flightResult: priceFilter },
      };
    case "ArrivalTime":
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        arrivalTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = allslectedFilter(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime,
          arrivalTime
        );
        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0
      ) {
        const data = twoCombination(initialValue, stopCheck, airlinechecked);

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = threeCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = fourCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }

      const fligthArrival = initialValue.filter(
        (item) =>
          item.outBound[item.outBound.length - 1].reachDate.split("T")[1] >=
            arrivalTime.split("-")[0] &&
          item.outBound[item.outBound.length - 1].reachDate.split("T")[1] <=
            arrivalTime.split("-")[1]
      );
      return {
        ...state,
        flightData: { ...state.flightData, flightResult: fligthArrival },
      };
    case "DepartureTime":
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        arrivalTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = allslectedFilter(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime,
          arrivalTime
        );
        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0
      ) {
        const data = twoCombination(initialValue, stopCheck, airlinechecked);

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = threeCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = fourCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }

      const fligthDeparture = initialValue.filter(
        (item) =>
          item.outBound[0].depDate.split("T")[1] >=
            departureTime.split("-")[0] &&
          item.outBound[0].depDate.split("T")[1] <= departureTime.split("-")[1]
      );
      return {
        ...state,
        flightData: { ...state.flightData, flightResult: fligthDeparture },
      };
    case "Airline":
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        arrivalTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = allslectedFilter(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime,
          arrivalTime
        );
        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0
      ) {
        const data = twoCombination(initialValue, stopCheck, airlinechecked);

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = threeCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }
      if (
        stopCheck.length !== 0 &&
        !stopCheck.includes(0) &&
        airlinechecked.length !== 0 &&
        departureTime.length !== 0 &&
        PriceValue.length !== 0
      ) {
        const data = fourCombination(
          initialValue,
          stopCheck,
          airlinechecked,
          PriceValue,
          departureTime
        );

        return {
          ...state,
          flightData: { ...state.flightData, flightResult: data },
        };
      }

      if (airlinechecked.length === 0) {
        return {
          ...state,
          flightData: { ...state.flightData, flightResult: initialValue },
        };
      } else {
        const airlineFilter = initialValue.filter((item) =>
          airlinechecked.some((ite) => item.valCarrier === ite)
        );
        return {
          ...state,
          flightData: { ...state.flightData, flightResult: airlineFilter },
        };
      }
    case "time":
      console.log("action", action);
      // if (
      //   stopCheck.length !== 0 &&
      //   !stopCheck.includes(0) &&
      //   airlinechecked.length !== 0 &&
      //   departureTime.length !== 0 &&
      //   arrivalTime.length !== 0 &&
      //   PriceValue.length !== 0
      // ) {
      //   const data = allslectedFilter(
      //     initialValue,
      //     stopCheck,
      //     airlinechecked,
      //     PriceValue,
      //     departureTime,
      //     arrivalTime
      //   );
      //   return {
      //     ...state,
      //     flightData: { ...state.flightData, flightResult: data },
      //   };
      // }
      // if (
      //   stopCheck.length !== 0 &&
      //   !stopCheck.includes(0) &&
      //   airlinechecked.length !== 0
      // ) {
      //   const data = twoCombination(initialValue, stopCheck, airlinechecked);

      //   return {
      //     ...state,
      //     flightData: { ...state.flightData, flightResult: data },
      //   };
      // }
      // if (
      //   stopCheck.length !== 0 &&
      //   !stopCheck.includes(0) &&
      //   airlinechecked.length !== 0 &&
      //   PriceValue.length !== 0
      // ) {
      //   const data = threeCombination(
      //     initialValue,
      //     stopCheck,
      //     airlinechecked,
      //     PriceValue
      //   );

      //   return {
      //     ...state,
      //     flightData: { ...state.flightData, flightResult: data },
      //   };
      // }
      // if (
      //   stopCheck.length !== 0 &&
      //   !stopCheck.includes(0) &&
      //   airlinechecked.length !== 0 &&
      //   departureTime.length !== 0 &&
      //   PriceValue.length !== 0
      // ) {
      //   const data = fourCombination(
      //     initialValue,
      //     stopCheck,
      //     airlinechecked,
      //     PriceValue,
      //     departureTime
      //   );

      //   return {
      //     ...state,
      //     flightData: { ...state.flightData, flightResult: data },
      //   };
      // }

      // const minPrice = PriceValue[0];
      // const maxPrice = PriceValue[1];
      // const priceFilter = initialValue.filter(
      //   (item) =>
      //     item.fare.grandTotal >= minPrice && item.fare.grandTotal <= maxPrice
      // );
      // return {
      //   ...state,
      //   flightData: { ...state.flightData, flightResult: priceFilter },
      // };
      const minDuration = durationTime[0];
      const maxDuration = durationTime[1];
      const duration = initialValue.filter(
        (time) => time.outEFT >= minDuration && time.outEFT <= maxDuration
      );
      return {
        ...state,
        flightData: { ...state.flightData, flightResult: duration },
      };
    case "Reset":
      return {
        ...state,
        flightData: { ...state.flightData, flightResult: action.payload },
      };
    default:
      state;
  }
};

export const resetFilter = (data, dispatchFilter, setChecked) => {
  setChecked([]);
  dispatchFilter({
    type: "Reset",
    payload: data,
  });
};

const allslectedFilter = (
  initialValue,
  stopCheck,
  airlinechecked,
  PriceValue,
  departureTime,
  arrivalTime
) => {
  const stopfiterDataAll = initialValue
    .filter((item) => stopCheck.some((ite) => item.outBound.length === ite))
    .filter((air) =>
      airlinechecked.some((airline) => air.valCarrier === airline)
    )
    .filter(
      (pri) =>
        pri.fare.adultFare + pri.fare.adultTax + pri.fare.adultMarkup >=
          PriceValue[0] &&
        pri.fare.adultFare + pri.fare.adultTax + pri.fare.adultMarkup <=
          PriceValue[1]
    )
    .filter(
      (dep) =>
        dep.outBound[0].depDate.split("T")[1] >= departureTime.split("-")[0] &&
        dep.outBound[0].depDate.split("T")[1] <= departureTime.split("-")[1]
    )
    .filter(
      (arr) =>
        arr.outBound[arr.outBound.length - 1].reachDate.split("T")[1] >=
          arrivalTime.split("-")[0] &&
        arr.outBound[arr.outBound.length - 1].reachDate.split("T")[1] <=
          arrivalTime.split("-")[1]
    );
  return stopfiterDataAll;
};

const fourCombination = (
  initialValue,
  stopCheck,
  airlinechecked,
  PriceValue,
  departureTime
) => {
  const stopfiterDataAll = initialValue
    .filter((item) => stopCheck.some((ite) => item.outBound.length === ite))
    .filter((air) =>
      airlinechecked.some((airline) => air.valCarrier === airline)
    )
    .filter(
      (pri) =>
        pri.fare.adultFare + pri.fare.adultTax + pri.fare.adultMarkup >=
          PriceValue[0] &&
        pri.fare.adultFare + pri.fare.adultTax + pri.fare.adultMarkup <=
          PriceValue[1]
    )
    .filter(
      (dep) =>
        dep.outBound[0].depDate.split("T")[1] >= departureTime.split("-")[0] &&
        dep.outBound[0].depDate.split("T")[1] <= departureTime.split("-")[1]
    );
  return stopfiterDataAll;
};
const threeCombination = (
  initialValue,
  stopCheck,
  airlinechecked,
  PriceValue
) => {
  const stopfiterDataAll = initialValue
    .filter((item) => stopCheck.some((ite) => item.outBound.length === ite))
    .filter((air) =>
      airlinechecked.some((airline) => air.valCarrier === airline)
    )
    .filter(
      (pri) =>
        pri.fare.adultFare + pri.fare.adultTax + pri.fare.adultMarkup >=
          PriceValue[0] &&
        pri.fare.adultFare + pri.fare.adultTax + pri.fare.adultMarkup <=
          PriceValue[1]
    );

  return stopfiterDataAll;
};
const twoCombination = (initialValue, stopCheck, airlinechecked) => {
  const stopfiterDataAll = initialValue
    .filter((item) => stopCheck.some((ite) => item.outBound.length === ite))
    .filter((air) =>
      airlinechecked.some((airline) => air.valCarrier === airline)
    );
  return stopfiterDataAll;
};
