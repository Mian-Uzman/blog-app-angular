import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const userJwtToken = String(localStorage.getItem("token"));
		request = request.clone({
			headers: request.headers.append("Authorization", userJwtToken),
		});
		return next.handle(request);
	}
}
