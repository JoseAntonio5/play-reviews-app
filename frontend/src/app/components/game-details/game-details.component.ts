import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {

  @Input() game!: Game;

  constructor(
    private gameService: GameService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  onDeleteGame() {

    if (window.confirm("Do you really want to delete this game?")) {
      const id = this.route.snapshot.paramMap.get('id');
      this.gameService.deleteGame(id).subscribe(() => console.log('game deleted'))

      this.router.navigate(['/games'])
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService
    .getGameDetails(id)
    .subscribe((game) => this.game = game)
  }

}