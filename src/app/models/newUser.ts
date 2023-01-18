export interface NewUser {
    username: string;
    mail: string;
    password: string;
    adress: {
        street: string,
        postcode: number,
        city: string
    }
}