'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ChevronRight, ChevronDown } from 'lucide-react'

export function Homepage() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const toggleDropdown = (dropdown: 'services' | 'contact') => {
    if (dropdown === 'services') {
      setServicesOpen(!servicesOpen)
      setContactOpen(false)
    } else {
      setContactOpen(!contactOpen)
      setServicesOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f0e1c7]">
      {/* Top Navigation Frame */}
      <nav className="bg-[#657553] text-[#f0e1c7] py-4 relative">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/ui/Logo.png"
              alt="Dr. Jane Doe Logo"
              width={50}
              height={50}
              className="mr-4"
            />
            <div className="text-xl font-bold">Dr. Jane Doe, PMHNP-BC</div>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-[#d0c1a7] transition duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#d0c1a7] transition duration-300">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center hover:text-[#d0c1a7] transition duration-300"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#657553] rounded-md shadow-lg z-10">
                  <Link href="/services/mood-disorders" className="block px-4 py-2 hover:bg-[#4a5540] transition duration-300">
                    Mood Disorders
                  </Link>
                  <Link href="/services/anxiety" className="block px-4 py-2 hover:bg-[#4a5540] transition duration-300">
                    Anxiety
                  </Link>
                  <Link href="/services/ptsd" className="block px-4 py-2 hover:bg-[#4a5540] transition duration-300">
                    PTSD
                  </Link>
                  <Link href="/services/adhd" className="block px-4 py-2 hover:bg-[#4a5540] transition duration-300">
                    ADD/ADHD
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('contact')}
                className="flex items-center hover:text-[#d0c1a7] transition duration-300"
              >
                Contact <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {contactOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#657553] rounded-md shadow-lg z-10">
                  <Link href="/contact/phone" className="block px-4 py-2 hover:bg-[#4a5540] transition duration-300">
                    Phone
                  </Link>
                  <Link href="/contact/email" className="block px-4 py-2 hover:bg-[#4a5540] transition duration-300">
                    Email
                  </Link>
                  <Link href="/contact/form" className="block px-4 py-2 hover:bg-[#4a5540] transition duration-300">
                    Contact Form
                  </Link>
                </div>
              )}
            </div>
            <Link href="/book-appointment" className="hover:text-[#d0c1a7] transition duration-300">
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#657553] py-16 text-[#f0e1c7]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Compassionate Psychiatric Care</h1>
          <p className="text-xl mb-8">Dr. Jane Doe, PMHNP-BC - Board Certified Psychiatric Mental Health Nurse Practitioner</p>
          <Link
            href="/book-appointment"
            className="bg-[#f0e1c7] hover:bg-[#d0c1a7] text-[#657553] font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* About the Practitioner */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="https://placehold.co/300x400.png?text=Dr.+Jane+Doe+Photo"
              alt="Dr. Jane Doe"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-[#657553]">About Dr. Jane Doe</h2>
            <p className="text-lg mb-6 text-[#333333]">
              As a Licensed Board-Certified Psychiatric Mental Health Nurse Practitioner with eight years of nursing experience, 
              my background encompasses critical care and behavioral health. I have acquired extensive expertise in treating 
              individuals with psychiatric disorders across diverse age groups and cultural demographics.
            </p>
            <Link
              href="/about"
              className="text-[#657553] hover:text-[#4a5540] font-semibold flex items-center"
            >
              Learn More About Dr. Doe
              <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-[#657553]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#f0e1c7]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Mood Disorders', 'Anxiety', 'PTSD', 'ADD/ADHD'].map((service) => (
              <div key={service} className="bg-[#f0e1c7] rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/ui/Logo2.png"
                    alt={service}
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#657553]">{service}</h3>
                <p className="text-[#333333] mb-4">Specialized treatment for {service.toLowerCase()}.</p>
                <Link
                  href={`/services/${service.toLowerCase().replace(' ', '-')}`}
                  className="inline-block bg-[#657553] text-[#f0e1c7] hover:bg-[#4a5540] font-semibold py-2 px-4 rounded transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#657553]">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#657553] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#f0e1c7]">Individualized Treatment Plans</h3>
              <p className="text-[#f0e1c7]">
                We craft personalized treatment plans that recognize the uniqueness of each patients experiences, 
                tailoring interventions to meet their specific needs.
              </p>
            </div>
            <div className="bg-[#657553] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#f0e1c7]">Holistic Approach</h3>
              <p className="text-[#f0e1c7]">
                Our approach considers biological, psychological, social, cultural, and environmental factors 
                contributing to mental health issues.
              </p>
            </div>
            <div className="bg-[#657553] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#f0e1c7]">Inclusive Environment</h3>
              <p className="text-[#f0e1c7]">
                We foster a safe and supportive environment where patients feel comfortable expressing their 
                thoughts and emotions openly.
              </p>
            </div>
            <div className="bg-[#657553] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#f0e1c7]">Collaborative Care</h3>
              <p className="text-[#f0e1c7]">
                We prioritize building a strong therapeutic alliance, working closely with patients to set 
                achievable goals and empowering them to participate in their healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#657553] text-[#f0e1c7] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Begin Your Journey to Mental Wellness</h2>
          <p className="text-xl mb-8">Experience compassionate, personalized psychiatric care.</p>
          <Link
            href="/book-appointment"
            className="bg-[#f0e1c7] text-[#657553] hover:bg-[#d0c1a7] font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Location and Contact Information */}
      <section className="py-16 bg-[#657553]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-[#f0e1c7]">Visit Us</h2>
              <div className="mb-4 flex items-center text-[#f0e1c7]">
                <MapPin className="mr-2" />
                <p>123 Mental Health Plaza, Cityville, State 12345</p>
              </div>
              <div className="mb-4 flex items-center text-[#f0e1c7]">
                <Phone className="mr-2" />
                <p>(123) 456-7890</p>
              </div>
              <div className="mb-4 flex items-center text-[#f0e1c7]">
                <Mail className="mr-2" />
                <p>info@drjanedoe.com</p>
              </div>
              <div className="flex items-center text-[#f0e1c7]">
                <Clock className="mr-2" />
                <p>Mon-Fri: 9am-5pm, Sat: 10am-2pm, Sun: Closed</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Google Map"
                width={600}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#657553] text-[#f0e1c7] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Dr. Jane Doe, PMHNP-BC</h3>
              <p>Psychiatric Mental Health</p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                <li><Link href="/about" className="hover:text-[#d0c1a7]">About</Link></li>
                <li><Link href="/services" className="hover:text-[#d0c1a7]">Services</Link></li>
                <li><Link href="/contact" className="hover:text-[#d0c1a7]">Contact</Link></li>
                <li><Link href="/book-appointment" className="hover:text-[#d0c1a7]">Book Appointment</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p>(123) 456-7890</p>
              <p>info@drjanedoe.com</p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 Dr. Jane Doe, PMHNP-BC. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy-policy" className="hover:text-[#d0c1a7]">Privacy Policy</Link> |{' '}
              <Link href="/terms-of-service" className="hover:text-[#d0c1a7]">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
