import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CommentService{

    constructor(private http : Http){

        console.log("comment service initialized");

    }

    getComment(){
        return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1').
        map(res => res.json());
    }
}