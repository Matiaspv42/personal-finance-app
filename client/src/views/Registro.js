import FormularioDeRegistro from "../componentes/Registro/formularioRegistro"
import ImagenRegistro from "./Saly-25.png"


export default function Registro(){
    return(
        <div className="registro">
            <img src={ImagenRegistro} alt="" />
            <h1>Registro</h1>
            <FormularioDeRegistro/>
        </div>
    )
}