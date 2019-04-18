import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { BackendService } from '../../services/backend.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = []
  id:number;
  subscription: Subscription

  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit() {
    return this.backendService.getPlayers()
    .subscribe(
      res => this.players = res,
      err => console.log(err)
    )
  }

}
