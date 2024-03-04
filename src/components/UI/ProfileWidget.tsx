import Image from 'next/image';

import IProfileProps from '@/types/UI/IProfile';

import { EllipsisIcon } from './Icons/GSIcon';

const ProfileWidget: React.FC<IProfileProps> = ({ profile, actionEnabled }): JSX.Element => {
    return (
        <div className={`flex flex-row gap-x-3 ${actionEnabled ? 'pr-8' : ''}`}>
            <ProfileImage image={profile.profileAvatar.image} />
            <div className={`flex-1 [&>*]:leading-[142.857%] ${!profile?.name && !profile.handle ? 'hidden' : ''}`}>
                {
                    profile?.name && <p className='text-xs'>{profile.name}</p>
                }
                {
                    profile?.handle && <span className='block text-xs'>@{profile.handle}</span>
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

const ProfileImage = ({ image }: { image: any }): JSX.Element => {
    if (image) {
        return (
            <figure className='w-[48px] h-[48px]'>
                <Image
                    src={image}
                    alt='Profile Picture'
                    width={48}
                    height={48}
                    quality={80}
                    objectFit='cover'
                />
            </figure>
        )
    }

    return <></>
}

export default ProfileWidget;