import { useRef,useEffect } from "react";

function PracticeRef(){
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    return(
        <div>
            <h3>useRef Practice</h3>
            <input ref={inputRef} type="text" placeholder="Focus on me"/>
        </div>
    );
}

export default PracticeRef;