import { IconButton } from "vcc-ui";

import styles from '../../public/css/components/pagination.module.css';

interface PaginationDesktopProps {
  onCLickLeft(): void
  onClickRight(): void
}

export function PaginationDesktop({ onCLickLeft, onClickRight }: PaginationDesktopProps) {
  return (
    <div className={styles.btnWrapper}>
      <IconButton
        variant="outline"
        onClick={onCLickLeft}
        aria-label="esquerda"
        iconName="navigation-chevronback"
      />

      <IconButton
        variant="outline"
        onClick={onClickRight}
        aria-label="direita"
        iconName="navigation-chevronforward"
      />
    </div>
  )
}