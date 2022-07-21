import './formularioLogin.css'
import axios from 'axios'
import { useState, useContext } from 'react'
import AuthContext from "../../AuthContext";

export default function FormularioDeLogin(){
    const {token, setToken, login, setLogin, user, setUser} = useContext(AuthContext)
    
    const handleLogin = async() => {
        try {
            const res = await axios.post("http://localhost:3001/login", user)
            setToken(res.data.token)
            setLogin(true)
            localStorage.setItem('token', 'Bearer '+ res.data.token)
            alert(`Bienvenido`)
        } catch (error) {
            alert('algo salió mal :(')
            console.log(error)
        }
    }
    const handleUser = ({target}) => {
        const {name:property, value} = target;
        user[property] = value;
        setUser({...user})
    }

    return(
        <div className="LoginForm">
            <div className="inputLoginForm">
                <label>Email:</label>
                <input name="email" value={user.email} onChange={handleUser}/>
            </div>
            <div className="inputLoginForm">
                <label>Contraseña:</label>
                <input name='password' type='password' value={user.password} onChange={handleUser}/>
            </div>
            <div className="buttonLoginForm">
                <button onClick={handleLogin}>Iniciar Sesión</button>
            </div>
        </div>
    )
}