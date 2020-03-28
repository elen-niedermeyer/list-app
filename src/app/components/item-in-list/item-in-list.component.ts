import { Component, Input } from '@angular/core';
import { ToDoItem } from 'src/app/item';

@Component({
  selector: 'app-item-in-list',
  templateUrl: './item-in-list.component.html',
  styleUrls: ['./item-in-list.component.scss'],
})
export class ItemInListComponent {

  @Input() item: ToDoItem

  constructor() { }

}
