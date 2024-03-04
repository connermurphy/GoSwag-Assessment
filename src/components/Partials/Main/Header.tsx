'use client';

import Tabs from './Tabs';

import PostEditor from '@/components/UI/PostEditor';
import styled from 'styled-components';

const StyledMainHeader = styled.div`
    border-bottom: solid 1px var(--grey-200);
`

const MainHeader = (): JSX.Element => {
    return (
        <StyledMainHeader className='flex flex-col gap-y-6 p-6'>
            {/* tabbed content selector */}
            <Tabs />
            
            {/* matching tabbed content body */}
            <PostEditor />
        </StyledMainHeader>
    )
}

export default MainHeader;