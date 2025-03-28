
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <Layout>
      <div className="container py-10 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-6">Last Updated: June 1, 2023</p>
        
        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p>
              Welcome to VibeHire. These terms and conditions outline the rules and regulations for the use of our website.
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use 
              VibeHire if you do not accept all of the terms and conditions stated on this page.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">2. License</h2>
            <p>
              Unless otherwise stated, VibeHire and/or its licensors own the intellectual property rights for all material 
              on VibeHire. All intellectual property rights are reserved. You may view and/or print pages from our website 
              for your own personal use subject to restrictions set in these terms and conditions.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Account</h2>
            <p className="mb-3">
              When creating an account on our platform, you agree to the following:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>You must not use the account of another user without permission.</li>
              <li>We reserve the right to terminate accounts that violate our terms.</li>
            </ul>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">4. User Content</h2>
            <p className="mb-3">
              By uploading content to our platform, including but not limited to video resumes, voice pitches, images, and text:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>You grant VibeHire a non-exclusive, worldwide, royalty-free license to use, reproduce, adapt, publish, translate and distribute your content.</li>
              <li>You warrant that your content does not violate the rights of any third party.</li>
              <li>You acknowledge that we have the right to remove any content that violates these terms or is deemed inappropriate.</li>
              <li>You are solely responsible for the content you upload.</li>
            </ul>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">5. Prohibited Uses</h2>
            <p className="mb-3">
              You may not use our platform for any of the following purposes:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>To engage in any unlawful activity.</li>
              <li>To harass, abuse, or harm another person.</li>
              <li>To impersonate any person or entity.</li>
              <li>To infringe upon the rights of others.</li>
              <li>To upload or transmit viruses or malicious code.</li>
              <li>To collect or track the personal information of others.</li>
              <li>To spam, phish, or engage in any automated use of the system.</li>
            </ul>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall VibeHire, nor its directors, employees, partners, agents, suppliers, or affiliates, be 
              liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
              inability to access or use the service.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. If we make changes, we will provide notice by 
              posting the updated terms on our website and updating the "Last Updated" date. Your continued use of our 
              platform following the posting of updated terms means that you accept and agree to the changes.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:terms@vibehire.com" className="text-vibehire-primary hover:underline">terms@vibehire.com</a>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
