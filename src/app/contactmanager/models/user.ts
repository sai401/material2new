import { Notes } from './notes';

export class User {
    id: number;
    name: string;
    avatar: string;
    birthDate: Date;
    bio: string;
    notes: Notes[] = [];
}
