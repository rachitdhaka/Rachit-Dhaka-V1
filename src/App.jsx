import "./App.css";
import ProjectCard from "./component/ProjectCard";
import ethlinkImg from "./assets/Images/image.png";
import orbitus from "./assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";

import { createBrowserRouter , RouterProvider } from "react-router";
import FooterV1 from "./component/FooterV1";
import V0 from "./component/V0";

const router = createBrowserRouter(
  [
    {
      path:"/V0",
      element:
        <V0/>

    }
  ]
)
const projects = [
  {
    id: 1,
    title: "Eth Link",
    description: "Decentralised Job Searching Platform",
    image: ethlinkImg,
    url: "https://eth-link-vcpn.vercel.app/",
  },
  {
    id: 2,
    title: "OrbitUs",
    description: "Decentralised Drop Servicing Platform.",
    image: orbitus,
    url: "https://devfolio.co/projects/orbitus-d287",
  },
];

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      <div className="max-w-[40%] mx-auto  px-6 py-8">
        <header className="flex justify-between items-center mb-20">
          <div>
            <a
              href="rachitdhaka.vercel.app"
              className="text-[12px] font-medium"
            >
              rd
            </a>
          </div>
          <nav>
            <ul className="flex space-x-6 text-[12px]">
              <li>
                <a href="https://github.com/rachitdhaka" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rachitdhaka/" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://codolio.com/profile/rachitdhaka" className="hover:underline">
                  Coding
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="mb-16">
            <h1 className="font-maga text-4xl font-bold mb-2">
              Hello, I'm Rachit.
            </h1>
            <p className="text-xl text-gray-500 mb-8">
              Developer - Dsa - Designer
            </p>

            <p className=" font-martin  text-gray-700 mb-3 leading-relaxed">
              3rd Year CSE Undergrad at SRM University | Web Developer | Problem
              Solver | Core Member - GeeksforGeeks SRM RMP | Building Vartalaap
              - A Podcast Platform for Voices That Matter
            </p>
          </section>

          <hr className="border-gray-200 my-1" />
        </main>
      </div>

      <section className="pt-12 max-w-[60%] mx-auto  mb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold  mb-2 ml-15">Personal Projects</h2>
          <p className=" mb-10 ml-15">
            Below is a selection of recent projects that I've worked on.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </section>

      <FooterV1/>
    </div>
  );
}

export default App;
