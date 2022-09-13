import { useAuth0 } from "@auth0/auth0-react"

export const LoginButton = () => {

    const {loginWithRedirect} = useAuth0();

  return (
    <div>
        <button className="btn btn-dark btn-sm ms-2 me-1" onClick={() => loginWithRedirect()}>Iniciar sesión</button>
    </div>
  )
}

