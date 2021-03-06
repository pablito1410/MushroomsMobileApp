import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../model/user';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class UserService {
    constructor(private http: Http, private authenticationService: AuthenticationService) { }

    getAll() {
        return this.http.get('/api/users', this.authenticationService.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.authenticationService.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.authenticationService.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/', user, this.authenticationService.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.authenticationService.jwt()).map((response: Response) => response.json());
    }
}