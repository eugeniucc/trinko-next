import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Award, Users, Palette, Shield } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <MainTag className="gap-20">
      <section className="bg-zinc-900">
        <div className="container mx-auto min-h-screen px-4">
          <div className="pt-40 pb-10 lg:pt-60">
            <CustomBreadcrumb />
          </div>
          <div className="mb-10 flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-white lg:text-6xl">About Trinko Tattoo</h1>
            <p className="max-w-3xl text-xl text-gray-300 lg:text-2xl">
              Moldovas premier tattoo studio dedicated to turning your vision into exceptional body art since 2015.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 pb-20 lg:grid-cols-2">
            <div className="flex flex-col gap-4 text-white">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p>
                Founded in 2015 in the heart of Chisinau, Trinko Tattoo began as a small, passionate project by two artists
                determined to elevate tattoo art in Moldova. What started as a modest studio has grown into a creative sanctuary
                for both artists and clients.
              </p>
              <p>
                Our journey has been defined by continuous learning, artistic growth, and building a community that values
                self-expression through quality body art. Today, were proud to be recognized as one of Chisinaus leading tattoo
                destinations.
              </p>
              <p>
                At Trinko, we believe that every tattoo tells a story, and were dedicated to helping you tell yours through
                stunning, personalized artwork that lasts a lifetime.
              </p>
              <p>
                At Trinko, we believe that every tattoo tells a story, and were dedicated to helping you tell yours through
                stunning, personalized artwork that lasts a lifetime.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-800 p-4 sm:p-6">
              <h2 className="mb-4 text-3xl font-bold text-white">Why Choose Us</h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Award className="mt-1 size-8 text-red-600" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-white">Excellence in Artistry</h3>
                    <p className="text-white">Our artists have won multiple awards at international tattoo conventions.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Shield className="mt-1 size-8 text-red-600" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-white">Excellence in Artistry</h3>
                    <p className="text-white">Our artists have won multiple awards at international tattoo conventions.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Palette className="mt-1 size-8 text-red-600" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-white">Excellence in Artistry</h3>
                    <p className="text-white">Our artists have won multiple awards at international tattoo conventions.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Users className="mt-1 size-8 text-red-600" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-white">Excellence in Artistry</h3>
                    <p className="text-white">Our artists have won multiple awards at international tattoo conventions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="mb-6 text-4xl font-bold lg:text-6xl">Meet Our Artists</h2>
        <div className="mb-20 flex flex-col gap-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-zinc-800">
              <Image
                src={'/images/home/sections/fewWords/home-02.png'}
                alt="Alex Trinko"
                width={400}
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
                src={'/images/home/sections/fewWords/home-02.png'}
                alt="Alex Trinko"
                width={400}
                height={400}
                className="w-full object-cover"
              />
              <div className="flex flex-col gap-4 p-4 text-white">
                <h3 className="text-2xl font-bold text-white">Maria Covali</h3>
                <p className="text-red-600">Color Specialist</p>
                <p className="">Expert in vibrant color work, watercolor techniques and floral designs.</p>
                <p className="text-white">
                  Trained in fine arts with a distinctive style blending traditional Moldovan motifs with contemporary techniques.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-zinc-800">
              <Image
                src={'/images/home/sections/fewWords/home-02.png'}
                alt="Alex Trinko"
                width={400}
                height={400}
                className="w-full object-cover"
              />
              <div className="flex flex-col gap-4 p-4 text-white">
                <h3 className="text-2xl font-bold text-white">Dmitri Rusu</h3>
                <p className="text-red-600">Realism Artist</p>
                <p className="">Specializes in photorealistic portraits and highly detailed black and grey work.</p>
                <p className="text-white">Previously worked in top studios across Europe before joining Trinko in 2019.</p>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold">Our Process</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
              <div className="rounded-lg bg-zinc-800 p-4">
                <div className="text-4xl font-bold text-red-600">01</div>
                <h3 className="text-xl font-bold text-white">Consultation</h3>
                <p>We begin with a thorough discussion about your vision, placement, size, and style preferences.</p>
              </div>
              <div className="rounded-lg bg-zinc-800 p-4">
                <div className="text-4xl font-bold text-red-600">02</div>
                <h3 className="text-xl font-bold text-white">Design</h3>
                <p>Our artists create custom designs based on your input, with revisions until youre completely satisfied.</p>
              </div>
              <div className="rounded-lg bg-zinc-800 p-4">
                <div className="text-4xl font-bold text-red-600">03</div>
                <h3 className="text-xl font-bold text-white">Tattooing</h3>
                <p>We work with precision and care, ensuring your comfort throughout the tattooing session.</p>
              </div>
              <div className="rounded-lg bg-zinc-800 p-4">
                <div className="text-4xl font-bold text-red-600">04</div>
                <h3 className="text-xl font-bold text-white">Aftercare</h3>
                <p>We provide detailed aftercare instructions and support to ensure optimal healing and longevity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="rounded-lg bg-zinc-800 p-4">
          <h2 className="text-3xl font-bold text-white">Visit Our Studio</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-red-600" />
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-white">Location</h3>
                  <p>42 Strada Pushkin, Chisinau, Moldova</p>
                  <p className="mt-1 text-sm text-white">Near the Central Park, second floor</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 text-red-600" />
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-white">Working Hours</h3>
                  <p>Tuesday - Saturday: 11:00 - 19:00</p>
                  <p className="mt-1 text-sm text-white">By appointment only</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-red-600" />
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-white">Phone</h3>
                  <p>+373 22 123 456</p>
                  <p className="mt-1 text-sm text-white">Available during working hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-red-600" />
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-white">Email</h3>
                  <p>info@trinkotattoo.md</p>
                  <p className="mt-1 text-sm text-white">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/trinkotattoo"
              className="inline-flex items-center text-white transition hover:text-red-600"
            >
              <Instagram className="mr-2 h-6 w-6" />
              <span>@trinkotattoo</span>
            </a>
            <a
              href="https://facebook.com/trinkotattoo"
              className="inline-flex items-center text-white transition hover:text-red-600"
            >
              <Facebook className="mr-2 h-6 w-6" />
              <span>Trinko Tattoo</span>
            </a>
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="">
            <div className="rounded-lg bg-zinc-800 p-4">
              <h3 className="text-xl font-bold text-white">How much does a tattoo cost?</h3>
              <p>
                Tattoo pricing depends on size, complexity, placement, and time required. We offer personalized quotes after
                consultation. Minimum booking is 100€.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-800 p-4">
              <h3 className="text-xl font-bold text-white">Is it painful to get tattooed?</h3>
              <p>
                Pain levels vary depending on individual tolerance and tattoo placement. Our artists work to minimize discomfort
                and can provide breaks when needed.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-800 p-4">
              <h3 className="text-xl font-bold text-white">How do I schedule an appointment?</h3>
              <p>
                You can book a consultation through our website, by phone, or by visiting our studio. We require a deposit to
                secure your appointment date.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-800 p-4">
              <h3 className="text-xl font-bold text-white">Do you accept walk-ins?</h3>
              <p>
                We primarily work by appointment to ensure quality and personalized service. However, we occasionally accept
                walk-ins if artists have availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">Ready to Create Your Unique Tattoo?</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Whether you have a clear vision or need inspiration, our team is ready to bring your ideas to life.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-md bg-red-600 px-8 py-3 font-bold text-black transition hover:bg-red-400">
                Book Consultation
              </button>
              <button className="rounded-md border-2 border-red-600 px-8 py-3 font-bold text-red-600 transition hover:bg-zinc-700">
                View Our Gallery
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainTag>
  )
}
