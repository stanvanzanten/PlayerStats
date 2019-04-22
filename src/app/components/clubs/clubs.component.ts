import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AuthService } from 'src/app/services/auth.service';
import { Club } from 'src/app/models/club.model';
import { Operator } from 'rxjs';


@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs = []
  id : number;
  selectedClub : Club;
  @Input() importClub: Club;
  searchClub: string;
  emptyClub: Club;

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

  isPopClub(club: Club) {
    if (this.importClub === undefined) return true;
    var listname = club.name
    var searchname = this.searchClub
    console.log(listname + searchname)
    if (listname.includes(searchname)) {
      this.refreshClubs();
      return true;
      } else return false;
  }

  removeSelectedClub(): void {
    this.selectedClub = this.emptyClub;
  }
}
