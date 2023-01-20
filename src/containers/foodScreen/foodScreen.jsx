import { Chow } from "components/Chow/Chow";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchChow } from "utils/chowHelper";
import { Loadscreen } from "./loadscreen";

const BASEURL = "https://ciaochow.plusnarrative.biz";

export const FoodScreen = () => {
  const [chowState, setChowState] = useState(1);
  const { data: chows, isLoading } = useQuery({ queryFn: () => fetchChow() });

  const allChows = chows?.data?.data;
  const randomizeChow = () => {
    const randomNumber = Math.floor(Math.random() * allChows.length + 1);
    setChowState(randomNumber);
  };

  const chowToDispaly =
    allChows && allChows.filter((chow) => chow.id === chowState);

  if (isLoading) {
    return <Loadscreen />;
  }
  const imageURL =
    chowToDispaly[0].attributes.Image.data[1].attributes.formats.large.url;

  return (
    <Chow
      onPress={() => randomizeChow()}
      chowHeader={chowToDispaly[0].attributes.Title}
      descriptionText={chowToDispaly[0].attributes.Description}
      nutritionText={"Nutrition Text in absence of nothing from api"}
      imageURL={`${BASEURL}${imageURL}`}
    />
  );
};
