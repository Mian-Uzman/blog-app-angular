import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { BlogCreateComponent } from "./blog/blog-create/blog-create.component";
import { BlogParentComponent } from "./blog/blog-parent/blog-parent.component";
import { BlogPostUserComponent } from "./blog/blog-post-user/blog-post-user.component";
import { BlogViewComponent } from "./blog/blog-view/blog-view.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
	{
		path: "home",
		component: BlogParentComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "",
		component: BlogParentComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "login",
		component: LoginComponent,
	},
	{
		path: "register",
		component: RegisterComponent,
	},
	{
		path: "user_blogs",
		component: BlogPostUserComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "new_blog",
		component: BlogCreateComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "view_blog/:blogId",
		component: BlogViewComponent,
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
