export class User {
    constructor(
        public _id: string = "",
        public first_name: string = "",
        public last_name: string = "",
        public email: string = "",
        public editable: boolean = false
    ){}
}
