import React, { useEffect, useState } from "react";

const ContadorFuncion = () => {

    const [count, setCount] = useState(0)
  
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count])
    
    return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
    </div>
    );
  }

  export default ContadorFuncion;