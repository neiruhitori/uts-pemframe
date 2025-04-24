import { Separator } from '../../components/Separator'

const Header = ({ title }) => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="font-semibold text-xl text-black-800 leading-tight text-bold">
                    {title}
                </h1>
                <Separator className="mt-4" />
            </div>
        </header>
    )
}

export default Header
