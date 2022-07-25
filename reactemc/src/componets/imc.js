



export const levels = [
    {title: 'magreza',color: '#96A3AB', icon: 'down',imc: [0,18.5]},
    {title: 'normal',color: '#0EAD69', icon: 'up',imc: [18.6, 24.9]},
    {title: 'sobrepeso',color: '#DAA520', icon: 'down',imc: [25, 30]},
    {title: 'obeso',color: '#C3423F', icon: 'up',imc: [30.1, 99]},


]

export const calcularimc = (height,weight ) => {
  const imc = weight / (height* height)

  for(let i in levels) {
   if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
       return levels[i]
   }
  }
  return null
}