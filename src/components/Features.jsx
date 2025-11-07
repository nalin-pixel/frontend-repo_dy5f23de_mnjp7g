import { motion } from 'framer-motion';
import { Link, FileText, Ticket } from 'lucide-react';

const features = [
  {
    icon: Link,
    title: 'Rekalink',
    desc: 'Create and customize your personal bio link.',
  },
  {
    icon: FileText,
    title: 'Rekaform',
    desc: 'Collect data easily with smart forms.',
  },
  {
    icon: Ticket,
    title: 'Rekaevent',
    desc: 'Manage events, sell tickets, and track attendees.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Everything you need to manage your digital presence.
          </h2>
          <p className="mt-4 text-gray-600">
            Three powerful tools, one unified platform.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-teal-100 bg-white/80 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-[#1BBFBA]/10 text-[#1BBFBA] grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
              <a href="#get-started" className="mt-4 inline-block text-[#1BBFBA] font-medium hover:underline">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
