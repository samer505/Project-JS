import { Utils } from "./utils.js";
import { Status } from "./status.js";
export class Task {
    description;
    status;
    timeStamp = Utils.currentDateString();
    constructor(description, status = Status.Uncompleted) {
        this.description = description;
        this.status = status;
    }
    toString() {
        return `description: ${this.description} status: ${this.status}`;
    }
}
