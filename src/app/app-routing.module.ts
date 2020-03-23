import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'lists/:listId', loadChildren: () => import('./pages/todo-list/todo-list.module').then(m => m.TodoListPageModule) },
  { path: 'add-list', loadChildren: () => import('./pages/add-list/add-list.module').then(m => m.AddListPageModule) },
  { path: 'edit-list/:listId', loadChildren: () => import('./pages/edit-list/edit-list.module').then(m => m.EditListPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
