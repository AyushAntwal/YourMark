export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 flex justify-center">
      <div className="max-w-4xl w-full space-y-10 mt-5 mb-20">
        {/* Title Card */}
        <section className="px-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gray-600">Yourmark</span>
          </h1>
          <p className="text-md leading-relaxed">
            <strong>YourMark</strong> is where ideas turn into identity. We
            believe what you wear should speak for you — not just follow trends.
          </p>
          <p>
            With YourMark, you can customize premium T-shirts using your own
            logo, artwork, or design. Every detail is in your control, from
            placement to scale, so the final piece feels truly personal. We
            focus on high-quality fabrics, sharp prints, and a smooth
            customization experience that lets creativity come first. Whether
            you’re building a brand, expressing yourself, or creating something
            meaningful, YourMark gives you the freedom to make it yours.
          </p>

          <div className="my-4 divider"></div>
          {/* Story */}
          <p className="section-text">
            Yourmark was born from a simple idea: customization should be easy,
            beautiful, and personal. We wanted to remove complexity and give
            people full creative control without needing design skills.
          </p>
          <h2 className="section-title font-semibold">
            YourMark — Make it Yours.
          </h2>
        </section>

        {/* What We Do */}
        <section className="px-2">
          <h2 className="section-title font-semibold">What We Do</h2>
          <ul className="section-text space-y-2">
            <li>• Visual, real-time customization tools</li>
            <li>• Premium materials & long-lasting prints</li>
            <li>• Built for individuals, creators, and brands</li>
          </ul>
        </section>

        {/* Promise */}
        <section className="px-2">
          <h2 className="section-title font-semibold">Our Promise</h2>
          <ul className="section-text space-y-2">
            <li>• Made uniquely for you</li>
            <li>• Quality-first craftsmanship</li>
            <li>• Smooth and intuitive experience</li>
          </ul>
        </section>

        {/* Closing */}
        <section className="px-2 border border-yellow-300/30">
          <p className="text-lg font-medium">
            Yourmark isn’t just a product —
            <span className="text-gray-800">
              {" "}
              it’s your identity, your creativity, your mark.
            </span>
          </p>
        </section>

        {/* About */}
        <section className="px-2">
          <h1 className="text-xl md:text-2xl font-bold mb-3">
            About <span className="text-gray-600">Me</span>
          </h1>

          <p className="section-text">
            Hi, I’m <strong>Ayush</strong> — a{" "}
            <strong>Full-Stack Web Developer</strong> specializing in crafting
            refined, high-performance web experiences where design precision
            meets robust engineering. Work extensively with{" "}
            <strong>React</strong>, <strong>Next.js</strong>, and{" "}
            <strong>TypeScript</strong>, building interfaces that are not only
            visually elegant but also scalable, maintainable, and optimized for
            performance.
          </p>

          <div className="my-3 w-full"></div>

          <p className="section-text ">
            This project explores the intersection of creativity and technology,
            featuring immersive interactions and carefully composed 3D visuals
            powered by <strong>Three.js</strong>, designed to elevate user
            engagement without compromising usability.
          </p>
        </section>

        {/* Contact */}
        <section className="px-2 mt-6">
          <h2 className="text-lg font-semibold mb-3">Contact</h2>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-600">
                mail
              </span>
              <a
                href="mailto:ayush@example.com"
                className="hover:underline text-blue-600"
              >
                ayush@example.com
              </a>
            </li>

            <li className="flex items-center gap-2">
              {/* <LinkedIn fontSize="small" className="text-gray-600" /> */}
              <a
                href="https://www.linkedin.com/in/ayush"
                target="_blank"
                className="hover:underline text-blue-600"
              >
                linkedin.com/in/ayush
              </a>
            </li>

            <li className="flex items-center gap-2">
              {/* <GitHub fontSize="small" className="text-gray-600" /> */}
              <a
                href="https://github.com/ayush"
                target="_blank"
                className="hover:underline text-blue-600"
              >
                github.com/ayush
              </a>
            </li>
          </ul>
        </section>

        <div className="my-5 h-3"></div>
      </div>
    </main>
  );
}
