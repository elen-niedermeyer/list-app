import { Item } from "./item";

export interface ToDoList {
    docId?: string,
    id: string;
    items: Array<Item>;
}
