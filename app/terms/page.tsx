export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <p className="mt-4 text-muted-foreground">
        These Terms of Service are provided as placeholder content for Cantiina. Replace with your legal copy.
      </p>
      <section className="prose mt-8 text-sm leading-relaxed text-muted-foreground">
        <p>
          By accessing and using this website, you agree to the following terms. This content is for demonstration
          purposes only.
        </p>
        <ul className="list-disc pl-5">
          <li>Use of the site is at your own risk.</li>
          <li>Services and pricing are subject to change.</li>
          <li>All trademarks are property of their respective owners.</li>
          {/* Additional terms can be added here */}
        </ul>
      </section>
    </main>
  )
}
