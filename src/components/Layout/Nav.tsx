'use client';

import styled from 'styled-components';

import Image from 'next/image';

import LogoIcon from '/public/logo_icon.svg';
import LogoName from '/public/logo_name.svg';
import Link from 'next/link';

import { GSLink as Button } from '../UI/Button';
import { ButtonStyle } from '@/types/UI/IButton';

import { BellIcon, BuoyIcon, EllipsisIcon, GearIcon, HomeIcon, MessageBubbleIcon, SearchIcon, UserIcon } from '../UI/Icons/GSIcon';
import ProfileWidget from '../UI/ProfileWidget';

import ProfileAvatar from '/public/avatar.png';

const StyledNav = styled.nav`
    border-right: solid 1px var(--grey-200);
`;

const Nav = (): JSX.Element => {

    return (
        <StyledNav className='w-[20.83%] py-8'>
            <div className='flex flex-col gap-y-6 h-full'>
                <NavLogo />
                <NavLinks />
                <NavProfile />
            </div>
        </StyledNav>
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
        color: var(--grey-900);

        svg {
            color: inherit;
        }
    }
`;

const NavLinks = (): JSX.Element => {
    return (
        <div className='flex flex-col gap-y-6 px-4 h-full'>
            <ul className='flex flex-col gap-y-1 mb-6'>
                <li>
                    <StyledNavLink href='#' className='active'>
                        <HomeIcon />
                        Home
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        <SearchIcon />
                        Explore
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        <BellIcon />
                        Notifications
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        <MessageBubbleIcon />
                        Direct messages
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        <UserIcon />
                        Profile
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink href='#'>
                        <EllipsisIcon />
                        More
                    </StyledNavLink>
                </li>
            </ul>
            <Button href='#' className='w-full' buttonStyle={ButtonStyle.primary}>
                Make a post
            </Button>
            <div className='mt-auto'>
                <ul className='flex flex-col gap-y-1'>
                    <li>
                        <StyledNavLink href='#'>
                            <BuoyIcon />
                            Support
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink href='#'>
                            <GearIcon />
                            Settings
                        </StyledNavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const StyledNavProfile = styled.div`
    border-top: solid 1px var(--grey-200);
`;

const NavProfile = (): JSX.Element => {

    return (
        <div className='px-4'>
            <StyledNavProfile className='pl-2 pt-6'>
                <ProfileWidget profile={{
                    profileAvatar: {
                        image: ProfileAvatar
                    },
                    name: 'Olivia Rhye',
                    handle: 'oliviarhye'
                }}
                actionEnabled={true}
                />
            </StyledNavProfile>
        </div>
    )

}

export default Nav;