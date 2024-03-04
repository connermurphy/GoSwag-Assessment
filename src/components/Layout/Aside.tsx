import Search from "../Partials/Aside/Search";
import GradientCard from "../UI/GradientCard";

const Aside = (): JSX.Element => {
    return (
        <aside className="w-[25%] pt-6 pb-7 flex flex-col gap-y-12">
            <Search />

            {/* upgrade card */}
            <div className='px-6'>
                <GradientCard title='Upgrade to Premium'
                    description={`<p>Unlock extra features and remove ads!</p>`} />
            </div>

            {/* top posters */}
            <div>
                posters
            </div>
        </aside>
    );
}

export default Aside;