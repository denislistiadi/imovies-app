import Link from "next/link"

const Navbar = () => {
  return (
    <header className="bg-gray-700 ">
        <nav className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
            <Link href="/">
                <a className="text-base md:text-2xl">iMovies</a>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar