import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) {}

	name: string = "";
	email: string = "";
	password: string = "";
	registerError = false;
	loading = false;

	ngOnInit(): void {}

	register() {
		this.registerError = false;
		this.loading = true;

		this.authService.registerUser(this.name, this.email, this.password).subscribe(
			(data: any) => {
				this.router.navigate(["login"]);
			},
			(err) => {
				this.registerError = true;
				console.log(err);
				this.loading = false;
			},
			() => {
				this.loading = false;
			}
		);
	}
}
