//1-IMPORTACION DEL HOOK createContext
import { useState ,createContext } from "react"
import  { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers"

//2-CREACION DE CONSTANTE CON VALOR INICIAL DE CREATE CONTEXT
const CotizadorContext = createContext()

//3-COMPONENTE QUE ALMACENA EL COMPONENTE DE CONTEXT CON TODOS SUS PROPS O CHILDREN EN ESTE CASO
//DENTRO DE COTIZADOR PROVIDER SE ALMACENA TODO LO QUE SE ENCUENTRA ENTRE COTIZADOR PROVIDER Y EL RETURN
const CotizadorProvider = ({children})=>{

    const [ datos, setDatos ] = useState({
        marca : "",
        year : "",
        plan : "",
    })

    const [ error , setError ] = useState("")
    const [ resultado, setResultado ] = useState(0)
    const [ cargando, SetCargando ] = useState(false)

//CAPTURADOR DEL EVENTO 
    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value,
        })
    }

    const cotizarSeguro = () =>{
        //BASE
        let resultado = 2000

        //OBTENER DIFERENCIA DE AÑO
        const diferencia = obtenerDiferenciaYear( datos.year)
        
        //POR CADA AÑO HAY QUE RESTAR UN 3%        
        resultado -= ((diferencia *3) * resultado) / 100        
        
        //EUROPEO 30%
        //AMERICANO 15%
        //ASIATICO 5%
        resultado *= calcularMarca( datos.marca )
       
        //BASICO
       //COMPLETO
        resultado *= calcularPlan( datos.plan )
       
        //FORMATEAR DINERO
        resultado = formatearDinero(resultado)
      
        

        SetCargando(true)
        
        setTimeout(() => {
            setResultado(resultado)
            SetCargando(false)
        }, 2000);
        
    
    }
    


//EN EL RETURN ENGLOBAMOS TODO DENTRO DE NUESTRA CONSTANTE Y LE PASAMOS CHILDREN PARA QUE TOME 
//TOD OS LOS VALORES LOS VALORES 
//DENTRO DE EL COMPONENTE contextProvider SE ALMACENA TODO LO QUE CONTIENE EL VALUE DEL RETURN
 
    return(
        <CotizadorContext.Provider 
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    
    )
}
//-4 EXPORTAMOS 
export{
    //EL PROVIDER ES DE DONDE SALEN LOS DATOS
    CotizadorProvider
}
//-5
export default CotizadorContext
