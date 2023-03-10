import { UsersPres } from "./UsersPres"

export const UserContenedor = () => {
    let nombre = "pepito"
    let apellido = "lopez"
  return (
    <div>
        <UsersPres nombre ={nombre} apellido={apellido}/>
    </div>
  )
}
