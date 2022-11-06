import './Pantalla.css';

const Pantalla = ({resultado})=>{
    return(
    <div className="pantalla">
        <p id="resultado">{resultado}</p>
    </div>
    );    
};

export default Pantalla;