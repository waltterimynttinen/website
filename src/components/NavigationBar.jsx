import { useEffect } from "react";

export const NavigationBar = ({menuOpen, setMenuOpen}) =>{

    useEffect(()=> {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold">Waltteri Mynttinen</a>
                    <div 
                    className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                    onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a 
                        href="#home" 
                        className="text-gray-300 hove:text-white transition colors"> Home 
                        </a>
                        <a 
                        href="#about" 
                        className="text-gray-300 hove:text-white transition colors"> About 
                        </a>
                        <a 
                        href="#hobbies" 
                        className="text-gray-300 hove:text-white transition colors"> Hobbies
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}