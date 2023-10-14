import { IUserData } from "./IUserData";

export interface ISearchUserProps {
   fetchUsers: (userEmail: string, userNumber?: string) => Promise<IUserData[]>;
}