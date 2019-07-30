import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Services/blog.service';
import { Blog } from '../Models/Blog.model';

@Component({
  selector: 'app-blog-it',
  templateUrl: './blog-it.page.html',
  styleUrls: ['./blog-it.page.scss'],
})
export class BlogItPage implements OnInit {
  blogs:Blog[] ;
  constructor(private blogService:BlogService) { }

  ngOnInit() {
    this.blogService.fetchBlogs().subscribe((blogs)=>{
      this.blogs = blogs;
    }
    );
  }
 
}

