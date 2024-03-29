'use client';

import { ChevronRightIcon, EllipsisIcon } from "@/components/UI/Icons/GSIcon";
import ProfileWidget from "@/components/UI/ProfileWidget";
import styled from "styled-components";

import IProfileProps from "@/types/UI/IProfile";

import Link from "next/link";

import ProfileAvatar from '/public/avatar.png';
import ProfileAvatar2 from '/public/avatar2.png';
import ProfileAvatar3 from '/public/avatar3.png';
import ProfileAvatar4 from '/public/avatar4.png';
import ProfileAvatar5 from '/public/avatar5.png';
import ProfileAvatar6 from '/public/avatar6.png';
import ProfileAvatar7 from '/public/avatar7.png';
import ProfileAvatar8 from '/public/avatar8.png';


const TopPosters = (): JSX.Element => {
    return (
        <>
            <div className='flex flex-row gap-x-5 pb-5 border-b border-b-grey-200 mb-2'>
                <p className='text-md font-medium leading-[155.556%] flex-1'>Top posters</p>
                <button type='button' className='w-[20px] h-[20px] rotate-90'>
                    <EllipsisIcon className='text-grey-400' />
                </button>
            </div>
            <div>
                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar2
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker',
                    postCount: 24
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar6
                    },
                    name: 'Lana Steiner',
                    handle: 'lanasteiner',
                    postCount: 22
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar3
                    },
                    name: 'Demi Wilkinson',
                    handle: 'demi_wilkinson',
                    postCount: 22
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar5
                    },
                    name: 'Candice Wu',
                    handle: 'candicewu',
                    postCount: 20
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar4
                    },
                    name: 'Natali Craig',
                    handle: 'nat.craig',
                    postCount: 18
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar7
                    },
                    name: 'Drew Cano',
                    handle: 'drewc',
                    postCount: 16
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar8
                    },
                    name: 'Orlando Diggs',
                    handle: 'orlando_diggs',
                    postCount: 12
                }} />

            </div>
            <div className='pt-4 text-right'>
                <Link href='#' className='text-xs leading-[142.857%] font-semibold text-primary-700 hover:underline'>
                    View All
                </Link>
            </div>
        </>
    )
}

const StyledPoster = styled.div`
    &:first-of-type {
        border-top: none;
    }

    &:last-of-type {
        border-bottom: solid 1px var(--grey-200);
    }
`;

const PosterNode: React.FC<IProfileProps> = (props): JSX.Element => {
    return (
        <StyledPoster className='flex flex-row flex-wrap xl:flex-nowrap gap-y-2 items-center border-t border-t-grey-200 py-4'>
            <div className='pr-4 w-full xl:w-auto xl:flex-[60%] w-[0 0 60%]'>
                <ProfileWidget {...props} />
            </div>
            <div className='xl:px-4 w-[75px]'>
                <p className='flex flex-row flex-nowrap text-xs leading-[142.857%] text-grey-600 min-w-[65px]'>{props.profile.postCount ?? 0} Posts</p>
            </div>
            <div className='ml-auto'>
                <button type='button' aria-label='....' className="top-[1px] p-[.625rem]">
                    <ChevronRightIcon className='w-[20px] h-[20px] text-grey-500 hover:text-grey-900 transition-all duration-[.175s]' />
                </button>
            </div>
        </StyledPoster>
    )
}

export default TopPosters;