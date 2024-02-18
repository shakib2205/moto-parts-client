import { useEffect, useState } from "react";


const useParts = () => {
    const [parts, setParts] = useState();
    
    useEffect(() => {
        fetch("https://moto-parts-server.vercel.app/partsItem")
        .then(res => res.json())
        .then(data => setParts(data));
    },[])
    return [parts];
};

export default useParts;