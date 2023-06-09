import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AboutComponent } from './components/about/about.component';
import { NewGameFormComponent } from './components/new-game-form/new-game-form.component';
import { UpdateGameComponent } from './components/update-game/update-game.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'new-game', component: NewGameFormComponent },
  { path: 'update/:id', component: UpdateGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }