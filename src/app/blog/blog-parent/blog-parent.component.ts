import { Component, OnInit } from "@angular/core";
import { BlogApiService } from "src/app/services/blog-api.service";

@Component({
	selector: "app-blog-parent",
	templateUrl: "./blog-parent.component.html",
	styleUrls: ["./blog-parent.component.css"],
})
export class BlogParentComponent implements OnInit {
	constructor(private blogApiService: BlogApiService) {}

	ngOnInit(): void {
		this.getBlogs();
	}
	blogs: any[] = [];
	noBlogs = false;
	username = localStorage.getItem("username");
	getBlogs() {
		this.blogApiService.getAllBlogs().subscribe(
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
