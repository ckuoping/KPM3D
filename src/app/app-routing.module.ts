import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserResearchComponent } from './user-research/user-research.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { UiuxComponent } from './uiux/uiux.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'userresearch', component: UserResearchComponent },
  { path: 'webdevlopment', component: WebDevComponent },
  { path: 'uiux', component: UiuxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
