import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class BlogDataService {
	constructor() {}

	blogTitle: string = "";
	blogContent: string = "";
	blogId: string = "";

	isEdit = false;
}
