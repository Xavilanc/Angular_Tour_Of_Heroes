import { Skill } from "./skill";

export interface Developer {
    lastname: string;
    firstname: string;
    age: number;
    gender: string;
    bio: string;
    skills: Skill[];
}