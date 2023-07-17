import { useEffect } from "react"
import SpotifyAPI from "../services/spotify"

const getTokenFromURL = () => {
    const hash = window.location.hash
    const params = new URLSearchParams(hash)
    const token = params.get("#access_token")
    const expiry = params.get("expires_in")

    return {
        token, 
        expiry
    }
}

const AuthorisePage = () => {

    useEffect(()=>{
        const {token, expiry} = getTokenFromURL()
        SpotifyAPI.authorise(token, expiry)
        window.location.href = "/"
    })

    return <div>
        Loading...
    </div>
}

export default AuthorisePage