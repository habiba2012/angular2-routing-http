import { Component, OnInit } from '@angular/core';
import {Userservice} from './../services/user.service';
import { PostService} from './../services/post.service';
import {CommentService} from './../services/comment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
   providers: [Userservice, PostService, CommentService]
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  address: address;
  hobbies : string[];
  showHobbies: boolean;
  posts : Post[];

  constructor(private userservice: Userservice, private postservice: PostService,
   private commentService: CommentService) {
    this.name = 'habiba akhter',
    this.email = 'habiba.khandaker@yahoo.com',
    this.address = {
          street : 'Buddingevej 348',
          city : 'copenhagen',
          country: 'denamrk'

    }
    this.hobbies = ['reading books', 'watching movies', 'writting code'],
    this.showHobbies = false

    this.userservice.getPosts().subscribe(posts => {
     this.posts = posts;
   });

   this.postservice.getService().subscribe(posts =>{
     console.log(posts);
   })

   this.commentService.getComment().subscribe(comments =>{
      console.log(comments);
   }
   );
   }
   
   toggleHobbies(){
     this.showHobbies = true;
   }

   addHobby(hobby){
     this.hobbies.push(hobby);
   }

   deleteHobby(i){
     this.hobbies.splice(i,1);
   }

   
   ngOnInit(){

   }



}

interface address {
     street : string;
     city: string;
     country: string;
   }

   interface Post{
     id: number;
     title: string;
     body: string;
   }