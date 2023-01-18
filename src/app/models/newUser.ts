export interface NewUser {
    username: string;
    credentials: {
        mail: string;
        password: string;
    }
    adress: {
        street: string,
        postcode: number,
        city: string
    }
}