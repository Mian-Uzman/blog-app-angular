import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class BlogApiService {
	constructor(private httpClient: HttpClient) {}

	baseURL: string = "http://localhost:3000/blog";

	getAllBlogs() {
		return this.httpClient.get(this.baseURL + "/get_all_blogs");
	}

	getUserBlogs() {
		return this.httpClient.get(this.baseURL + "/get_user_blogs");
	}

	getSingleBlog(blogId: string) {
		return this.httpClient.get(this.baseURL + "/get_single_blog/" + blogId);
	}

	addBlog(title: string, content: string, tags: string[]) {
		return this.httpClient.post(this.baseURL + "/create_blog", { title, content, tags });
	}

	deleteBlog(blogId: string) {
		return this.httpClient.delete(this.baseURL + "/delete_blog/" + blogId);
	}
	editBlog(title: string, content: string, tags: string[], blogId: string) {
		return this.httpClient.put(this.baseURL + "/update_blog/" + blogId, {
			title,
			content,
			tags,
		});
	}

	addComment(blogId: string, comment: string) {
		return this.httpClient.post(this.baseURL + "/add_comment/" + blogId, { comment });
	}

	deleteComment(blogId: string, commentId: string) {
		return this.httpClient.delete(this.baseURL + "/delete_comment/" + `${blogId}/` + commentId);
	}
}
