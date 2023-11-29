import { globals } from "../main.js";
import Axios from "axios";

// console.log(globals);
globals.$http = Axios;
/**
 * Parent service class. Has common configs and methods.
 */
export default class BackendService {
  constructor() {
    this.apiUrl = "http://localhost:8000/api/";
  }
}
