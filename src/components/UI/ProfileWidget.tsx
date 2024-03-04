import Image from 'next/image';

import IProfileProps from '@/types/UI/IProfile';

import { EllipsisIcon } from './Icons/GSIcon';

const ProfileWidget: React.FC<IProfileProps> = ({ profile }): JSX.Element => {
    return (
        <div className='flex flex-row gap-x-3 pl-2 pr-8'>
            <ProfileImage image={profile.profileAvatar.image} />
            <div className='flex-1 [&>*]:leading-[142.857%]'>
                {
                    profile?.name && <p className='text-xs'>{profile.name}</p>
                }
                {
                    profile?.handle && <span className='block text-xs'>@{profile.handle}</span>
                }
            </div>
            <button type='button' className='flex p-2 absolute -top-[4px] right-0'>
                <EllipsisIcon className='w-[20px] h-[20px]' />
            </button>
        </div>
    );
}

const ProfileImage = ({ image }: { image: any }): JSX.Element => {
    if (image) {
        return (
            <figure>
                <Image
                    src={image}
                    alt='Profile Picture'
                    width={48}
                    height={48}
                    quality={80}
                />
            </figure>
        )
    }

    return <></>
}

export default ProfileWidget;