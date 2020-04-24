import { ITEM_SORT_ORDER } from './item-sort-order.enum';
import { ToDoItem } from "./to-do-item";

export interface ToDoList {
    docId?: string,
    name: string,
    creation_date: string, // ISO format
    items: Array<ToDoItem>,
    item_sort_order: ITEM_SORT_ORDER
}
