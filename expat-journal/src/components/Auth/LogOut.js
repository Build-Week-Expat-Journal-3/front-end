import React, { useEffect, useContext } from "react"
import { Redirect } from "react-router-dom"
import { logout } from "../../actions"
import { DispatchContext } from "../../context"


const Logout = () => {
    const dispatch = useContext(DispatchContext)
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        localStorage.removeItem("username")
    logout(dispatch)
    return <Redirect to="/" />;

}

export default Logout