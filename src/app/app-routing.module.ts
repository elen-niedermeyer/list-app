import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'list/:listId', loadChildren: () => import('./pages/to-do-list/view-list/view-list.module').then(m => m.ViewListPageModule) },
  { path: 'add-list', loadChildren: () => import('./pages/to-do-list/add-list/add-list.module').then(m => m.AddListPageModule) },
  { path: 'edit-list/:listId', loadChildren: () => import('./pages/to-do-list/edit-list/edit-list.module').then(m => m.EditListPageModule) },
  { path: 'item/:listId/:itemId', loadChildren: () => import('./pages/to-do-item/view-item/view-item.module').then(m => m.ViewItemPageModule) },
  { path: 'add-item/:listId', loadChildren: () => import('./pages/to-do-item/add-item/add-item.module').then(m => m.AddItemPageModule) },
  { path: 'edit-item/:listId/:itemId', loadChildren: () => import('./pages/to-do-item/edit-item/edit-item.module').then(m => m.EditItemPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
