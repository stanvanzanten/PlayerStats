import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Club } from 'src/app/models/club.model';
import { BackendService } from 'src/app/services/backend.service';
import { AuthService } from 'src/app/services/auth.service';
import { ClubsComponent } from '../clubs.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clubs-edit',
  templateUrl: './clubs-edit.component.html',
  styleUrls: ['./clubs-edit.component.css']
})
export class ClubsEditComponent implements OnInit {

  @ViewChild("f") clubForm : NgForm
  @Input() club: Club;
  clubEdit;
  clubNewName = '';
  clubNewYear = 0;
  clubNewFunds = 0;
  clubNewLogo = '';
  selectedItem : Club;

  constructor(
    private _backendService: BackendService,
    private _clubComp: ClubsComponent,
    private _authService: AuthService
    ) { }

  ngOnInit() {
    }

  editClub() {
  if (this._authService.loggedIn) {
  this.clubEdit = new Club( this.club._id, this.clubNewName, this.clubNewYear, this.clubNewFunds, this.clubNewLogo)
  this._backendService.editClub(this.clubEdit)
  .subscribe(
    res => {
      this._clubComp.refreshClubs();
      console.log(res)},
    err => console.log(err)
  )}
  }
}
