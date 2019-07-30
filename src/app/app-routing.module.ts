import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'startup-slides', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'trips', loadChildren: './trips/trips.module#TripsPageModule' },
  { path: 'profile/:id', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'blog-it', loadChildren: './blog-it/blog-it.module#BlogItPageModule' },
  { path: 'surprise-me', loadChildren: './surprise-me/surprise-me.module#SurpriseMePageModule' },
  { path: 'plan-a-trip', loadChildren: './plan-a-trip/plan-a-trip.module#PlanATripPageModule' },
  { path: 'survey', loadChildren: './survey/survey.module#SurveyPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'signup', loadChildren: './auth/signup/signup.module#SignupPageModule' },
  

  { path: 'addpost', loadChildren: './blog-it/addpost/addpost.module#AddpostPageModule' },
  { path: 'startup-slides', loadChildren: './startup-slides/startup-slides.module#StartupSlidesPageModule' },
  { path: 'chat-list/:id', loadChildren: './chat-list/chat-list.module#ChatListPageModule' },
  { path: ':name1/chat/:name2', loadChildren: './chat-list/chat/chat.module#ChatPageModule' },
  { path: 'matching', loadChildren: './matching/matching.module#MatchingPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
