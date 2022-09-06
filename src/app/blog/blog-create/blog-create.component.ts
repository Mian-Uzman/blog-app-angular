import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { BlogApiService } from "src/app/services/blog-api.service";
import { Router } from "@angular/router";
import { BlogDataService } from "src/app/services/blog-data.service";

@Component({
	selector: "app-blog-create",
	templateUrl: "./blog-create.component.html",
	styleUrls: ["./blog-create.component.css"],
})
export class BlogCreateComponent implements OnInit, OnDestroy {
	constructor(
		private blogApiService: BlogApiService,
		private router: Router,
		private blogDataService: BlogDataService
	) {}

	isEdit = this.blogDataService.isEdit;
	title: string = this.isEdit ? this.blogDataService.blogTitle : "";
	content: string = this.isEdit ? this.blogDataService.blogContent : "";
	newTag: string = "";
	tags: string[] = [];

	ngOnInit(): void {}
	ngOnDestroy(): void {
		this.blogDataService.isEdit = false;
	}

	editBlog() {
		this.blogApiService
			.editBlog(this.title, this.content, this.tags, this.blogDataService.blogId)
			.subscribe(
				(data: any) => {
					console.log(data);
					this.router.navigate([`/view_blog/${this.blogDataService.blogId}`]);
				},
				(err) => {
					console.error(err);
				}
			);
	}
	addBlog() {
		this.blogApiService.addBlog(this.title, this.content, this.tags).subscribe(
			(data: any) => {
				console.log(data);
				this.router.navigate(["/home"]);
			},
			(err) => {
				console.error(err);
			}
		);
	}

	addNewTag() {
		console.log(this.newTag);
		this.tags.push(this.newTag);
		this.newTag = "";
	}
}
