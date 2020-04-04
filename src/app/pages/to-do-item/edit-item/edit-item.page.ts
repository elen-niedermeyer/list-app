import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoItem } from 'src/app/item';
import { ItemsService } from 'src/app/services/items.service';
import { ErrorAlertService } from 'src/app/services/error-alert.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  listDocId: string
  item: ToDoItem = {
    name: "",
    creation_date: "",
    completed: false,
  } /*TODO*/

  constructor(
    private itemsService: ItemsService,
    private errorAlertService: ErrorAlertService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDocId = params.get('listId')
      this.itemsService.getItem(this.listDocId, params.get('itemId')).subscribe(item => this.item = item);
    })
  }

  async submitUpdateItemForm() {
    let res = await this.itemsService.updateItem(this.listDocId, this.item)
    if (res.result) {
      this.router.navigate(['/item', this.listDocId, this.item.docId])
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

}
