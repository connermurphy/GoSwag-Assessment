import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

import { ButtonStyle, IButtonProps, ILinkProps } from '@/types/UI/IButton';

//todo button type (blue/white)

const StyledButton = styled.button<{ $buttonStyle?: ButtonStyle }>`

    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    background: ${props => props.$buttonStyle == ButtonStyle.primary ? 'var(--blue-900)' : 'var(--white)'};
    color: ${props => props.$buttonStyle == ButtonStyle.primary ? 'var(--white)' : 'var(--grey-900)'};

    border: ${props => props.$buttonStyle == ButtonStyle.primary ? 'var(--blue-900)' : 'var(--white)'};

    padding: .625rem 1.125rem;
    border-radius: 8px;
    cursor: pointer;

    transition: all .175s ease-in-out;

    &.disabled {
        background: ${props => props.$buttonStyle == ButtonStyle.primary ? 'var(--blue-50)' : 'var(--grey-50)'};
        color: ${props => props.$buttonStyle == ButtonStyle.primary ? 'var(--grey-200)' : 'var(--grey-600)'};

        pointer-events: none;
    }

`;


const GSButton: React.FC<IButtonProps> = ({ children, buttonStyle, ...rest }): JSX.Element => {
    //return normal button
    return (
        <StyledButton {...rest} $buttonStyle={buttonStyle}>
            {children}
        </StyledButton>
    )

}

const GSLink: React.FC<ILinkProps> = ({ children, buttonStyle, ...rest }): JSX.Element => {

    return (
        <StyledButton {...rest} as={Link} $buttonStyle={buttonStyle}>
            {children}
        </StyledButton>
    )

}

export {
    GSButton,
    GSLink
}