import { Component, OnInit } from "@angular/core";
import { BlogApiService } from "src/app/services/blog-api.service";

@Component({
	selector: "app-blog-post-user",
	templateUrl: "./blog-post-user.component.html",
	styleUrls: ["./blog-post-user.component.css"],
})
export class BlogPostUserComponent implements OnInit {
	constructor(private blogApiService: BlogApiService) {}

	ngOnInit(): void {
		this.getBlogs();
	}
	blogs: any[] = [];
	noBlogs: boolean = false;

	getBlogs() {
		this.blogApiService.getUserBlogs().subscribe(
			(data: any) => {
				this.blogs = data.blogPosts;
				this.noBlogs = this.blogs.length === 0 ? true : false;
			},
			(err) => {
				console.error(err);
			}
		);
	}
}
