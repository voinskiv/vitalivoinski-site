export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-2xl w-full text-left">
        <h1 className="text-4xl font-bold text-left">Vitali Voinski</h1>
        <p className="mt-2 text-lg text-gray-700">
          Helping businesses unlock the power of AI to automate workflows and grow smarter.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-600">
            I help businesses reduce manual work, automate workflows, and achieve scalable growth using AI-driven solutions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Connect with me on <a href="https://www.linkedin.com/in/voinskiv" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> or <a href="https://x.com/voinskiv" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">X (Twitter)</a>.
          </p>
        </section>

        <footer className="mt-12 text-sm text-gray-500">
          © 2025 Vitali Voinski. All rights reserved.
        </footer>
      </div>  
    </main>
  );
}
