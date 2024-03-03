import { LinkProps } from "next/link";
import { ReactNode } from "react";

export enum ButtonStyle {
    primary = 'primary',
    secondary = 'secondary'
}

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    //optional, default to primary
    buttonStyle?: ButtonStyle;
    children?: ReactNode
}


export interface ILinkProps extends LinkProps {

    //optional, default to primary
    buttonStyle?: ButtonStyle;
    className?: string;
    children?: ReactNode

    href: string;
}