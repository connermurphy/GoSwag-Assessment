'use client';


//@ts-ignore
import { Markup } from 'react-render-markup';
import styled from 'styled-components';

const StyledRichText = styled.div`

    > * {
        font-size: .875rem;
        line-height: 142.857%;
        margin: 1.5em 0;
        color: var(--grey-900);
        font-weight: normal;

        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

`

const RichText = (props: { content?: string }): JSX.Element => {

    if (props.content != null) {
        return (
            <StyledRichText>
                <Markup markup={props.content} />
            </StyledRichText>
        );
    }

    return <></>
}

export default RichText;