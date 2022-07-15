import{ Header} from './componentes/header';
import {Photo} from './componentes/photo'
import {useState} from 'react'

const App = () => {  
     //usestate e como se fosse uma variavel                      
const [n,setN] = useState(0)
 const menos = () => {
    setN( n - 1)
 }
 const mais = () => {
 setN( n + 10)
 }

    
           // sempre tenho que importar o componente em maiuculo
  return (
    
    <div>
       <button onClick={menos}>-</button>
       <div>{n}</div>
       <button onClick={mais}>+</button>
   
    </div>
  )
}

export default App;

// onClick e um evewnto ao invez de onclick minusculo
//para salvar uma variavel no component para alterala eu preciso usar o user state