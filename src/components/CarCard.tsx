import Image from "next/image"
import { Flex, Link, Spacer, Text } from "vcc-ui"
import { Car } from "../types/car.interface"

import styles from '../../public/css/carCard.module.css'

interface CardProps {
  car: Car
}

export function CarCard({ car }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
      <Text variant="bates" subStyle="emphasis">{car?.bodyType}</Text>
      <Flex
        extend={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 4,
        }}
      >
        <Text variant="amundsen">{car?.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>
      </Flex>

      <Spacer />

      <Image src={car.imageUrl} alt={car.modelName} width="250" height="200" />

      <Spacer />

      <Flex
        extend={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          gap: 14,
        }}
      >
        <Link href="https://www.volvocars.com" arrow="right">
          Shop
        </Link>
        <Link href="https://www.volvocars.com" arrow="right">
          Learn
        </Link>
      </Flex>
    </div>
  )
}