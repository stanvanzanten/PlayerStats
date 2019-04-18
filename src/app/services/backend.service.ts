import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Player } from '../models/player.model'
import { Club } from '../models/club.model'

@Injectable({
    providedIn: 'root'
  })

export class BackendService {

    public _playerUrl = environment.serverUrl + "/api/player/";
    public _clubUrl = environment.serverUrl + "/api/club/"

    constructor(private http: HttpClient ){}

    getPlayers() {
        return this.http.get<any>(this._playerUrl);
    }

    getPlayer(_id: any) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              '_id': _id
            })
          };
        return this.http.get<any>(this._playerUrl, httpOptions);
    }

    getPlayerById(_id: any) {
        return this.http.get<any>(this._playerUrl + '' + _id);
    }

    createPlayer(player: {}) {
        console.log(player)
        return this.http.post<any>(this._playerUrl, player);
    }

    editPlayer(player: {}) {
        console.log(player)
        return this.http.put<any>(this._playerUrl, player);
    }

    deletePlayer(_id: any) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          '_id': _id
        })
      };
    return this.http.delete<any>(this._playerUrl, httpOptions );
    }
}