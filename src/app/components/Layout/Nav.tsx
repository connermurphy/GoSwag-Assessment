'use client';

import styled from 'styled-components';

import Image from 'next/image';

import LogoIcon from '/public/logo_icon.svg';
import LogoName from '/public/logo_name.svg';
import Link from 'next/link';

import { GSLink as Button, GSButton as Test} from '../UI/Button';
import { ButtonStyle } from '@/types/UI/IButton';

const Nav = (): JSX.Element => {

    return (
        <nav className='w-[20.83%] py-8'>
            <div className='flex flex-col gap-y-6'>
                <NavLogo />
                <NavLinks />
            </div>
        </nav>
    );
}

const NavLogo = (): JSX.Element => {
    return (
        <figure className='flex flex-row items-center gap-x-2 pl-6 pr-5'>
            <Image
                src={LogoIcon}
                alt='Logo Icon'
                className='w-[28px] h-[28px]'

            />
            <Image
                src={LogoName}
                alt='Name of Brand'
                className='hidden lg:block w-auto h-[15px]'
            />
        </figure>
    )
}


const StyledNavLink = styled(Link)`
    display: flex;
    flex-direction: row;
    column-gap: .75rem;
    padding: .5rem .75rem;
    border-radius: 6px;
    font-weight: 600;
    color: var(--grey-700);
    transition: all .125s ease-in-out;

    &.active,
    &:hover {
        background: var(--grey-50);
        color: var(--grey-900)
    }
`;

const NavLinks = (): JSX.Element => {
    return (
        <div className='px-4'>
            <ul className='flex flex-col gap-y-1 mb-6'>
                <li>
                    <StyledNavLink href='#' className='active'>
                        {/* svg icon */}
                        Home
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        {/* svg icon */}
                        Explore
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        {/* svg icon */}
                        Notifications
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        {/* svg icon */}
                        Direct messages
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        {/* svg icon */}
                        Profile
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        {/* svg icon */}
                        More
                    </StyledNavLink>
                </li>
            </ul>
            <Button href='#' className='w-full' buttonStyle={ButtonStyle.primary}>
                Make a post
            </Button>
        </div>
    )
}

export default Nav;