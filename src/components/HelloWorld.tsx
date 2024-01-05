import React from "react";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import { Spacer } from "./Spacer";

import { Text } from "vcc-ui";
import styles from '../../public/css/home.module.css';

export const HelloWorld: React.FC = () => {
  const { cars } = useCars()

  console.log(cars)

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper}>
        {cars.map(car =>
          <CarCard
            key={car.id}
            car={car}
          />
        )}
        TSSp</div>
    </div>
  )
};
