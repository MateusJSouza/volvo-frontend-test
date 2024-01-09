import React from 'react'
import { useCars } from '../hooks/useCars'
import { CarCard } from './CarCard'
import { Spacer } from './Spacer'

import { Text } from 'vcc-ui'
import styles from '../../public/css/home.module.css'
import { PaginationDesktop } from './PaginationDesktop'
import { PaginationMobile } from './PaginationMobile'

export const Home: React.FC = () => {
  const { cars } = useCars()

  function onClickNavigate(left: boolean) {
    const cardList = document.getElementById('card-list')
    const card = cardList?.firstElementChild
    const cardSize = (card?.clientWidth ?? 0) + 24
    const scrollPosition = cardList?.scrollLeft ?? 0

    if (left) cardList?.scrollTo({ left: scrollPosition - cardSize })
    else cardList?.scrollTo({ left: scrollPosition + cardSize })
  }

  function onClickMobile(index: number) {
    console.log(index)
  }

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        <PaginationDesktop
          onClickLeft={() => onClickNavigate(true)}
          onClickRight={() => onClickNavigate(false)}
        />

        <PaginationMobile
          selected={0}
          onClick={onClickMobile}
          total={cars.length}
        />
      </div>
    </div>
  )
}
