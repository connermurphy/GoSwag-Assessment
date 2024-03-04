'use client';

import styled from 'styled-components';
import { EllipsisIcon, ImageIcon, LocationIcon, SmileyIcon, VideoRecordIcon } from './Icons/GSIcon';
import ProfileWidget from './ProfileWidget';

import ProfileAvatar from '/public/avatar.png';

import { GSButton as Button } from './Button';
import { ButtonStyle } from '@/types/UI/IButton';
import { useEffect, useState } from 'react';

const PostEditor = (): JSX.Element => {

    // real world example, would use react hook forms
    // state for demo will suffice

    const [ inputValue, setInputValue ] = useState<string|null>(null);

    return (
        <div className='flex flex-col gap-y-3'>
            <div className='flex flex-row gap-x-3 items-center'>
                <ProfileWidget
                    profile={{
                        profileAvatar: {
                            image: ProfileAvatar
                        }
                    }}
                />
                <TextBox updateValue={(e) => setInputValue(e)} />
            </div>
            <TextActions disabled={!inputValue?.length}  />
        </div>
    );
}

const StyleTextarea = styled.textarea`
    width: 100%;
    appearance: none;
    outline: none;
    resize: none;
    line-height: 150%;
    height: auto;

    &::placeholder {
        color: var(--grey-500);
    }
`;

const TextBox = (props: { updateValue: React.Dispatch<React.SetStateAction<string|null>> }): JSX.Element => {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        props.updateValue(e.target.value);
    }

    return (
        <StyleTextarea placeholder="What's on your mind?" className='text-lg' rows={1} onChange={handleChange}>
        </StyleTextarea>
    )
}

const StyledButton = styled.button`
    padding: .5rem;

    svg {
        color: var(--grey-500);
        transition: all .175s ease-in-out;

        &:hover {
            color: var(--grey-900);
        }
    }
`;

const TextActions = (props: { disabled?: boolean }): JSX.Element => { 
    return (
        <div className='flex flex-row gap-x-6'>
            <div className='w-[48px] -ml-3 pr-3'>
                {/* buffer */}
            </div>
            <div className='flex flex-row gap-x-[.125rem] -ml-[.5rem] flex-1'>
                <StyledButton type='button' aria-label='...'>
                    <ImageIcon />
                </StyledButton>
                <StyledButton type='button' aria-label='...'>
                    <VideoRecordIcon />
                </StyledButton>
                <StyledButton type='button' aria-label='...'>
                    <SmileyIcon />
                </StyledButton>
                <StyledButton type='button' aria-label='...'>
                    <LocationIcon />
                </StyledButton>
                <StyledButton type='button' aria-label='...'>
                    <EllipsisIcon />
                </StyledButton>
            </div>
            <div>
                <Button buttonStyle={ButtonStyle.primary} className={`${props.disabled ? 'disabled' : ''}`}>
                    Post
                </Button>
            </div>
        </div>
    )
}

export default PostEditor;