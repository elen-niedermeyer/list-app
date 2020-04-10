import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorAlertService } from 'src/app/services/error-alert.service';
import { ToDoListsService } from 'src/app/services/to-do-lists.service';
import { ToDoList } from 'src/app/to-do-list';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.page.html',
  styleUrls: ['./edit-list.page.scss'],
})
export class EditListPage {
  list: ToDoList = {
    name: null as string,
    creation_date: null,
    items: []
  } /*TODO: Was mache ich hiermit? */

  constructor(
    private listsService: ToDoListsService,
    private errorAlertService: ErrorAlertService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listsService.getList(params.get('listId')).subscribe(list => this.list = list);
    })
  }

  async updateListForm() {
    let res = await this.listsService.updateList(this.list)
    if (res.result) {
      this.router.navigate(['/list', this.list.docId])
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

}
