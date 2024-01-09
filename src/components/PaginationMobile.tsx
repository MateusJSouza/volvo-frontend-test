import { IconButton } from "vcc-ui";

interface PaginationMobile {
  onClickLeft(): void
  onClickRight(): void
}

export function PaginationMobile({ onClickLeft, onClickRight }: PaginationMobile) {
  return (
    <div>
      <IconButton
        variant="outline"
        onClick={onClickLeft}
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