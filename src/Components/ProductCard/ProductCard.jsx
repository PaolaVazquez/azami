import "./ProductCard.css"
export const ProductCard = ({title, price =0, isRed}) => {
    const saludar =()=>{
      console.log("hola")
    }
    const saludar2 =(nombre)=>{
      console.log("hola " + nombre)
    }
  return (
    <div>
        <h1 className={ isRed ? "red" : "blue"}>{title}</h1>
        <h1>{price}</h1>

        <button onClick={saludar}>Saludar</button>
        <button onClick={ ()=> saludar2("Juancito")}>Saludar2</button>

    </div>
  )
}
