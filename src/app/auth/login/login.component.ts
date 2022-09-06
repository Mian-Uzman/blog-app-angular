import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) {}

	email: string = "";
	password: string = "";
	loginError = false;
	loading = false;

	ngOnInit(): void {}

	login() {
		this.loginError = false;
		this.loading = true;
		this.authService.loginUser(this.email, this.password).subscribe(
			(data: any) => {
				localStorage.setItem("token", data.token);
				localStorage.setItem("username", data.name);
				localStorage.setItem("userId", data.userId);

				this.authService.isLoggedIn = true;

				this.router.navigate(["home"]);
			},
			(err) => {
				this.loginError = true;
				console.log(err);
				this.loading = false;
			},
			() => {
				this.loading = false;
			}
		);
	}
}
