import './formularioLogin.css'

export default function FormularioDeLogin(){
    return(
        <div className="LoginForm">
            <div className="inputLoginForm">
                <label>Email:</label>
                <input name="email"/>
            </div>
            <div className="inputLoginForm">
                <label>Contraseña:</label>
                <input name='password'/>
            </div>
            <div className="buttonLoginForm">
                <button>Iniciar Sesión</button>
            </div>
        </div>
    )
}