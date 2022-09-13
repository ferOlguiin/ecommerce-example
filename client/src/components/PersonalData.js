import { useAuth0 } from "@auth0/auth0-react"

export const PersonalData = () => {

    const {user} = useAuth0();

  return (
    <div className="p-3">
        <h5>Nombre: {user.given_name}</h5>
        <h5>Apellido: {user.family_name}</h5>
        <h5>Email: {user.email}</h5>
        <h5>Nickname: {user.nickname}</h5>
        <h5>Sesion iniciada el {user.updated_at}</h5>
    </div>
  )
}

