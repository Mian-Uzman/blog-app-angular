import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogApiService } from "src/app/services/blog-api.service";
import { BlogDataService } from "src/app/services/blog-data.service";

@Component({
	selector: "app-blog-view",
	templateUrl: "./blog-view.component.html",
	styleUrls: ["./blog-view.component.css"],
})
export class BlogViewComponent implements OnInit {
	constructor(
		private blogApiService: BlogApiService,
		private route: ActivatedRoute,
		private router: Router,
		private blogDataService: BlogDataService
	) {}

	ngOnInit(): void {
		const allParams = this.route.snapshot.params;
		const blogId = allParams["blogId"];
		this.getSingleBlog(blogId);
	}
	title = "";
	content = "";
	authorDetail = "";
	postedAt: Date = new Date();

	blogPostId = "";
	showButtons = false;
	comments: any = [];
	tags: any = [];
	newComment: string = "";
	userId = localStorage.getItem("userId");

	getSingleBlog(blogId: any) {
		this.blogApiService.getSingleBlog(blogId).subscribe(
			(data: any) => {
				this.title = data.blogPosts[0].title;
				this.content = data.blogPosts[0].content;
				this.authorDetail = data.blogPosts[0].authorDetail.name;
				this.postedAt = data.blogPosts[0].postedAt;
				this.blogPostId = data.blogPosts[0]._id;
				this.comments = data.blogPosts[0].comments;
				this.tags = data.blogPosts[0].tags;

				this.showButtons = this.userId == data.blogPosts[0].authorDetail._id ? true : false;
			},
			(err) => {
				console.log(err);
			}
		);
	}

	deleteBlog() {
		this.blogApiService.deleteBlog(this.blogPostId).subscribe(
			(data: any) => {
				this.router.navigate(["/home"]);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	addComment() {
		this.blogApiService.addComment(this.blogPostId, this.newComment).subscribe(
			(data: any) => {
				this.getSingleBlog(this.blogPostId);
				this.newComment = "";
			},
			(err) => {
				console.log(err);
			}
		);
	}
	deleteComment(commentId: string) {
		this.blogApiService.deleteComment(this.blogPostId, commentId).subscribe(
			(data: any) => {
				this.getSingleBlog(this.blogPostId);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	navigateToEdit() {
		this.blogDataService.blogTitle = this.title;
		this.blogDataService.blogContent = this.content;
		this.blogDataService.blogId = this.blogPostId;
		this.blogDataService.isEdit = true;
		this.router.navigate(["/new_blog"]);
	}
}
