import Styles from '../../styles/LandingPage.module.css'
export default function LandingPage(){
    return(
         <div className="contenedor">
             <div className="h1">
        <h1>HOLIS</h1>
        </div>
        <div>
            <p>ACA VA UNA BREVE DESCRIPCION</p>
        </div>
        <div className="boton">
            <button className={Styles.home}>
            HOME
            </button>
        </div>
    </div>
    
    
    )
}