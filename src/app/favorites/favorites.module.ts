import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { routes } from "./routes.favorites";
import { FavoritesComponent } from "./containers/favorites/";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritesComponent]
})
export class FavoritesModule { }
