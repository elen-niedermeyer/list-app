export interface ToDoItem {
    docId: string,
    name: string,
    creation_date: Date,
    completed: boolean,
    completed_date?: Date,
    due_date?: Date,
    note?: string
}
