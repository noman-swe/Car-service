import { useEffect, useState } from "react";

const useLodings = (jsonData) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(jsonData)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [jsonData]);

    return [items, setItems];
};

export default useLodings;