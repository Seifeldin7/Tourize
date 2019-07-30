import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Blog } from '../Models/Blog.model';
import { HttpClient } from '@angular/common/http';
import { switchMapTo, switchMap, take, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class BlogService{
    private my_blogs:Blog[]= [];
    private imageUrl:string;
    private onChangeBlogs= new Subject<Blog[]>();
    constructor(private http:HttpClient){

    }
    // get blogs() {
    //     return this.my_blogs.asObservable();
    //   }
    // fetchBlogs(){
    //     return this.http
    //   .get<{ [key: string]: Blog }>(
    //     'https://tourize-f71eb.firebaseio.com/blogs.json'
    //   )
    //   .pipe(
    //     map(resData => {
    //       const blogs = [];
    //       for (const key in resData) {
    //         if (resData.hasOwnProperty(key)) {
    //           blogs.push(
    //             new Blog(
    //               0,
    //               resData[key].title,
    //               resData[key].description,
    //               resData[key].imageUrl,
    //               resData[key].username,
    //             )
    //           );
    //         }
    //       }
    //       return blogs;
    //       // return [];
    //     }),
    //     tap(blogs => {
    //       this.my_blogs.next(blogs);
    //     })
    //   );
    // }
    fetchBlogs() {
      if (this.my_blogs.length > 0) {
        setTimeout(() => {
          this.onChangeBlogs.next(this.my_blogs);
        });
      } else {
        this.http
          .get<Blog[]>("https://tourize-f71eb.firebaseio.com/blogs.json")
          .subscribe(
            blogs => {
              this.my_blogs = blogs;
              this.onChangeBlogs.next(this.my_blogs);
            },
            err => {}
          );
      }
      return this.onChangeBlogs;
    }
 
      addBlog(
        title: string,
        description: string,
        imageUrl: string,
        username: string
      ) {
        const newBlog = new Blog(
          0,
          title,
          description,
          imageUrl,
          username,
        );
       
        this.my_blogs.push(newBlog);
        // return this.http
        //   .post<{ name: string }>(
        //     'https://tourize-f71eb.firebaseio.com/blogs.json',
        //     {
        //       ...newBlog,

        //     }
        //   )
        //   .pipe(
        //     switchMap(resData => {
        //         return this.blogs;
        //       }),
        //     take(1),
        //     tap(blogs => {
        //       this.my_blogs.next(blogs.concat(newBlog));
        //     })
        //   );
        return this.http.put(
          "https://tourize-f71eb.firebaseio.com/blogs.json",
          this.my_blogs
        );
      }
      addImage(imageurl:string){
        this.imageUrl = imageurl;
      }
      getImage(){
        return this.imageUrl;
      }
     
  }
