import Image from 'next/image';

import IProfileProps from '@/types/UI/IProfile';

import { EllipsisIcon } from './Icons/GSIcon';
import { IUserAvatar } from '@/types/IUser';
import styled from 'styled-components';

const ProfileWidget: React.FC<IProfileProps> = ({ profile, timestamp, actionEnabled }): JSX.Element => {
    return (
        <div className={`flex flex-row gap-x-3 ${actionEnabled ? 'pr-8' : ''}`}>
            <ProfileImage {...profile.profileAvatar} />
            <div className={`flex-1 [&>*]:leading-[142.857%] ${!profile?.name && !profile.handle ? 'hidden' : ''}`}>
                {
                    profile?.name &&
                    <p className='text-xs font-semibold text-grey-700'>
                        {profile.name}
                        {
                            timestamp && <span className='pl-2 inline-block text-2xs font-normal'>{timestamp.toString()}</span>
                        }
                    </p>
                }
                {
                    profile?.handle && <span className='block text-xs text-grey-600'>@{profile.handle}</span>
                }
            </div>
            {
                actionEnabled &&
                <button type='button' className='flex p-2 absolute -top-[4px] right-0'>
                    <EllipsisIcon className='w-[20px] h-[20px]' />
                </button>
            }
        </div>
    );
}

const StyledOnlineStatus = styled.span`
    background: var(--success-500);
    border-radius: 6px;
    width: 12px;
    height: 12px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    border: solid 1.5px var(--white);
`

const StyledFigure = styled.figure`
    border-radius: 50%;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: solid .75px var(--grey-900);
        border-radius: inherit;
        opacity: .08;
        z-index: 1;
    }
`

const ProfileImage: React.FC<IUserAvatar> = (props): JSX.Element => {
    if (props.image) {
        return (
            <StyledFigure className='w-[48px] h-[48px]'>
                <Image
                    src={props.image}
                    alt='Profile Picture'
                    width={48}
                    height={48}
                    quality={80}
                    objectFit='cover'
                />
                {
                    props.online &&
                    <StyledOnlineStatus>

                    </StyledOnlineStatus>
                }
            </StyledFigure>
        )
    }

    return <></>
}

export default ProfileWidget;