import { StaticImageData } from "next/image";

export interface IUserAvatar {
    image: StaticImageData|string;
    online?: boolean;
}

export default interface IUser {

    name?: string;
    handle?: string;

    //simulate contract between backend user model / api
    profileAvatar: IUserAvatar;
    profileUrl?: string;
    postCount?: number;

}

export interface IUserProps extends IUser {}