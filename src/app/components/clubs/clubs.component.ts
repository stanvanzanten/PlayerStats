import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AuthService } from 'src/app/services/auth.service';
import { Club } from 'src/app/models/club.model';


@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs = []
  id : number;
  selectedClub : Club;

  constructor(private _backendService : BackendService, private authService: AuthService) { }

  ngOnInit() {
    return this._backendService.getClubs()
    .subscribe(
      res => this.clubs = res,
      err => console.log(err)
    )
  }

  refreshClubs() {
    return this._backendService.getClubs()
    .subscribe(
      res => this.clubs = res,
      err => console.log(err)
    )
  }

  onSelect(club:Club) : void {
    this.selectedClub = club
  }

  onEditItem(id:number){
    console.log("dit id klik je aan : " + id);
    this._backendService.getClubById(id);
  }
}
