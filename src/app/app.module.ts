import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ROUTES } from './app.routes';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { OnomatopiaComponent } from './onomatopia/onomatopia.component';
import { OnomatopiaFormComponent } from './onomatopia-form/onomatopia-form.component';
import { HighlightDirective } from './highlight.directive';
import { FilmListComponent } from './film-list/film-list.component';
import { ShowMovieDirective } from './show-movie.directive';
import { SignUpReactiveComponent } from './sign-up-reactive/sign-up-reactive.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MenuComponent,
    SignUpComponent,
    DeveloperComponent,
    SkillComponent,
    OnomatopiaComponent,
    OnomatopiaFormComponent,
    HighlightDirective,
    FilmListComponent,
    ShowMovieDirective,
    SignUpReactiveComponent,
    SearchMovieComponent,
    CreateUserComponent,
    HomePageComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
