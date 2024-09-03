export type TGuitar = {
    id : number;
    name : string;
    image : string;
    description : string;
    price : number;
}

// export interface ICardItem extends TGuitar { // extiende de TGuitar y agrega el campo quantity
export type TCardItem = TGuitar & { // hereda de TGuitar y agrega el campo quantity
    quantity: number;
}