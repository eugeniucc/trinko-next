import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'

export default function Contacts() {
  return (
    <MainTag className="bg-zinc-900">
      <div className="container mx-auto min-h-screen px-4">
        <div className="py-35 lg:py-60">
          <CustomBreadcrumb />
        </div>

        <div className="mt-8 mb-16">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Our Tattoo Studio</h1>
          <p className="max-w-3xl text-lg text-gray-300">
            Have questions about our services or ready to book your appointment? Get in touch with our team of professional tattoo
            artists in Chisinau. We&#39;re here to help bring your tattoo ideas to life.
          </p>
        </div>

        <div className="gap- mb-16">
          <p className="text-3xl font-bold text-white">Contact about Package</p>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 border-b border-zinc-700 pb-4 text-3xl font-bold">Find Our Studio</h2>
          <p className="text-3xl font-bold text-white">MapBox</p>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 border-b border-zinc-700 pb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-3xl font-bold text-white">Faq 10 questions</p>
        </div>

        <div className="mb-16 rounded-xl bg-gradient-to-r from-indigo-900 to-purple-900 p-8 md:p-12">
          <div className="items-center justify-between md:flex">
            <div className="mb-6 md:mb-0 md:pr-8">
              <h2 className="mb-4 text-3xl font-bold">Ready to Get Inked?</h2>
              <p className="text-lg text-gray-200">
                Contact us today to schedule your consultation or book your appointment. Our professional artists are excited to
                bring your tattoo ideas to life.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="rounded-lg bg-white px-8 py-3 font-bold text-indigo-900 transition duration-300 hover:bg-gray-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainTag>
  )
}
