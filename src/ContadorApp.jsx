import { useState } from "react";

function ContadorApp({value }) {
  const [contador, setContador] = useState(value);

  const incrementar = () => {
    setContador(contador + 1);
    console.log('Incrementar contador en 1 '+contador);
  }

  return ( 
    <>
      <h2>Contador : {contador} </h2>
      <button onClick={
        incrementar
      }>Incrementar contador en 1</button>
    </>
  )
}
    

export default ContadorApp;
