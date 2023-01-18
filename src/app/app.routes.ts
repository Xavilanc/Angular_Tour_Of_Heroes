import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignUpReactiveComponent } from "./sign-up-reactive/sign-up-reactive.component";
import { DeveloperComponent } from "./developer/developer.component";
import { OnomatopiaComponent } from "./onomatopia/onomatopia.component";
import { FilmListComponent } from "./film-list/film-list.component";
import { SearchMovieComponent } from "./search-movie/search-movie.component";


const ROUTES: Routes = [
    { path: "signup", component: SignUpReactiveComponent},
    { path: "signup-reactive", component: SignUpComponent},
    { path: "search-movie", component: SearchMovieComponent},
    { path: "user", component: UserProfileComponent},
    { path: "user/create", component: CreateUserComponent},
    { path: "developer", component: DeveloperComponent},
    { path: "onomatopia", component: OnomatopiaComponent},
    { path: "", component: UserProfileComponent},
    { path: "films", component: FilmListComponent}
]

export { ROUTES };