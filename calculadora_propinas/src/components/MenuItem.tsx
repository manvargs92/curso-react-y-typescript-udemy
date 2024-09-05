import type { TMenuItem } from "../types/types"

type TMenuItemProps = {
    item : TMenuItem;
    // addItem ? : () => void; // ? opcional; significa que puedo o no pasarle este prop
    addItem : () => void; // type para fucniones que se pasan vía props; a veces se pasa un parámetro y otras veces devuelven algo diferente a void
}

export default function MenuItem({item, addItem} : TMenuItemProps) {
  return (
    <button
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
        onClick={ () => addItem() }
    >
        <p>{ item.name }</p>
        <p className="font-black">${ item.price }</p>
    </button>
  )
}
