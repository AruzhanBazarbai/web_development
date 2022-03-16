import {Component, OnInit} from '@angular/core';
import {Comment, Post} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PostsService} from '../posts.service';
import {POSTS} from '../fake-db';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post | undefined;
  loaded: boolean | undefined;
  comments: Comment[];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private postsService: PostsService){
    this.comments = [];
  }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.post = POSTS.find((x) => x.id === id);

    // this.route.paramMap.subscribe((params) => {
    //   const id = +params.get('id');
    //   this.post = POSTS.find((x) => x.id === id);
    // });

    this.getPost();
  }

  getPost() {
      this.route.paramMap.subscribe((params) => {
        const id = +(params.get('id') || {});
        this.loaded = false;
        this.postsService.getPost(id).subscribe((post) => {
        this.post = post;
        this.loaded = true;
        });
    });
  }

  updatePost( post : Post) {
    this.loaded = false;
    this.postsService.updatePost(post).subscribe((post) => {
      console.log(post);
      this.loaded = true;
    });
  }

  showComments(post : Post) {
    this.postsService.getPostComments(post.id).subscribe((comments) => {
      this.comments = comments;
    });
  }

  goBack() {
    this.location.back();
  }

}