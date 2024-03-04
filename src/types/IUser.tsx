import { StaticImageData } from "next/image";

interface IUserAvatar {
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