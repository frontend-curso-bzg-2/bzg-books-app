import { Routes } from "@angular/router";
import { AuthGuardService } from "../auth/services/guards/auth-guard.service";
import { BooksMainComponent } from "./containers/books-main/";
import { BookDetailComponent } from "./containers/book-detail/";

export const routes: Routes = [
    {
        path: 'list',
        component: BooksMainComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: BookDetailComponent,
        canActivate: [AuthGuardService]
    }
];