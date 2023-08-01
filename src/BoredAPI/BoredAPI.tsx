import { useEffect, useState } from "react";
export interface BoredAPIData {
    activity:string;
    type: string;
    participants:number;
    price: number;
    link:string;
    accessibility:number;
}

export default function BoredAPI() : JSX.Element{

    const boredAPIUrl:string='https://www.boredapi.com/api/activity';

let activityData :BoredAPIData  = {
    activity :"",
    type :"",
    participants:0,
    price:0,
    link:"",
    accessibility:0,
}

    const[activityTODO,setActivity] = useState(activityData)
    function getActivity():void{
        fetch(boredAPIUrl)
        .then((res:Response)=>res.json())
        .then((resultObj) =>{
            console.log(resultObj);
            setActivity(resultObj); 
        }        
        );
    }


 useEffect(()=>{getActivity()},[]);

  

    return(
    <>

    <h1>Activity: {activityTODO.activity}</h1>
    <div>Type: {activityTODO.type}</div>
    <div>Participants: {activityTODO.participants}</div>
    <div>Price: {activityTODO.price}</div>
    <a href= {activityTODO.link}>{activityTODO.link}</a>
    <div>Acessibility: {activityTODO.accessibility}</div>
    </>)
}