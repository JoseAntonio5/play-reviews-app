import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent {

  @Input() game!: Game;

  constructor(
    private gameService: GameService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  updateTitle = new FormControl<string>('');
  updateDescription = new FormControl<string>('');
  updateGenre = new FormControl<string>('');
  updateImageUrl = new FormControl<string>('');

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.getGameDetails(id)
      .subscribe((game) => {
        this.game = game;
        this.updateTitle.setValue(game.title);
        this.updateDescription.setValue(game.description);
        this.updateGenre.setValue(game.genre);
        this.updateImageUrl.setValue(game.imageUrl);
      });
  }

  onUpdateGame() {
    if (!this.updateTitle.value || !this.updateDescription.value || !this.updateGenre.value || !this.updateImageUrl.value) {
      alert("Error. Please fill all of the fields");
      return;
    }

    const newGame: Game = {
      _id: this.game._id,
      title: this.updateTitle.value,
      description: this.updateDescription.value,
      genre: this.updateGenre.value,
      imageUrl: this.updateImageUrl.value,
      createdAt: new Date()
    }

    
    this.gameService.updateGame(newGame)
    .subscribe(() => console.log('Game updated successfully!'))
    
    this.router.navigate([`/games/${this.game._id}`])

  }

}
