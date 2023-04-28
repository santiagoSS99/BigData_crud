import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosttwitterComponent } from './posttwitter/posttwitter.component';
import { HomeComponent } from './home/home.component';
import { VertweetComponent } from './vertweet/vertweet.component';

const routes: Routes = [
  {path:"creartw",component:PosttwitterComponent},
  {path:"home",component:HomeComponent},
  {path:"vertweet",component:VertweetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
