import FormularioDeLogin from "../componentes/Login/FormularioLogin"
import './login.css'
export default function Login(){
    return(
        <div className="loginContent">
            <div className="loginBox">
                <h1>Login</h1>
                <FormularioDeLogin/>
            </div>
        </div>
        
    )
}