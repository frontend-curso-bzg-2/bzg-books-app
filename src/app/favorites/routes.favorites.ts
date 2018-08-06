import { Routes } from "@angular/router";
import { FavoritesComponent } from "./containers/favorites/";
import { AuthGuardService } from "../auth/services/guards/auth-guard.service";

export const routes: Routes = [
    {
        path: 'list',
        component: FavoritesComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];