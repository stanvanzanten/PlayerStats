import {Club} from '../models/club.model'

export class Player {
    constructor(
        public _id: String,
        public firstname: String,
        public lastname: String,
        public age: Number,
        public length: Number,
        public weight: Number,
        public imageLink: String,
        public club?: Club
        ){}
}