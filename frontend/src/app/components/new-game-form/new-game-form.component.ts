import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

import { Game } from 'src/app/Game';

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.css']
})
export class NewGameFormComponent {

  constructor(private gameService: GameService, private router: Router) { }

  title = new FormControl<string>('');
  description = new FormControl<string>('');
  genre = new FormControl<string>('');
  imageUrl = new FormControl<string>('');

  onSubmit() {
    if (!this.title.value || !this.description.value || !this.genre.value || !this.imageUrl.value) {
      alert("Error. Please fill all of the fields");
      return;
    }

    const newGame: Game = {
      title: this.title.value,
      description: this.description.value,
      genre: this.genre.value,
      imageUrl: this.imageUrl.value,
      createdAt: new Date()
    }

    
    this.gameService.addGame(newGame)
    .subscribe(() => console.log('Successfully added new game!'))
    
    this.router.navigate(['/games'])
  }

}
