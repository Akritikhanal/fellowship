import React, {useEffect, useState} from "react";

    function Counter() {
    const [name, setName] = useState("");

    return (
        <div className="counter">
            <p> Do you love nature? {name}</p>
            <button onClick={() => setName("Yes")}>Yes</button>
            <button onClick={() => setName("No")}>No</button>
        </div>
    )
}

export default Counter;