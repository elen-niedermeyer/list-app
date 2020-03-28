export interface ToDoItem {
    docId?: string,
    name: string,
    creation_date: string, // ISO format
    completed: boolean,
    completed_date?: string, // ISO format
    due_date?: string, // ISO format
    note?: string
}
