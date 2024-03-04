'use client';

import ProfileWidget from "@/components/UI/ProfileWidget";
import styled from "styled-components";

import ProfileAvatar from '/public/avatar.png';
import RTEImage from '/public/rte-image.png';

import IContentPostProps from "@/types/UI/IContentPost";

import RichText from "@/components/UI/RichText";
import Image, { StaticImageData } from "next/image";

const ContentDiv = styled.div`

`;

const Content = (): JSX.Element => {

    return (
        <ContentDiv className='px-6 py-8'>
            <ContentPost
                profile={{
                    profileAvatar: {
                        image: ProfileAvatar,
                        online: true
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker'
                }}
                timestamp={'Just Now'}
                content={`
                    <p>"If you want to play at an excellent level - if you want to do something excellent, you have to be excellent all the time.</p>    
                    <p>That's how you build habits.</p>
                    <p>When excellence becomes a habit, then that's just who you are." -Kobe Bryant</p>
                `}
            />

            <ContentPost
                profile={{
                    profileAvatar: {
                        image: ProfileAvatar,
                        online: true
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker'
                }}
                timestamp={'2 mins ago'}
                content={`
                    <p>27 years ago today: Kobe Bryant makes his Lakers and NBA debut (1996)</p>
                `}
                media={RTEImage}
            />

            <ContentPost
                profile={{
                    profileAvatar: {
                        image: ProfileAvatar,
                        online: true
                    },
                    name: 'Phoenix Baker',
                    handle: 'phoenix.baker'
                }}
                timestamp={'Just Now'}
                content={`
                    <p>"If you want to play at an excellent level - if you want to do something excellent, you have to be excellent all the time.</p>    
                    <p>That's how you build habits.</p>
                    <p>When excellence becomes a habit, then that's just who you are." -Kobe Bryant</p>
                `}
            />

        </ContentDiv>
    )

}

const StyledContentPost = styled.div`
    &:first-of-type {
        padding-top: 0 !important;
        border-top: none;
    }
`

const ContentPost: React.FC<IContentPostProps> = (props): JSX.Element => {

    return (
        <StyledContentPost className='border-t border-t-grey-200 py-4'>
            <ProfileWidget
                {...props}
            />
            <MessageBubble {...props} />
        </StyledContentPost>
    )

}

const StyledMessageBubble = styled.div`
    border-radius: 0 8px 8px 8px;
    margin-left: calc(48px + .75rem);
`

const MessageBubble = (props: { content?: string, media?: StaticImageData | string }): JSX.Element => {
    return (
        <StyledMessageBubble className="mt-3">
            <div className='border border-grey-200 bg-white p-3'>
                <RichText
                    content={props.content}
                />
            </div>
            {
                props.media &&
                <div className='mt-3'>
                    <figure className="w-auto max-w-full">
                        <Image
                            src={props.media}
                            alt='Alt Text'
                            quality={90}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="max-w-full h-auto max-h-screen"
                        />
                    </figure>
                </div>
            }
        </StyledMessageBubble>
    )
}

export default Content;