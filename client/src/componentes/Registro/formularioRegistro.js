import './formularioRegistro.css'
import { useState } from 'react';
import axios from 'axios';
export default function FormularioDeRegistro(){
    const [user, setUser] = useState({})

    const registerUser = async () => {
        try {
            if(user.password == user.passVerify){
                const res = await axios.post('http://localhost:3001/usuarios', user)
                console.log(res)
                alert('usuario agregado')
            }else{
                alert('Las contraseñas no coinciden, porfavor verificalas')
            }
        } catch (error) {
            
        }
    }

    const handleUser = ({target}) => {
        const {name:property, value} = target;
        user[property] = value;
        setUser({...user})
    }
    return(
        <div className="RegisterForm">
            <div className='inputRegisterForm'>
                <label>Email:</label>
                <input name="email" value={user.email} onChange={handleUser}/>
            </div>
            <div className='inputRegisterForm'>
                <label>Contraseña:</label>
                <input name='password' value={user.password} onChange={handleUser} />
            </div>
            <div className='inputRegisterForm'>
                <label>Repita la contraseña:</label>
                <input name='passVerify' value={user.passVerify} onChange={handleUser} />
            </div>
            <div className='buttonRegisterForm'>
                <button className='registrationButton' onClick={registerUser}>Registrarse</button>
            </div>
       </div>
    )
}