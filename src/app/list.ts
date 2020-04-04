import { ToDoItem } from "./item";

export interface ToDoList {
    docId?: string,
    name: string,
    creation_date: string, // ISO format
    items: Array<ToDoItem>
}
