import React from "react";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";

import { Text } from "vcc-ui";
import styles from '../../public/css/home.module.css';

export const HelloWorld: React.FC = () => {
  const { cars } = useCars()

  console.log(cars)

  return (
    <div className={styles.homeWrapper}>
      <Text variant="peary">Todos os modelos recharge</Text>

      <div className={styles.cardsWrapper}>
        {cars.map(car =>
          <CarCard
            key={car.id}
            car={car}
          />
        )}
        TS</div>
    </div>
  )
};
