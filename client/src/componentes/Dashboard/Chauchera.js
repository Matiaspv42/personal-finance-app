import ChaucheraDeposito from "./Chauchera/ChaucheraDeposito";
import ChaucheraHistorial from "./Chauchera/ChaucheraHistorial";
import ChaucheraTransferencia from "./Chauchera/ChaucheraTransferencia";

export default function Chauchera(){
    return(
        <div className="chaucheraContainer">
            <h3>Deposita dinero en tus Chaucheras</h3>
            <ChaucheraDeposito/>
            <h3>Transfiere dinero entre tus Chaucheras</h3>
            <ChaucheraTransferencia/>
            <h3>Ultimas transacciones</h3>
            <ChaucheraHistorial/>
        </div>
    )
}