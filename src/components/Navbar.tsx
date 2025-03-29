export default function Navbar () {
    return (
        <>
        <nav className="w-full">
            <div className="max-w-6xl flex justify-between mx-auto h-16 items-center mt-4">
                <h1 className="text-5xl font-bold">Tech<span className="text-cyan-700">Nova</span></h1>
                <ul className="flex space-x-8 items-center">
                    <li><a className="text-2xl hover:text-cyan-700 " href="#">Home</a></li>
                    <li><a className="text-2xl hover:text-cyan-700"  href="#">About</a></li>
                    <li><a className="text-2xl hover:text-cyan-700" href="#">Blog</a></li>
                    <li><a className="text-2xl hover:text-cyan-700" href="#">Contact</a></li>

                </ul>

            </div>
            
        </nav>
        </>
    );

}