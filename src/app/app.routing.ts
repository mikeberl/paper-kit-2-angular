import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuard } from './guard/AuthGuard';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { MatchesContainerComponent } from './pages/matches-container/matches-container.component';
import { CreateMatchComponent } from './pages/create-match/create-match.component';
import { LeagueRankingComponent } from './pages/league-ranking/league-ranking.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatchSubmissionPreviewComponent } from './pages/match-submission-preview/match-submission-preview.component';
import { AchievementsComponent } from './pages/home/achievements/achievements.component';

const routes: Routes =[
    // { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
    { path: 'settings', component: SettingsComponent},
    { path: '', redirectTo: 'xxx', pathMatch: 'full' },
    { path: 'xxx',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'login',           component: LoginComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'home',      component: HomeComponent },
    { path: 'leagues',    component: LeaguesComponent},
    { path: 'matches',    component: MatchesContainerComponent},
    { path: 'create-match', component: CreateMatchComponent},
    { path: 'league', component: LeagueRankingComponent}, 
    { path: 'notifications', component: NotificationsComponent},
    { path: 'match-submission-preview', component: MatchSubmissionPreviewComponent},
    { path: 'achievements', component: AchievementsComponent}
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
