import './App.css'


function App() {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <div className="max-w-[40%] mx-auto  px-6 py-8">
        <header className="flex justify-between items-center mb-20">
          <div>
            <a href="rachitdhaka.vercel.app" className="text-[12px] font-medium">rd</a>
          </div>
          <nav>
            <ul className="flex space-x-6 text-[12px]">
              <li><a href="#" className="hover:underline">GitHub</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Coding</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="mb-16">
            <h1 className="text-4xl font-bold mb-2">Hello, I'm Rachit.</h1>
            <p className="text-xl text-gray-500 mb-8">Developer - Dsa - Designer</p>
            
            <p className="text-gray-700 mb-3 leading-relaxed">
            3rd Year CSE Undergrad at SRM University | Web Developer | Problem Solver | Core Member - GeeksforGeeks SRM RMP | Building Vartalaap - A Podcast Platform for Voices That Matter
            </p>
      
          </section>
        
          <hr className="border-gray-200 my-12" />
          
          <section>
            <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
            <p className="text-gray-700 mb-8">Below is a selection of recent projects that I've worked on.</p>
            
            {/* Project cards would go here */}


            <ProjectCard/>


          </section>
        </main>
      </div>
    </div>
  )
}

export default App