import Image from 'next/image'
export const Artists = () => {
  return (
    <section className="container mx-auto my-20 px-4">
      <h2 className="mb-6 text-4xl font-bold lg:text-6xl">Meet Our Artists</h2>
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-zinc-800">
            <Image
              src={'/images/home/sections/fewWords/1.webp'}
              alt="Alex Trinko"
              width={400}
              loading="lazy"
              height={400}
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-4 p-4 text-white">
              <h3 className="text-2xl font-bold text-white">Alex Trinko</h3>
              <p className="text-red-600">Founder & Lead Artist</p>
              <p className="text-white">
                Specializing in neo-traditional and blackwork designs with over 10 years of experience.
              </p>
              <p className="text-white">
                Featured in International Tattoo Magazine and winner of Best Black & Grey at Chisinau Ink 2023.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-zinc-800">
            <Image
              src={'/images/home/sections/fewWords/1.webp'}
              alt="Alex Trinko"
              width={400}
              loading="lazy"
              height={400}
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-4 p-4 text-white">
              <h3 className="text-2xl font-bold text-white">Maria Covali</h3>
              <p className="text-red-600">Color Specialist</p>
              <p>Expert in vibrant color work, watercolor techniques and floral designs.</p>
              <p className="text-white">
                Trained in fine arts with a distinctive style blending traditional Moldovan motifs with contemporary techniques.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-zinc-800">
            <Image
              src={'/images/home/sections/fewWords/1.webp'}
              alt="Alex Trinko"
              width={400}
              height={400}
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-4 p-4 text-white">
              <h3 className="text-2xl font-bold text-white">Dmitri Rusu</h3>
              <p className="text-red-600">Realism Artist</p>
              <p>Specializes in photorealistic portraits and highly detailed black and grey work.</p>
              <p className="text-white">Previously worked in top studios across Europe before joining Trinko in 2019.</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-4xl font-bold lg:text-6xl">Our Process</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-4">
              <div className="text-4xl font-bold text-red-600">01</div>
              <h3 className="text-xl font-bold text-white">Consultation</h3>
              <p className="text-white">
                We begin with a thorough discussion about your vision, placement, size, and style preferences.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-4">
              <div className="text-4xl font-bold text-red-600">02</div>
              <h3 className="text-xl font-bold text-white">Design</h3>
              <p className="text-white">
                Our artists create custom designs based on your input, with revisions until youre completely satisfied.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-4">
              <div className="text-4xl font-bold text-red-600">03</div>
              <h3 className="text-xl font-bold text-white">Tattooing</h3>
              <p className="text-white">
                We work with precision and care, ensuring your comfort throughout the tattooing session.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-4">
              <div className="text-4xl font-bold text-red-600">04</div>
              <h3 className="text-xl font-bold text-white">Aftercare</h3>
              <p className="text-white">
                We provide detailed aftercare instructions and support to ensure optimal healing and longevity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
