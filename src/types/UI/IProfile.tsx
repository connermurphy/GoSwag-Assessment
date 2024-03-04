import IUser from "../IUser";

export default interface IProfileProps {
    profile: IUser;

    actionEnabled?: boolean;

    timestamp?: string|Date;
}