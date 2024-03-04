'use client';

import { ChevronRightIcon, EllipsisIcon } from "@/components/UI/Icons/GSIcon";
import ProfileWidget from "@/components/UI/ProfileWidget";
import styled from "styled-components";

import ProfileAvatar from '/public/avatar.png';
import { IUserProps } from "@/types/IUser";
import IProfileProps from "@/types/UI/IProfile";
import Link from "next/link";

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
                        image: ProfileAvatar
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker'
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker'
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker'
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker'
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker'
                }} />

                <PosterNode profile={{
                    profileAvatar: {
                        image: ProfileAvatar
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker'
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
        <StyledPoster className='flex flex-row items-center border-t border-t-grey-200 py-4'>
            <div className='pr-4'>
                <ProfileWidget {...props} />
            </div>
            <div className='px-6'>
                <p className='text-xs leading-[142.857%] text-grey-600'>{props.profile.postCount ?? 0} Posts</p>
            </div>
            <div>
                <button type='button' aria-label='....' className="top-[1px] p-[.625rem]">
                    <ChevronRightIcon className='w-[20px] h-[20px] text-grey-500 hover:text-grey-900 transition-all duration-[.175s]' />
                </button>
            </div>
        </StyledPoster>
    )
}

export default TopPosters;