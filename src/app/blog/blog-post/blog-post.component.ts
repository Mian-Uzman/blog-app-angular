import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-blog-post",
	templateUrl: "./blog-post.component.html",
	styleUrls: ["./blog-post.component.css"],
})
export class BlogPostComponent implements OnInit {
	@Input() title = "";
	@Input() content = "";
	@Input() author = "";
	@Input() postedAt = "";
	@Input() blogId = "";
	@Input() comments = [];
	@Input() tags = [];
	constructor() {}

	ngOnInit(): void {}
}
