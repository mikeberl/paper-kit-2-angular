import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MainNavbarComponent } from './shared/main-navbar/main-navbar.component';
import { ProfilePreviewComponent } from './pages/home/profile-preview/profile-preview.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthInterceptor } from './guard/AuthInterceptor';
import { RankingListComponent } from './pages/home/ranking-list/ranking-list.component';
import { LastMatchesComponent } from './pages/home/last-matches/last-matches.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { BackNavbarComponent } from './shared/back-navbar/back-navbar.component';
import { MatchesContainerComponent } from './pages/matches-container/matches-container.component';
import { CreateMatchComponent } from './pages/create-match/create-match.component';
import { LeagueNavbarComponent } from './shared/league-navbar/league-navbar.component';
import { LeagueRankingComponent } from './pages/league-ranking/league-ranking.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    MainNavbarComponent,
    ProfilePreviewComponent,
    SettingsComponent,
    RankingListComponent,
    LastMatchesComponent,
    LeaguesComponent,
    MatchesComponent,
    BackNavbarComponent,
    MatchesContainerComponent,
    CreateMatchComponent,
    LeagueNavbarComponent,
    LeagueRankingComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
