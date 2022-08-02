 export const MARCAS = [
    {id : 1 , nombre : "Europeo"},
    {id : 2 , nombre : "Americano"},
    {id : 3 , nombre : "Asiatico"}
]

//CONSTANTE QUE NOS CREA UN ARRAY CON LOS ULTIMOS 20 AÑOS DE MODELO DEL AUTOMOVIL
//getFullYear() devuelve el año de la fecha indicada acorde a la hora local.
//El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.

const YEARMAX = new Date().getFullYear();
    export const YEARS = Array.from(
        new Array(20),
        (valor , index) => YEARMAX - index
    ) ;

export const PLANES = [
    {id : 1 , nombre : "Basico"},
    {id : 2 , nombre : "Completo"}
]