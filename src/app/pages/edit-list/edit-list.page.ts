import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoList } from 'src/app/list';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.page.html',
  styleUrls: ['./edit-list.page.scss'],
})
export class EditListPage {
  list: ToDoList = { "id": null as string, "items": [] } /*TODO: Was mache ich hiermit? */

  constructor(private listsService: ListsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listsService.getList(params.get('listId')).subscribe(list => this.list = list);
    })
  }

  async updateListForm() {
    let success = await this.listsService.updateList(this.list)
    if (success) {
      this.router.navigate(['/lists', this.list.docId])
    } else {
      // TODO: show error
      this.router.navigate([''])
    }
  }

}