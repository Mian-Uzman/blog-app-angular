import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private httpClient: HttpClient) {}

	baseURL: string = "http://localhost:3000/auth";
	isLoggedIn = localStorage.getItem("token") ? true : false;

	loginUser(email: string, password: string) {
		return this.httpClient.post(this.baseURL + "/login", { email, password });
	}

	registerUser(name: string, email: string, password: string) {
		return this.httpClient.post(this.baseURL + "/register", { name, email, password });
	}
	getToken() {
		return localStorage.getItem("token");
	}
}
