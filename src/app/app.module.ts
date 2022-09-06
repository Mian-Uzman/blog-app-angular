import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogPostComponent } from "./blog/blog-post/blog-post.component";
import { BlogParentComponent } from "./blog/blog-parent/blog-parent.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiInterceptor } from "./interceptor/api.interceptor";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BlogPostUserComponent } from "./blog/blog-post-user/blog-post-user.component";
import { BlogCreateComponent } from "./blog/blog-create/blog-create.component";
import { QuillModule } from "ngx-quill";
import { BlogViewComponent } from "./blog/blog-view/blog-view.component";

@NgModule({
	declarations: [
		AppComponent,
		BlogPostComponent,
		BlogParentComponent,
		LoginComponent,
		RegisterComponent,
		NavbarComponent,
		BlogPostUserComponent,
		BlogCreateComponent,
		BlogViewComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		QuillModule.forRoot({
			customOptions: [
				{
					import: "formats/font",
					whitelist: ["mirza", "roboto", "aref", "serif", "sansserif", "monospace"],
				},
			],
		}),
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
