'use client';

import styled from "styled-components";
import { GSLink as Button } from "./Button";
import { ButtonStyle } from "@/types/UI/IButton";
import IGradientCardProps from "@/types/UI/IGradientCard";
import { ReactNode } from "react";

const StyledGradientCard = styled.div`
    border-radius: 12px;
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
    border: solid 2px var(--grey-200);
    color: var(--white);
`;

const GradientCard: React.FC<IGradientCardProps> = (props): JSX.Element => {
    return (
        <StyledGradientCard className='bg-primary-gradient'>
            <div className='p-6 pb-8'>
                <h3 className='text-lg font-semibold pb-1'>
                    {props.title}
                </h3>
                {
                    props.description &&
                    <div className='text-xs'>
                        Unlock extra features and remove ads!
                    </div>
                }
            </div>
            <GradientCardAction buttonUrl={'#'}>
                Upgrade
            </GradientCardAction>
        </StyledGradientCard>
    )
}

const GradientCardAction = (props: { buttonUrl?: string, children?: ReactNode }): JSX.Element => {

    if (props.buttonUrl != null) {
        return (
            <div className='border-t border-white px-4 py-3'>
                <Button href={props.buttonUrl} buttonStyle={ButtonStyle.secondary} className='w-full'>
                    {props.children}
                </Button>
            </div>
        )
    }

    return <></>

}

export default GradientCard;