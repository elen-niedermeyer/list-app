import { ToDoItem } from "./item";

export interface ToDoList {
    docId: string,
    name: string,
    items: Array<ToDoItem>
}
