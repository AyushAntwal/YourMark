export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 flex justify-center">
      <div className="max-w-4xl w-full space-y-10 mt-5 mb-20">
        {/* Title Card */}
        <section className="px-2">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold border-b border-gray-700 inline">
              About <strong className="text-gray-600">Yourmark</strong>
            </h1>
          </div>

          <p>
            we believe clothing should speak your story. We create
            premium custom T-shirts that let you design, personalize, and wear
            your identity with confidence.
          </p>

          <p>
            Whether it’s your brand logo, artwork, message, or a personal
            memory, YourMark gives you complete freedom to customize your
            T-shirt exactly the way you want. From fabric quality to print
            precision, every detail is crafted to deliver comfort, durability,
            and style.
          </p>

          <p>
            Our easy-to-use customization tools help you visualize your design
            in real time, so what you imagine is exactly what you receive. No
            compromises. No generic designs. Just your mark, your way.
          </p>

          <h2>
            Because fashion isn’t about fitting in — it’s about{" "}
            <strong>Make it Yours</strong>.
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
        <section className="px-2">
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
          <ul className="space-x-3 flex text-sm">
            <li className="flex items-center gap-2">
              <a
                href="mailto:ayush@example.com"
                className="hover:underline text-blue-600"
                target="_blank"
              >
                <img
                  src="/icons/mail.png"
                  style={{ objectFit: "fill", height: "30px" }}
                  loading="lazy"
                />
              </a>
            </li>

            <li className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/ayush-antiwal08/"
                target="_blank"
                className="hover:underline text-blue-600"
              >
                <img
                  src="/icons/linkedin.png"
                  style={{ objectFit: "fill", height: "30px" }}
                  loading="lazy"
                />
              </a>
            </li>

            <li className="flex items-center gap-2">
              <a
                href="https://github.com/AyushAntwal"
                target="_blank"
                className="hover:underline text-blue-600"
              >
                <img
                  src="/icons/github.png"
                  style={{ objectFit: "fill", height: "30px" }}
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </section>

        <div className="my-5 h-3"></div>
      </div>
    </main>
  );
}
