import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { DeveloperComponent } from "./developer/developer.component";


const ROUTES: Routes = [
    { path: "signup", component: SignUpComponent},
    { path: "user", component: UserProfileComponent},
    { path: "developer", component: DeveloperComponent},
    { path: "", component: UserProfileComponent}
]

export { ROUTES };