import { useAuth0 } from "@auth0/auth0-react"

export const LogoutButton = () => {

    const {logout} = useAuth0();

  return (
    <div>
        <button className="btn btn-danger btn-sm py-0 px-1" onClick={() => logout()}>Cerrar sesión</button>
    </div>
  )
}
