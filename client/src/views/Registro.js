import FormularioDeRegistro from "../componentes/Registro/formularioRegistro"
import ImagenRegistro from "./Saly-25.png"
import './registro.css'

export default function Registro(){
    return(
        <div className="registro">
            <img src={ImagenRegistro} alt="" />
            <div className="registroContent">
                <h1>Registro</h1>
                <FormularioDeRegistro/>
            </div>
        </div>
    )
}