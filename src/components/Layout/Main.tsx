'use client';

import styled from "styled-components";

import MainHeader from "../Partials/Main/Header";

import MainContent from "../Partials/Main/Content";

const StyledMain = styled.main`
    border-right: solid 1px var(--grey-200);
`

const Main = (): JSX.Element => {
    return (
        <StyledMain className="flex-1 h-screen overflow-auto">
            {/* header */}
            <MainHeader />

            {/* scrollable content (posts) */}
            <MainContent />

        </StyledMain>
    );
}

export default Main;