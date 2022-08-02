import  useCotizador  from "../hooks/useCotizador"

const Error = () => {

    const {error} = useCotizador()

  return (
    <div className="border-solid border-4 border-red-500 bg-red-100 ">
        <p className="text-center uppercase font-bold text-red-600 m-2">{error}</p>    
    </div>
  )
}

export default Error