import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clubs-create',
  templateUrl: './clubs-create.component.html',
  styleUrls: ['./clubs-create.component.css']
})
export class ClubsCreateComponent implements OnInit {

  clubCreateData = {};
  displayresult = {};
  showResultBox;

  constructor(
    private _backendService: BackendService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  createClub() {
      this._backendService.createClub(this.clubCreateData)
        .subscribe(
          res => {
            console.log(res)
            this.displayresult = {
              result: "success",
              message: "Club was created succesfully"
            };
          },
          err => console.log(err)
        )
    
  }

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }
}
