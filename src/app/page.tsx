export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-bold text-white text-lg">
              ID
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight">
                IDEA
              </span>
              <span className="ml-2 hidden text-sm text-steel sm:inline">
                Industrial Design Engineering &amp; Automation
              </span>
            </div>
          </a>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#services" className="text-steel transition hover:text-white">
              Services
            </a>
            <a href="#industries" className="text-steel transition hover:text-white">
              Industries
            </a>
            <a href="#approach" className="text-steel transition hover:text-white">
              Our Approach
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-accent px-4 py-2 font-medium text-white transition hover:bg-accent-light"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Design &middot; Engineer &middot; Automate
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              From concept to
              <br />
              <span className="text-accent">production line.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-steel">
              We design cut-and-sew products and build the business processes and
              software to manufacture them at scale — for companies that need to
              rapidly customize products to customer requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-accent px-8 py-3.5 font-semibold text-white transition hover:bg-accent-light"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                className="rounded-lg border border-white/20 px-8 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                What We Do
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-navy-light py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            What We Do
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            End-to-end product &amp; process design
          </h2>
          <p className="mb-16 max-w-2xl text-steel">
            We work across the full lifecycle — from product design through
            manufacturing process engineering to the software that ties it all
            together.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              }
              title="Product Design"
              description="Custom cut-and-sew product design tailored to your market. We develop patterns, materials specifications, and prototypes ready for production."
            />
            <ServiceCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              }
              title="Process Engineering"
              description="Manufacturing workflow design, from order intake through cutting, sewing, and fulfillment. We streamline operations for high-mix, custom production."
            />
            <ServiceCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              }
              title="Software & Automation"
              description="Purpose-built software for product configuration, quoting, order management, and production scheduling — designed for the cut-and-sew industry."
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Industries We Serve
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Built for industrial fabrics
          </h2>
          <p className="mb-16 max-w-2xl text-steel">
            We specialize in industries where products must be rapidly customized
            to customer specifications — where no two orders are exactly alike.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <IndustryCard
              title="Marine"
              description="Boat covers, seating, enclosures, and interior upholstery built to withstand harsh marine environments."
            />
            <IndustryCard
              title="RV & Vehicle"
              description="Custom seat covers, cushions, curtains, and interior furnishings for recreational and specialty vehicles."
            />
            <IndustryCard
              title="Canvas & Awnings"
              description="Commercial and residential awnings, tarps, covers, and custom canvas fabrications."
            />
            <IndustryCard
              title="Industrial Insulation"
              description="Removable insulation blankets and covers for pipes, valves, turbines, and industrial equipment."
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-navy-light py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Our Approach
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why companies work with IDEA
          </h2>
          <p className="mb-16 max-w-2xl text-steel">
            We understand the unique challenges of high-mix, low-volume
            manufacturing in the industrial fabrics space.
          </p>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <ApproachItem
                number="01"
                title="Deep industry expertise"
                description="We've spent years inside cut-and-sew operations. We know the constraints, the bottlenecks, and where the real leverage is."
              />
              <ApproachItem
                number="02"
                title="Product + process + software"
                description="Most firms stop at product design. We carry through to the manufacturing process and the tools your team uses every day."
              />
              <ApproachItem
                number="03"
                title="Built for customization"
                description="Every system we design assumes high variability. Configure-to-order isn't an afterthought — it's the foundation."
              />
            </div>
            <div className="space-y-8">
              <ApproachItem
                number="04"
                title="Rapid implementation"
                description="We move fast and iterate. You'll see working prototypes — both physical and digital — early and often."
              />
              <ApproachItem
                number="05"
                title="Integrated thinking"
                description="Product design decisions affect manufacturing cost. Software decisions affect throughput. We optimize across the whole system."
              />
              <ApproachItem
                number="06"
                title="Long-term partnership"
                description="We don't just hand off deliverables. We build lasting relationships and evolve solutions as your business grows."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-navy-light p-12 text-center md:p-20">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Let&rsquo;s build something together
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-steel">
              Whether you&rsquo;re launching a new product line, redesigning your
              manufacturing process, or need software to tie it all together —
              we&rsquo;d love to hear from you.
            </p>
            <a
              href="mailto:contact@ideautomate.com"
              className="inline-block rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-white transition hover:bg-accent-light"
            >
              contact@ideautomate.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-accent text-sm font-bold text-white">
              ID
            </div>
            <span className="font-semibold">
              Industrial Design Engineering &amp; Automation
            </span>
          </div>
          <p className="text-sm text-steel">
            &copy; {new Date().getFullYear()} IDEA. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-white/10 bg-navy p-8 transition hover:border-accent/30 hover:bg-navy/80">
      <div className="mb-5 text-accent">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="leading-relaxed text-steel">{description}</p>
    </div>
  );
}

function IndustryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-navy-light p-6 transition hover:border-accent/30">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-steel">{description}</p>
    </div>
  );
}

function ApproachItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5">
      <span className="mt-0.5 text-2xl font-bold text-accent/40">
        {number}
      </span>
      <div>
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <p className="leading-relaxed text-steel">{description}</p>
      </div>
    </div>
  );
}
