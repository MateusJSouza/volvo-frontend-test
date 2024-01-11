import React, { useState } from 'react'
import { useCars } from '../hooks/useCars'
import { CarCard } from './CarCard'
import { Spacer } from './Spacer'

import { Text } from 'vcc-ui'
import styles from '../../public/css/home.module.css'
import { PaginationDesktop } from './PaginationDesktop'
import { PaginationMobile } from './PaginationMobile'

export const Home: React.FC = () => {
  const { cars } = useCars()

  const [selected, setSelected] = useState(0)

  function onClickNavigate(left: boolean) {
    const cardList = document.getElementById('card-list')
    const card = cardList?.firstElementChild
    const cardSize = (card?.clientWidth ?? 0) + 24
    const scrollPosition = cardList?.scrollLeft ?? 0

    if (left) cardList?.scrollTo({ left: scrollPosition - cardSize })
    else cardList?.scrollTo({ left: scrollPosition + cardSize })
  }

  function onClickMobile(index: number) {
    const cardList = document.getElementById('card-list')

    if (cardList) {
      const card = cardList.firstElementChild as HTMLElement | null

      if (card) {
        const cardSize = cardList?.clientWidth + 24
        const scrollPosition = cardList?.scrollLeft
        const targetScroll = cardSize * index
        const scrollAmount = targetScroll - scrollPosition
        cardList.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        })
        setSelected(index)
      }
    }
  }

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <PaginationDesktop
        onClickLeft={() => onClickNavigate(true)}
        onClickRight={() => onClickNavigate(false)}
      />

      <PaginationMobile
        selected={selected}
        onClick={onClickMobile}
        total={cars.length - 2}
      />
    </div>
  )
}
