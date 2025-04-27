import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { Gem, Palette, SprayCan, Ear, PenTool, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Tattoo',
    description:
      'High-quality custom tattoo art from our skilled artists. We create unique designs tailored to your personality.',
    icon: <PenTool className="h-8 w-8 text-zinc-100" />,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 2,
    title: 'Piercing',
    description: 'Professional body piercing services with sterile equipment and premium jewelry options.',
    icon: <Ear className="h-8 w-8 text-zinc-100" />,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 3,
    title: 'Tattoo Filling',
    description: 'Expert tattoo filling and recoloring services to refresh and revitalize your existing tattoos.',
    icon: <SprayCan className="h-8 w-8 text-zinc-100" />,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 4,
    title: 'Tattoo Design',
    description: 'Custom tattoo design services to bring your ideas to life before the inking process begins.',
    icon: <Palette className="h-8 w-8 text-zinc-100" />,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 5,
    title: 'Permanent Makeup',
    description: 'Semi-permanent cosmetic procedures including eyebrows, eyeliner, and lip blush.',
    icon: <Gem className="h-8 w-8 text-zinc-100" />,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 6,
    title: 'Tattoo Correction',
    description: 'Professional tattoo correction and cover-up services to fix or improve existing tattoos.',
    icon: <CheckCircle className="h-8 w-8 text-zinc-100" />,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  }
]

export const AllServices = () => {
  return (
    <section className="bg-zinc-900">
      <div className="container mx-auto min-h-screen px-4 py-35 lg:py-60">
        <div className="mb-10">
          <CustomBreadcrumb />
        </div>
        <div className="mb-16">
          <h1 className="mb-4 text-4xl font-bold text-zinc-100 md:text-5xl">Our Services</h1>
          <p className="text-lg text-zinc-400">
            Professional tattoo and piercing services in Chisinau. We offer a wide range of body art solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <Image src={service.image} alt={service.title} width={500} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 rounded-full bg-red-600 p-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-zinc-100">{service.title}</h3>
                </div>
                <p className="text-zinc-400">{service.description}</p>
                <Button className="bbg-white mt-6 rounded-md px-6 py-2 transition-colors">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
