import './formularioRegistro.css'
export default function FormularioDeRegistro(){
    return(
        <div className="RegisterForm">
            <div className='inputRegisterForm'>
                <label>Email:</label>
                <input name="email"/>
            </div>
            <div className='inputRegisterForm'>
                <label>Nombre:</label>
                <input name='nombre'/>
            </div>
            <div className='inputRegisterForm'>
                <label>Contraseña:</label>
                <input name='password'/>
            </div>
            <div className='inputRegisterForm'>
                <label>Repita la contraseña:</label>
                <input name='passVerify' />
            </div>
            <div className='buttonRegisterForm'>
                <button className='registrationButton'>Registrarse</button>
            </div>
       </div>
    )
}