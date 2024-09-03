export type TGuitar = {
    id : number;
    name : string;
    image : string;
    description : string;
    price : number;
}

// export interface ICardItem extends TGuitar { // extiende de TGuitar y agrega el campo quantity
// export type TCardItem = Pick<TGuitar, 'id' | 'name' | 'price'> & { // usando Utility Types - Pick permite elegir ciertos elementos de otro type que queremos que se hereden
// export type TCardItem = Omit<TGuitar, 'id' | 'name' | 'price'> & { // usando Utility Types - Omit permite excluir ciertos elementos de otro type que no queremos que se hereden
export type TCardItem = TGuitar & { // hereda de TGuitar y agrega el campo quantity
    quantity: number;
}