'use client';

import styled from "styled-components";
import MainHeader from "../Partials/Main/Header";

const StyledMain = styled.div`
    border-right: solid 1px var(--grey-200);
`

const Main = (): JSX.Element => {
    return (
        <StyledMain className="flex-1">
            {/* header */}
            <MainHeader />

            {/* scrollable content (posts) */}

        </StyledMain>
    );
}

export default Main;