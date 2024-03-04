import { StaticImageData } from "next/image";
import IProfileProps from "./IProfile";

export default interface IContentPostProps extends IProfileProps {
    content?: string;
    media?: StaticImageData|string;
    timestamp?: string|Date;
}