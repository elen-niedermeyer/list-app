import { Component } from '@angular/core';
import { ToDoList } from 'src/app/list';
import { ListsService } from 'src/app/services/lists.service';
import { Router } from '@angular/router';
import { ErrorAlertService } from 'src/app/services/error-alert.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage {
  list: ToDoList = { docId: "", name: null as string, items: [] } /*TODO: Was mache ich hiermit? */

  constructor(
    private listsService: ListsService,
    private errorAlertService: ErrorAlertService,
    private router: Router
  ) { }

  async submitListForm() {
    let res = await this.listsService.addList(this.list);
    if (res.result) {
      this.list.docId = res.data;
      this.router.navigate(['/lists', this.list.docId]);
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

}
