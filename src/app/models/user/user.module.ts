import { League } from "../league/league.module";

export class User {
  email?: string;
  username?: string;
  password?: string;
}

export class LoggedUser extends User {
  id : string;
  leagues : League[] = [];
  token : string;

  constructor(id: string, email: string, username : string, password: string, leagues : League[], token : string) {
    super();
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.leagues = leagues;
    this.token = token;
  }

}
