import { useCallback, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {

    const { resultado, datos} = useCotizador()
    const { marca, plan , year } = datos

    const [ nombreMarca ]= useCallback( MARCAS.filter( m => m.id === Number(marca)),[ resultado ] )
    
    const [ planElegido ] = useCallback( PLANES.filter( p => p.id === Number(plan)),[ resultado ] )

    //useRef //HOOK QUE MANTIENE EL ESTADO DEL COMPONENTE 
    const yearRef = useRef(year)
    
    if(resultado === 0 ) return null
    
    
    return (

    <div className="bg-gray-100 text-center mt-5 p-5 drop-shadow-xl">
        <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

        <p className="my-3">
            <span className="font-bold">Marca: </span> {nombreMarca.nombre}
        </p>
        <p className="my-3 ">
            <span className="font-bold">Plan: </span> {planElegido.nombre}
        </p>
        <p className="my-3">
            <span className="font-bold">Año del Vehículo: </span> {yearRef.current}
        </p>
        <p className="my-3">
            <span className="text-2xl font-bold">Año del Vehiculo: {resultado}</span> 
        </p>
    </div>

    )
}

export default Resultado