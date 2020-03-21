import { Component } from '@angular/core';
import { List } from 'src/app/list';
import { ListsService } from 'src/app/services/lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage {
  list: List = { "id": null as string, "items": [] }; /*TODO: Was mache ich hiermit? */

  constructor(private listsService: ListsService, private router: Router) { }

  async submitListForm() {
    console.log(this.list)
    let success = await this.listsService.addList(this.list);
    if (success) {
      this.router.navigate(['/lists', this.list.id]);
    } else {
      // TODO: show error
      this.router.navigate(['']);
    }
  }

}
