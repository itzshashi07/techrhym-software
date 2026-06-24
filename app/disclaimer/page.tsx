import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Disclaimer() {
  return (
    <>
      <Navigation />
      <main className="pt-16 pb-20">
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Disclaimer</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold mb-4">General Disclaimer</h2>
                <p className="text-muted-foreground">
                  The information on the TechRhym website is provided &quot;as is&quot; without any representations or warranties, express or implied. TechRhym makes no representations or warranties in relation to this website or the information and materials provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">No Professional Advice</h2>
                <p className="text-muted-foreground">
                  Nothing on this website constitutes, or is meant to constitute, advice of any kind. If you require advice in relation to any legal, financial, tax, investment or other matter you should consult an appropriate professional.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Limitations of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  TechRhym will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special or consequential loss, or for any business losses, loss of revenue, income, profits or anticipated savings.
                </p>
                <p className="text-muted-foreground">
                  Even if we have been expressly advised of the possibility of such loss, the limitations of liability set out in this website disclaimer will apply to the maximum extent permitted by applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Accuracy of Information</h2>
                <p className="text-muted-foreground">
                  While TechRhym aims to ensure that the information on this website is accurate and up-to-date, we make no representations or warranties (express or implied) about the accuracy, completeness, currency, reliability or availability of information, products, services or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">External Links</h2>
                <p className="text-muted-foreground">
                  This website may contain links to external websites. We are not responsible for the content, accuracy, or practices of external websites. Any links to external websites are provided for your convenience and information. We do not endorse or make any representations about external websites or any information, products or services contained therein.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">No Warranty</h2>
                <p className="text-muted-foreground">
                  The website and information are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the extent permitted by law, TechRhym excludes all representations and warranties relating to the website and its contents, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, title, quiet enjoyment, accuracy or arising from a course of dealing or usage of trade.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                <p className="text-muted-foreground">
                  While TechRhym endeavors to ensure that the website is available at all times, we make no warranty or guarantee that the website will be available without interruption, delay, defect, or error. Your use of the website is entirely at your own risk and subject to all terms, conditions and notices contained on the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Severability</h2>
                <p className="text-muted-foreground">
                  If any part of this disclaimer is held to be invalid or unenforceable, the remaining parts of this disclaimer shall continue in force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this disclaimer, please contact us at Info@techrhym.com
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
