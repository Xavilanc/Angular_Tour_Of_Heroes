import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
    ShowMovieDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
