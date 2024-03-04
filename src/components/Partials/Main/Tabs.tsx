'use client';

import { ReactNode } from "react";
import styled from "styled-components";

const TabDiv = styled.div`
    border: solid 1px var(--grey-200);
    background: var(--grey-50);
    border-radius: 8px;

    button {
        
        border-radius: 6px;
        transition: .125s ease-in-out;

        &.active,
        &:hover {
            box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);
            background: var(--white);
        }
    }
`;

const Tabs = (): JSX.Element => {

    return (
        <TabDiv className='flex flex-row gap-x-2 p-1'>
            <TabbedButton active={true}>
                For Me
            </TabbedButton>
            <TabbedButton>
                Following
            </TabbedButton>
        </TabDiv>
    )
}

const TabbedButton = ({ children, active }: { children?: ReactNode, active?: boolean }): JSX.Element => {

    return (
        <button type='button' className={`px-3 py-2 flex-1 ${active ? 'active' : ''}`}>
            {children}
        </button>
    )

}

export default Tabs;