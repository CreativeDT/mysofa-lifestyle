import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent},

{    path:'3d',component:ModelViewerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
