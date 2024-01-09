import React from "react";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import { Spacer } from "./Spacer";

import { Text } from "vcc-ui";
import styles from '../../public/css/home.module.css';
import { PaginationDesktop } from "./PaginationDesktop";

export const Home: React.FC = () => {
  const { cars } = useCars()

  function onClickNavigate(left: boolean) {
    let cardList = document.getElementById("card-list")
    let card = cardList?.firstElementChild
    let cardSize = (card?.clientWidth ?? 0) + 24
    let scrollPosition = cardList?.scrollLeft ?? 0

    if (left) cardList?.scrollTo({ left: scrollPosition - cardSize })
    else cardList?.scrollTo({ left: scrollPosition + cardSize })
  }

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map(car =>
          <CarCard
            key={car.id}
            car={car}
          />
        )}
        <PaginationDesktop
          onClickLeft={() => onClickNavigate(true)}
          onClickRight={() => onClickNavigate(false)}
        />
      </div>
    </div>
  )
};
