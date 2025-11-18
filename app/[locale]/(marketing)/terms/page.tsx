/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import type { Locale } from "@/i18n.config";

export async function generateMetadata({
  params
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });

  return {
    title: t('terms.title'),
    description: t('terms.description'),
    openGraph: {
      images: [t('terms.ogImage')],
    },
  };
}

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <p className="text-muted-foreground mb-8">
          Effective Date: January 1, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to SimVid.AI ("SimVid", "we", "our", or "us"). These Terms of Service ("Terms") govern your use of our AI-powered video generation platform and services (collectively, the "Service") located at https://simvid.ai.
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms and our Refund Policy. If you disagree with any part of these terms, then you may not access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p>
            SimVid.AI provides an AI-powered video generation platform that allows users to create videos using natural language descriptions. Our Service operates on a credits-based system where:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Users purchase credits through one-time purchases or subscription plans</li>
            <li>Credits are consumed when generating videos based on parameters such as length, resolution, and features</li>
            <li>AI technology transforms text prompts into professional video content</li>
            <li>Videos are generated in various resolutions and formats suitable for different uses</li>
            <li>All video generation occurs through our cloud-based AI infrastructure</li>
          </ul>
          <p className="mt-4">
            <strong>Important:</strong> Credits are consumed immediately upon video generation request. Once consumed, credits are non-refundable except as specified in our Refund Policy (service outages/failures only).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p>
            To access certain features of our Service, you may be required to create an account. When creating an account, you must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your password and account</li>
            <li>Promptly update your account information to keep it accurate</li>
            <li>Accept all risks of unauthorized access to your account</li>
            <li>Be at least 18 years old or the age of legal consent in your jurisdiction</li>
          </ul>
          <p className="mt-4">
            You are responsible for all activities that occur under your account. We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
          <p>
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Upload or transmit viruses or malicious code</li>
            <li>Engage in any activity that disrupts or interferes with the Service</li>
            <li>Attempt to gain unauthorized access to any portion of the Service</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Violate any applicable laws in your jurisdiction</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
          </p>
          <p className="mt-4">
            You retain ownership of any content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with operating and providing the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Payment Terms and Credits System</h2>
          
          <h3 className="text-xl font-semibold mb-3">Credits Purchase</h3>
          <p>
            SimVid.AI operates on a prepaid credits system:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Credits can be purchased through one-time packages or subscription plans</li>
            <li>All prices are displayed in USD and include applicable taxes</li>
            <li>Payment is processed immediately upon purchase</li>
            <li>Credits are added to your account within 24 hours of successful payment</li>
            <li>Unused credits do not expire (unless explicitly stated for promotional credits)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Credit Consumption</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Credits are consumed immediately when video generation is initiated</li>
            <li>Different video parameters require different credit amounts (length, resolution, features)</li>
            <li>Credit costs are displayed before confirming generation</li>
            <li>Insufficient credits will prevent video generation until credits are purchased</li>
            <li>Failed generations due to system errors will be refunded as credits to your account</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Payment Processing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payments are processed through secure third-party payment processors</li>
            <li>We do not store your payment card information</li>
            <li>You agree to pay all fees and applicable taxes</li>
            <li>You authorize us to charge your payment method for all purchases</li>
            <li>Payment processing fees are non-refundable</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Subscription Plans</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscription plans provide monthly credit allocations</li>
            <li>Billing occurs automatically on your subscription renewal date</li>
            <li>You can cancel subscriptions at any time (cancellation takes effect at period end)</li>
            <li>Unused subscription credits typically do not roll over month-to-month</li>
            <li>Subscription charges are non-refundable except for service outages per our Refund Policy</li>
          </ul>

          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p>
              <strong>Refund Policy:</strong> Due to the immediate consumption of computational resources for AI video generation, refunds are strictly limited to cases of complete service outages or critical system failures as detailed in our Refund Policy. Credits that have been used to generate videos are non-refundable under any circumstances.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Disclaimers and Limitations of Liability</h2>
          <p>
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="mt-4">
            IN NO EVENT SHALL [YOUR COMPANY NAME], ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless [Your Company Name] and its affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="mt-4">
            Upon termination, your right to use the Service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Privacy Policy</h2>
          <p>
            Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with applicable international law and the laws of the jurisdiction where SimVid.AI operates, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be subject to binding arbitration or courts with appropriate jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li><strong>Support Email:</strong> support@simvid.ai</li>
            <li><strong>Business Inquiries:</strong> business@simvid.ai</li>
            <li><strong>Legal Inquiries:</strong> legal@simvid.ai</li>
            <li><strong>Website:</strong> https://simvid.ai</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
