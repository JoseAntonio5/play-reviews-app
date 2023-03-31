import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {

  @Input() game!: Game;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    // this.gameService.getGameDetails()
  }

}
