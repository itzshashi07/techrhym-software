import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Terms() {
  return (
    <>
      <Navigation />
      <main className="pt-16 pb-20">
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using the Techrhym website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Techrhym's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on Techrhym's website are provided on an &apos;as is&apos; basis. Techrhym makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall Techrhym or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Techrhym's website, even if Techrhym or a Techrhym authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
                <p className="text-muted-foreground">
                  The materials appearing on Techrhym's website could include technical, typographical, or photographic errors. Techrhym does not warrant that any of the materials on its website are accurate, complete, or current. Techrhym may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Links</h2>
                <p className="text-muted-foreground">
                  Techrhym has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Techrhym of the site. Use of any such linked website is at the user&apos;s own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
                <p className="text-muted-foreground">
                  Techrhym may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms of Service and Privacy Policy are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts located in the United States.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at Info@Techrhym.com
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
