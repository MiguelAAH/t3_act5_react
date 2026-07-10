import { useState } from 'react';

function Contador() {
    const [cuenta, setCuenta] = useState(0);

    return (
        <div className="contador-box">
            <h3>Contador</h3>
            <p className="contador-numero">{cuenta}</p>
            <button onClick={() => setCuenta(cuenta + 1)} className="btn btn-primary">Incrementar</button>
            <button onClick={() => setCuenta(0)} className="btn btn-danger">Reiniciar</button>
        </div>
    );
}

export default Contador;