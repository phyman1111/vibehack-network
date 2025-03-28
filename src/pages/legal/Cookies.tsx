
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const Cookies = () => {
  return (
    <Layout>
      <div className="container py-10 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-muted-foreground mb-6">Last Updated: June 1, 2023</p>
        
        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in 
              your web browser and allows the service or a third party to recognize you and make your next visit easier and 
              the service more useful to you.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Cookies</h2>
            <p className="mb-3">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li><strong>Essential cookies:</strong> These are cookies that are required for the operation of our website.</li>
              <li><strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
              <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website.</li>
              <li><strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed.</li>
            </ul>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">3. Types of Cookies We Use</h2>
            <p className="mb-3">
              The types of cookies we use on our website include:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li><strong>Session Cookies:</strong> These cookies are temporary and expire once you close your browser.</li>
              <li><strong>Persistent Cookies:</strong> These cookies remain on your device until you erase them or they expire.</li>
              <li><strong>First-Party Cookies:</strong> These cookies are set by VibeHire.</li>
              <li><strong>Third-Party Cookies:</strong> These cookies are set by our trusted partners and service providers.</li>
            </ul>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">4. Your Choices Regarding Cookies</h2>
            <p className="mb-3">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through your browser settings:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-vibehire-primary hover:underline">Cookie settings in Chrome</a></li>
              <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-vibehire-primary hover:underline">Cookie settings in Safari</a></li>
              <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-vibehire-primary hover:underline">Cookie settings in Firefox</a></li>
              <li>Internet Explorer: <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-vibehire-primary hover:underline">Cookie settings in Internet Explorer</a></li>
            </ul>
            <p className="mt-3">
              Please note that if you choose to reject cookies, you may not be able to use the full functionality of our website.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">5. Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this page.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
              <br />
              <a href="mailto:privacy@vibehire.com" className="text-vibehire-primary hover:underline">privacy@vibehire.com</a>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
