import React from "react";
import ProjectSection from "./components/ProjectSection";
import VideoSection from "./components/VideoSection";
import PresentationSection from "./components/PresentationSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Meu Portfólio</h1>
        <nav>
          <ul>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#videos">Vídeos</a></li>
            <li><a href="#apresentacoes">Apresentações</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <ProjectSection />
        <VideoSection />
        <PresentationSection />
      </main>

      <footer>
        <p>&copy; 2024 Meu Nome</p>
      </footer>
    </div>
  );
}

export default App;
