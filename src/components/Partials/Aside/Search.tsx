'use client';

import { SearchIcon } from '@/components/UI/Icons/GSIcon';
import styled from 'styled-components';

const StyledSearch = styled.div`

    input {
        padding: .625rem .875rem .625rem calc(.875rem + 20px + .5rem);
        display: block;
        width: 100%;
        outline: none;
        border-radius: 8px;
        border: 1px solid var(--grey-300);
        background: var(--white);
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

        &:focus {
            & + svg {
                color: var(--grey-900);
            }
        }
    }

    svg {
        position: absolute;
        top: 50%;
        left: .875rem;
        transform: translateY(-50%);
        color: var(--grey-500);
        width: 20px;
        height: 20px;
        z-index: 2;
        transition: all .175s ease-in-out;
    }
`;

const Search = (): JSX.Element => {
    return (
        <div className='px-6'>
            <StyledSearch>
                <input type='text' placeholder='Search' />
                <SearchIcon />
            </StyledSearch>
        </div>
    )
}

export default Search;