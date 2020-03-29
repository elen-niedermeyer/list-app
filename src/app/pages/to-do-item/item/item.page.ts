import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/app/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  item: ToDoItem = {
    name: "",
    creation_date: "",
    completed: false,
  } /*TODO*/

  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemsService.getItem(params.get('listId'), params.get('itemId'))
        .subscribe(item => {
          this.item = item
        })
    })
  }

}
