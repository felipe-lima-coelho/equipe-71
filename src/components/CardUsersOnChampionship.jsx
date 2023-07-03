import { User } from "@phosphor-icons/react"
import styles from './styles/CardUsersOnChampionship.module.css'

function CardUsersOnChampionship({ name, position }) {
  return (
    <div className={ styles.cards }>
      <div>
        <User size={ 20 } />
        <span>{ name }</span>
      </div>
      <span>{ position }&nbsp;ª Posição</span>
    </div>
  )
}

export default CardUsersOnChampionship;