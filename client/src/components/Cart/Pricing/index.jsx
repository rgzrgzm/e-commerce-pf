import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Div } from "./styles";

export default function Pricing (){
    const store = useSelector(store=>store.cart.priceCart)
    const [price,setPrice]=useState()
    useEffect(()=>{
        let acum = 0 ;
        store.forEach(p=>{
            acum=acum+p.price
        })
        setPrice(acum)
    },[store])
    return(        
        <Div>
           <h2>
            Final price: $ {price}
           </h2>
        </Div>
    )
}