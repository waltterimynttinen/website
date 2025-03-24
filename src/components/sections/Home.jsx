export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent leading-right">
                    Hello, my name is Waltteri!
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Welcome to my website. Check out my interests and proficiencies below!
                
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#about" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(60,130,250, 0.5)]">
                        About Me
                    </a>
                    <a href="#hobbies" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(60,130,250, 0.5)]">
                        My Hobbies
                    </a>
                </div>
            </div>
        </section>
    );
}