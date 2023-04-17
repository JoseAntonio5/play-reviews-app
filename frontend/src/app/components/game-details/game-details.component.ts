import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { CommentService } from 'src/app/services/comment.service';
import { FormControl } from '@angular/forms';
import { Game } from 'src/app/Game';
import { Comment } from 'src/app/Comment';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {

  @Input() game!: Game;

  user = new FormControl<string>('');
  rating = new FormControl<number>(5);
  comment = new FormControl<string>('');

  constructor(
    private gameService: GameService,
    private commentService: CommentService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  // handle delete game
  onDeleteGame() {

    if (window.confirm("Do you really want to delete this game?")) {

      const id = this.route.snapshot.paramMap.get('id');

      this.gameService.deleteGame(id)
      .subscribe(() => console.log('Game deleted!'))

      this.router.navigate(['/games'])
    }
  }

  // handle delete comment
  onDeleteComment(id: string | undefined) {

    if(id === undefined) {
      console.log("Error. Undefined ID.");
      return;
    }

    this.commentService.deleteComment(id)
    .subscribe(() => console.log('Comment deleted!'))

    // reload the page
    window.location.reload();
  }

  // handle submitting a new comment to the game
  onSubmit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (!this.user.value || !this.rating.value || !this.comment.value) {
      alert("Error. Please fill all of the fields");
      return;
    }

    const newComment: Comment = {
      user: this.user.value,
      rating: this.rating.value,
      comment: this.comment.value,
      createdAt: new Date()
    }

    this.commentService.addComment(id, newComment)
    .subscribe(() => {
      console.log('Successfully added new comment!')
    })

    this.router.navigate([`/games/${id}`])

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService
    .getGameDetails(id)
    .subscribe((game) => this.game = game)
  }

}