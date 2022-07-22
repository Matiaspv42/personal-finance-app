import './formularioLogin.css'
import axios from 'axios'
import { useState, useContext } from 'react'
import AuthContext from "../../AuthContext";
import { Navigate } from 'react-router-dom';

export default function FormularioDeLogin(){
    const {token, setToken, login, setLogin, user, setUser, chauchera, setChauchera} = useContext(AuthContext)
    
    const handleLogin = async() => {
        try {
            const res = await axios.post("http://localhost:3001/login", user)
            console.log(res)
            setToken(res.data.token)
            setLogin(true)
            user['id'] = res.data.id
            setUser({...user})
            console.log(user)
            localStorage.setItem('token', 'Bearer '+ res.data.token)
            alert(`Bienvenido`)

        } catch (error) {
            alert('Hubo un error con tu email y/o contraseña, porfavor verificalas')
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
            {token && (
            <Navigate to="/dashboard/resumen" replace={true} />

            )}
        </div>
    )
}