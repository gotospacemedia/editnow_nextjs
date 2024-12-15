import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[550px] w-full overflow-hidden bg-gradient-to-br from-black via-[#001a1a] to-black px-4 py-16">
      {/* Decorative background curve */}
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-200 600 Q 400 -100 1600 400"
            stroke="rgba(124, 255, 211, 0.1)"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        {/* Revenue badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-sm text-white">
            For brands generating over €50k/month in revenue.
          </span>
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          Elevate your content <br /> with{" "}
          <span className="text-[#7CFFD3]">Edit Now</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-12 text-lg text-gray-300">
          We are Edit Now, a video editing service provider dedicated to
          transforming your creative visions into stunning reality.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="bg-[#7CFFD3] px-6 py-3 font-medium text-black transition-colors hover:bg-[#63E6BA]">
            Schedule a demo call
          </Button>
          <Button className="bg-white/10 px-6 py-3 font-medium text-white hover:text-[#7CFFD3] transition-colors hover:bg-white/20 backdrop-blur-sm">
            Content Calculator
          </Button>
        </div>
      </div>
    </section>
  );
}
