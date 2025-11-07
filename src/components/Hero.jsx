import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E6F6FC] via-white to-white" />
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[#1aaad6]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Bangun Link, Form, dan Event — dalam satu platform.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-lg sm:text-xl text-gray-600"
        >
          Rekatap membantu kreator dan bisnis terhubung, mengumpulkan data, dan merayakan momen — lewat satu dashboard sederhana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#get-started"
            className="inline-flex items-center rounded-md bg-[#1aaad6] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#178eb2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1aaad6]"
          >
            Mulai Gratis
          </a>
          <a
            href="#demo"
            className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-sm sm:text-base font-semibold text-gray-700 bg-white hover:bg-gray-50"
          >
            Lihat Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12"
        >
          <div className="mx-auto max-w-5xl rounded-xl border border-gray-200 bg-white p-3 shadow-xl shadow-gray-200/40">
            <div className="aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-white to-gray-50 grid place-items-center">
              <div className="w-full h-full rounded-md border border-dashed border-gray-300 flex items-center justify-center">
                <p className="text-gray-500">Dashboard preview coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
