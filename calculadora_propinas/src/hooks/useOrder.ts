import { useState } from "react";
import type { TOrderItem } from "../types/types";

function useOrder() {

    const [order, setOrder] = useState<TOrderItem[]>([]); // asignación de type o un primitivo a un hook

    const addItem = () => console.log("Agregando...");
    

    return {
        addItem
    };

}

export default useOrder;