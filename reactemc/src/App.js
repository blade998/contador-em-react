


import styles from './App.module.css'
import poweredImage from './imagens/powered.png'
import { useState } from 'react'
import { levels,calcularimc } from './componets/imc'
import { Griditem } from './componets/griditem'
import leftarrowimage from './imagens/leftarrow.png'

const App = () => {

  const [heightfield, setHeightField] = useState(0);
  const [weightfiel, setweightfield] = useState(0);
  const [toshow,settoshow] = useState(null)
  const calcular = () => {
    if(heightfield && weightfiel){
settoshow(calcularimc(heightfield,weightfiel))
    }else{
      alert("digite todos os campos")
    }
  }

const backbutton = () => {
  settoshow(null)
  setHeightField(0)
  setweightfield(0)
}



  return (
      <div className={styles.main}>

    <header>
      <div className={styles.HeaderContainer}>
        <img src={poweredImage} alt="" width = {150} />
      </div>

    </header>
    <div className={styles.container}>
      
   
       <div className={styles.leftside}>
            <h1>Calcule o seu IMC</h1>
            <p>IMC é a sigla para Indice de Massa Corporea, parametro adotado pela  Organização Mundial de Saude para calcular o peso ideal de cada pessoa</p>

            <input type="number" placeholder="Digite a sua altura. Ex: 1.5 (em metros" value= {heightfield > 0 ? heightfield : ''} onChange= {e => setHeightField(parseFloat(e.target.value))} disabled= {toshow ? true : false} />
            <input type="number" placeholder="Digite o seu peso. Ex: 56.6 (em gramas" value= {weightfiel > 0 ? weightfiel : ''} onChange= {e => setweightfield(parseFloat(e.target.value))} disabled= {toshow ? true : false} />

            <button onClick={calcular}>calcular</button>
       </div>

       <div className={styles.Rightside}>
        {!toshow &&
      <div className={styles.grid}>
        {levels.map((item,key)=> (
    <Griditem key={key} item = {item}/>
        ))}
      </div>
} 
{toshow &&
<div className={styles.rightbig}> 
<div className={styles.rightarrow} onClick={backbutton}>
<img src={leftarrowimage} alt='' width={25}  />

</div>

<Griditem  item= {toshow} />
</div>

}     
    </div>

    

    </div>
      </div>

   

  )

}

export default App;
