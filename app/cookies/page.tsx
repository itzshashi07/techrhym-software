import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function CookiePolicy() {
  return (
    <>
      <Navigation />
      <main className="pt-16 pb-20">
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small pieces of data stored on your browser or device. They help websites remember information about you, such as your preferences and login status. Cookies can be session-based (temporary) or persistent (stored until deleted).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Performance Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies collect information about how visitors use our website, such as which pages are visited most often, and if visitors receive error messages.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personalized features.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Marketing Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies are used to track visitors across websites to display relevant advertisements based on your interests and browsing history.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Third-Party Cookies</h2>
                <p className="text-muted-foreground">
                  We may allow third parties to place cookies on your device for analytics and advertising purposes. These third parties have their own privacy policies and we are not responsible for their practices. Popular third-party services include Google Analytics and Google Ads.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Your Cookie Choices</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to control and restrict the use of cookies. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Adjust your browser settings to refuse cookies</li>
                  <li>Choose to be warned each time a cookie is being sent</li>
                  <li>Delete cookies from your browser history</li>
                  <li>Opt out of third-party cookies through their respective websites</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground">
                  Session cookies are deleted when you close your browser. Persistent cookies remain until their expiration date or until you delete them manually.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about our use of cookies, please contact us at Info@techrhym.com
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
