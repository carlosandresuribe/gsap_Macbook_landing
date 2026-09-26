import { navLinks } from "../Constants/Index"

const Navbar = () => {
    return (
        <header>
            <nav className="">
                <img src="/logo.svg" alt="Apple logo" />
                <ul className="">
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label} className="">{label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex-center gap-3">
                    <button className="">
                        <img src="/search.svg" alt="Search" className="" />
                    </button>
                    <button className="">
                        <img src="/cart.svg" alt="Cart" className="" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar