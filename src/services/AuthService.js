import { globals } from "../main";

import BackendService from "./BackendService";

import { store } from "../store/index";

globals.$http.defaults.headers.common["Content-Type"] = "application/json";
globals.$http.defaults.headers.common["Accept"] = "application/json";

export default class AuthService extends BackendService {
  login(user) {
    return globals.$http.post(this.apiUrl + "login", user).then(({ data }) => {
      store.commit("setToken", data.token_type + " " + data.access_token);
      this.fetchUserProfile().catch((err) => {
        console.log(err);
      });
      return data;
      // console.log(data);
    });
  }
  fetchUserProfile() {
    globals.$http.defaults.headers.common["Authorization"] = store.state.token;
    return globals.$http
      .get(this.apiUrl + "getUserProfile")
      .then(({ data }) => {
        store.commit("setUserProfile", data);
        return data;
      });
  }
  logout() {
    globals.$http.defaults.headers.common["Authorization"] = store.state.token;
    return globals.$http
      .post(this.apiUrl + "logout")
      .then(({ data }) => {
        console.log(data);
        store.dispatch("clearData");
      })
      .catch(() => {
        store.dispatch("clearData");
      });
  }
}
