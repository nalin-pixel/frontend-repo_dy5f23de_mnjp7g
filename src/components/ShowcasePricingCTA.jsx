import { motion } from 'framer-motion';

function Showcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Seamless integration, one simple dashboard</h3>
          <p className="mt-4 text-gray-600">
            Build, launch, and manage your links, forms, and events without switching tools. Everything stays in sync and looks great out of the box.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
            <li>Unified analytics across products</li>
            <li>Drag-and-drop customization</li>
            <li>Real-time updates</li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-200/50"
        >
          <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-gray-50 to-white grid place-items-center">
            <div className="w-full h-full rounded-md border border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-gray-500">Dashboard preview</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: 'Free', price: '$0', features: ['Basic Rekalink', '1 Form', '1 Event Draft'] },
    { name: 'Pro', price: '$12/mo', features: ['Advanced Links', 'Unlimited Forms', 'Sell Tickets'] },
    { name: 'Premium', price: '$29/mo', features: ['Teams', 'Custom Domains', 'Priority Support'] },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Simple, transparent pricing</h3>
          <a href="#pricing-page" className="text-[#1BBFBA] font-medium hover:underline">See full pricing →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-teal-200 bg-white p-6 shadow-sm"
            >
              <h4 className="text-lg font-semibold text-gray-900">{p.name}</h4>
              <p className="mt-2 text-3xl font-bold text-gray-900">{p.price}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1BBFBA]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="mt-6 inline-block w-full text-center rounded-md border border-[#1BBFBA] px-4 py-2 font-medium text-[#1BBFBA] hover:bg-[#1BBFBA] hover:text-white transition-colors">Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section id="get-started" className="py-20 bg-[#1BBFBA]">
      <div className="mx-auto max-w-6xl px-6 text-center text-white">
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to simplify your digital workflow?</h3>
        <p className="mt-3 text-white/90">Join creators and teams moving faster with Rekatap.</p>
        <a href="#signup" className="mt-8 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[#0f827e] shadow-sm hover:bg-gray-100">Get Started Free</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[#1BBFBA] grid place-items-center text-white font-bold">R</div>
            <span className="text-lg font-semibold text-gray-900">Rekatap</span>
          </a>
          <p className="mt-4 text-sm text-gray-600">Connect, collect, and celebrate.</p>
        </div>
        {['Product', 'Company', 'Support', 'Social'].map((col) => (
          <div key={col}>
            <h5 className="text-sm font-semibold text-gray-900">{col}</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Overview</a></li>
              <li><a href="#" className="hover:text-gray-900">Features</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Rekatap. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Showcase, Pricing, CallToAction, Footer };
