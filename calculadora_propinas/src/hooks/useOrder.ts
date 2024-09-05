import { useState } from "react";
import type { TOrderItem } from "../types/types";

function useOrder() {

    const [order, setOrder] = useState<TOrderItem[]>([]); // asignación de type o un primitivo a un hook

    return {

    }

}

export default useOrder;