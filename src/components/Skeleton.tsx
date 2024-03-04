import React, { ReactNode } from 'react';
import Nav from './Layout/Nav';
import Aside from './Layout/Aside';

const Skeleton = ({
    children
}: Readonly<{ children: ReactNode }>): JSX.Element => {
    return (
        <div className='flex flex-row flex-wrap max-h-screen'>
            {/* nav */}
            <Nav />

            {/* main */}
            {children}

            {/* aside */}
            <Aside />
        </div>
    );
}

export default Skeleton;