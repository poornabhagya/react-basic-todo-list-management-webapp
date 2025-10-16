import { useEffect } from "react";

function UseEffectPractice(){
    useEffect(()=>{
        console.log('Component Mounted!')
    },[]);
    return <h4>useEffect practice</h4>
}

export default UseEffectPractice;