import styles from './griditem.module.css'
import upimage from '../../imagens/up.png'
import downimage from '../../imagens/down.png'
import { levels } from '../imc'

export const Griditem = ({item}:props)=> {
    return (
        <div className= {styles.main} style= {{backgroundColor: item.color}}>
            <div className={styles.gridicon}>
                {item.icon === "up" && <img src={upimage} alt='' width= '30'/>}
                {item.icon === "down" && <img src={downimage} alt='' width= '30'/>}
            </div>
            <div className={styles.gridtitle}>{item.title}</div>

            {item.yourimc && 
             <div className={styles.yourimc}> Seu IMC é de {item.yourimc} kg/m </div>
            }

            <div className= {styles.gridinfo}>
               <>
               IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
               </>
            </div>

        </div>
    )
}