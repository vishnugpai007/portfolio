import { profileData } from './data/profile';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text bg-grid-texture flex flex-col font-body antialiased">
      <Header />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-accent text-xs font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Environment Setup Complete
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-text mb-4">
          {profileData.name}
        </h1>
        <p className="text-secondary-text max-w-xl text-lg mb-8">
          {profileData.title}
        </p>
        <div className="p-4 border border-border rounded-lg bg-card/60 backdrop-blur-sm max-w-md text-sm text-secondary-text font-mono">
          Ready for section implementation. Design tokens, typography, and structure loaded.
        </div>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
