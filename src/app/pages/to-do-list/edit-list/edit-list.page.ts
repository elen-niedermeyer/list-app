import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoList } from 'src/app/list';
import { ErrorAlertService } from 'src/app/services/error-alert.service';
import { ListsService } from 'src/app/services/lists.service';

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
    private listsService: ListsService,
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
