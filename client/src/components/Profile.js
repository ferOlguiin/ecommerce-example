import { useAuth0 } from "@auth0/auth0-react"
import { LogoutButton } from "./LogoutButton";

export const Profile = () => {

    const {user} = useAuth0();
  return (
    <div className="card py-3 px-5 mb-4 shadow d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex">
          <img className="rounded-circle border border-dark border-1" src={user.picture} alt="img"/>
          <div className="ms-3 d-flex flex-column justify-content-center align-items-start">
            <h3 className="m-0 p-0">{user.nickname}</h3>
            <span className="mb-1">{user.email}</span>
            <LogoutButton/>
          </div>
        </div>
    </div>
  )
}

