import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Privacy() {
  return (
    <>
      <Navigation />
      <main className="pt-16 pb-20">
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Techrhym (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;) operates the Techrhym website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Information Collection and Use</h2>
                <p className="text-muted-foreground mb-4">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                <h3 className="text-lg font-semibold mb-2">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Personal Data: Name, email address, phone number, company information</li>
                  <li>Usage Data: Browser type, pages visited, time spent on pages, referrer information</li>
                  <li>Cookies: We use cookies to enhance your browsing experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Use of Data</h2>
                <p className="text-muted-foreground mb-4">Techrhym uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you newsletters and marketing materials (with your consent)</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues and fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Security of Data</h2>
                <p className="text-muted-foreground">
                  The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at Info@Techrhym.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
