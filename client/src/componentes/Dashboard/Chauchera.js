import ChaucheraForm from "./Chauchera/ChaucheraForm";
import ChaucheraHistorial from "./Chauchera/ChaucheraHistorial";

export default function Chauchera(){
    return(
        <div className="chaucheraContainer">
            <h3>Guarda tus transacciones</h3>
            <ChaucheraForm/>
            <h3>Ultimas transacciones</h3>
            <ChaucheraHistorial/>
        </div>
    )
}