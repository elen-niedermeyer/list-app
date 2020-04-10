import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorAlertService } from 'src/app/services/error-alert.service';
import { ToDoItemsService } from 'src/app/services/to-do-items.service';
import { ToDoItem } from 'src/app/to-do-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  listDocId;
  item: ToDoItem = { name: null, creation_date: new Date().toISOString(), completed: false, completed_date: null, due_date: null, note: null }; /*TODO: was mache ich damit?*/

  constructor(
    private itemsService: ToDoItemsService,
    private errorAlertService: ErrorAlertService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDocId = params.get('listId')
    })
  }

  async submitItemForm() {
    let res = await this.itemsService.addItem(this.listDocId, this.item);
    if (res.result) {
      this.router.navigate(['/list', this.listDocId]);
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

}
