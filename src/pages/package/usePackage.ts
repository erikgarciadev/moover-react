import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import orders from '../../utils/orders.json'
import { Order } from "../orderPackage/interfaces";

export default function UsePackage(){
    const {orderId} =  useParams()
   
    const [loader , setLoader] = useState(false)
    const [order, setOrder] = useState<Order>()

    useEffect(()=>{
        setLoader(true)
        setOrder(orders.find(order => order.code === orderId))
        setLoader(false)
    }, [orderId])

    const getStatus = (status: number): {
        text: string;
        color: string;
    }  => {
        const objStatus: any = {
            1: {
                text: 'PROCESO DE RECOJO',
                color: 'red'
            } ,
            2: {
                text: 'PROCESO DE ENTREGA',
                color: 'yellow'
            } ,
            3: {
                text: 'ENTREGADO',
                color: 'green'
            } 
        }
        return objStatus[status]
    }

    return {
        loader,
        order,
        getStatus
    }
}