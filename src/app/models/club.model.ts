import {Player} from '../models/player.model'

export class Club {
    constructor(
        public _id: String,
        public name: String,
        public foundingyear: Number,
        public funds: Number,
        public logo: String,
        public players?: [Player]
        ){}
}