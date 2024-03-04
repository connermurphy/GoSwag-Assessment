import Tabs from './Tabs';
import Content from './Content';

const MainHeader = (): JSX.Element => {
    return (
        <div className='py-6'>
            {/* tabbed content selector */}
            <Tabs />

            {/* matching tabbed content body */}
            <Content />
        </div>
    )
}

export default MainHeader;