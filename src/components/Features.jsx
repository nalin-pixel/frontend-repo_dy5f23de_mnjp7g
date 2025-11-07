import { motion } from 'framer-motion';
import { Link, FileText, Ticket } from 'lucide-react';

const features = [
  {
    icon: Link,
    title: 'Rekalink',
    desc: 'Buat dan kustomisasi bio link kamu dengan mudah.',
  },
  {
    icon: FileText,
    title: 'Rekaform',
    desc: 'Kumpulkan data dengan formulir pintar yang bisa diandalkan.',
  },
  {
    icon: Ticket,
    title: 'Rekaevent',
    desc: 'Kelola event, jual tiket, dan pantau peserta.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Semua yang kamu butuhkan, dalam satu platform.
          </h2>
          <p className="mt-4 text-gray-600">
            Tiga produk kuat yang terintegrasi rapi.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-[#1aaad6]/20 bg-white/80 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-[#1aaad6]/10 text-[#1aaad6] grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
              <a href="#get-started" className="mt-4 inline-block text-[#1aaad6] font-medium hover:underline">
                Pelajari lebih lanjut →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
