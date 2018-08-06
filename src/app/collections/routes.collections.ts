import { Routes } from "@angular/router";
import { CollectionsComponent } from "./containers/collections/collections.component";
import { AuthGuardService } from "../auth/services/guards/auth-guard.service";

export const routes: Routes = [
    {
        path: 'list',
        component: CollectionsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];