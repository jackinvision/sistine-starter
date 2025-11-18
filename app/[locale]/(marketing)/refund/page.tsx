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
    title: t('refund.title'),
    description: t('refund.description'),
    openGraph: {
      images: [t('refund.ogImage')],
    },
  };
}

export default function RefundPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        
        <p className="text-muted-foreground mb-8">
          Effective Date: January 1, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
          <p>
            At SimVid.AI, we operate on a credits-based system where users purchase credits that are consumed to generate videos using our AI technology. This Refund Policy outlines the limited conditions under which refunds may be issued.
          </p>
          <p className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
            <strong>Important Notice:</strong> Due to the nature of our AI video generation service and the immediate consumption of computational resources, refunds are only available in cases of service outages or technical failures as specified below. Credits that have been used to generate videos are non-refundable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Understanding Our Credits System</h2>
          <p>
            SimVid.AI operates on a prepaid credits system:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Users purchase credits through one-time purchases or subscription plans</li>
            <li>Credits are consumed when generating videos based on video length, resolution, and features used</li>
            <li>Each video generation request immediately consumes the required credits</li>
            <li>Unused credits remain in your account and do not expire (unless otherwise stated)</li>
            <li>Credits are non-transferable between accounts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Refund Eligibility - VERY LIMITED</h2>
          
          <h3 className="text-xl font-semibold mb-3">Refunds Are ONLY Available For:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Complete Service Outage:</strong> When SimVid.AI platform is completely inaccessible for more than 24 consecutive hours due to our system failure (excluding scheduled maintenance)</li>
            <li><strong>Critical Service Failure:</strong> When the video generation service fails to process requests due to server crashes or system errors, and credits were deducted without video generation</li>
            <li><strong>Duplicate Billing:</strong> Accidental duplicate charges for the same transaction</li>
            <li><strong>Unauthorized Charges:</strong> Charges made without your authorization (must be reported within 48 hours)</li>
            <li><strong>Failed Credit Delivery:</strong> Credits purchased but not credited to your account within 24 hours</li>
          </ul>

          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <h3 className="text-xl font-semibold mb-3">Refunds Are NOT Available For:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Change of Mind:</strong> Deciding you no longer want the credits or service</li>
              <li><strong>Used Credits:</strong> Any credits that have been consumed to generate videos</li>
              <li><strong>Unsatisfactory Results:</strong> Dissatisfaction with video quality, output, or AI-generated content</li>
              <li><strong>User Error:</strong> Incorrect prompts, settings, or misunderstanding of features</li>
              <li><strong>Technical Skill:</strong> Inability to use the service or create desired videos</li>
              <li><strong>Account Suspension:</strong> Service termination due to violation of Terms of Service</li>
              <li><strong>Slow Processing:</strong> Longer than expected video generation times during peak usage</li>
              <li><strong>Partial Outages:</strong> Service slowdowns or reduced performance that don't constitute complete failure</li>
              <li><strong>Third-Party Issues:</strong> Problems with payment processors, internet providers, or your device</li>
              <li><strong>Expired Promotions:</strong> Missed opportunities to use promotional credits within their validity period</li>
              <li><strong>Competitive Alternatives:</strong> Finding other services with different features or pricing</li>
              <li><strong>Business Changes:</strong> Changes in your business needs or budget constraints</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Refund Request Timeframe</h2>
          
          <p>
            For eligible refund cases as specified above, requests must be submitted within:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Outages/Failures:</strong> Within 7 days of the incident</li>
            <li><strong>Billing Errors:</strong> Within 14 days of the charge appearing on your statement</li>
            <li><strong>Unauthorized Charges:</strong> Within 48 hours of discovery</li>
            <li><strong>Failed Credit Delivery:</strong> Within 48 hours of purchase</li>
          </ul>
          
          <p className="mt-4">
            <strong>Note:</strong> Refund requests submitted after these timeframes will not be considered, regardless of circumstances.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. How to Request a Refund</h2>
          
          <h3 className="text-xl font-semibold mb-3">Step 1: Gather Documentation</h3>
          <p>
            Before submitting a refund request, prepare the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your registered account email address</li>
            <li>Transaction ID or order number</li>
            <li>Exact date and time of purchase</li>
            <li>Detailed description of the qualifying issue (service outage/failure)</li>
            <li>Screenshots or error messages showing the system failure</li>
            <li>Evidence that credits were deducted without successful video generation</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Step 2: Submit Request</h3>
          <p>
            Send your refund request to: <strong>support@simvid.ai</strong>
          </p>
          <p className="mt-2">
            Subject line must include: "Refund Request - Service Failure" followed by your transaction ID
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-4">Step 3: Review Process</h3>
          <p>
            Our team will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verify the reported service failure through our system logs</li>
            <li>Confirm the credit deduction occurred during the outage period</li>
            <li>Review your account history and usage patterns</li>
            <li>Request additional information if necessary</li>
            <li>Make a final decision within 5-7 business days</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Step 4: Refund Processing</h3>
          <p>
            If approved:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You will be notified via email</li>
            <li>Refund will be issued to your original payment method</li>
            <li>Processing time: 7-14 business days</li>
            <li>Bank processing may add additional 3-5 business days</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Refund Methods</h2>
          
          <h3 className="text-xl font-semibold mb-3">Payment Method Returns</h3>
          <p>
            All approved refunds are issued to the original payment method only:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Credit/Debit Cards:</strong> 7-14 business days</li>
            <li><strong>PayPal:</strong> 5-7 business days</li>
            <li><strong>Other Payment Methods:</strong> As per payment provider's processing time</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Refund Amounts</h3>
          <p>
            Refunds will be calculated as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Outage:</strong> Pro-rated refund for affected period only</li>
            <li><strong>Failed Generations:</strong> Credit value of failed attempts only</li>
            <li><strong>Billing Errors:</strong> Exact amount of erroneous charge</li>
            <li><strong>Payment Processing Fees:</strong> Non-refundable in all cases</li>
          </ul>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <p>
              <strong>Alternative Resolution:</strong> In cases of minor service disruptions not qualifying for refunds, we may offer bonus credits as service compensation at our sole discretion.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Subscription Plans and Cancellations</h2>
          
          <h3 className="text-xl font-semibold mb-3">Subscription Credits</h3>
          <p>
            Subscription plans provide monthly credit allocations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Credits are added to your account on each billing cycle</li>
            <li>Unused subscription credits do not roll over to next month (unless explicitly stated in plan)</li>
            <li>Cancellation stops future billing but credits remain until period end</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Cancellation Policy</h3>
          <p>
            You may cancel your subscription at any time:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cancel through your account settings or contact support</li>
            <li>Cancellation takes effect at end of current billing period</li>
            <li>You retain access to unused credits until period ends</li>
            <li><strong>No refunds for current billing period</strong> - you paid for the credits allocation</li>
            <li>No refunds for unused credits from previous months</li>
          </ul>

          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
            <p>
              <strong>Important:</strong> Subscription cancellations do not qualify for refunds unless there is a documented service outage as specified in Section 3.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Chargebacks and Payment Disputes</h2>
          
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <h3 className="text-xl font-semibold mb-3">Chargeback Warning</h3>
            <p>
              <strong>Filing a chargeback instead of contacting us first may result in:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Immediate account suspension</li>
              <li>Loss of all credits and access to the platform</li>
              <li>Permanent ban from future use of SimVid.AI</li>
              <li>Reporting to fraud prevention networks</li>
            </ul>
            <p className="mt-2">
              We strongly encourage you to contact our support team before initiating a chargeback. Most issues can be resolved quickly through communication.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-4">Dispute Process</h3>
          <p>
            If you disagree with a refund decision:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request escalation to management within 7 days</li>
            <li>Provide any additional evidence or documentation</li>
            <li>Final decision will be provided within 7 business days</li>
            <li>Management decision is final and binding</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Special Circumstances</h2>
          
          <h3 className="text-xl font-semibold mb-3">Promotional and Bonus Credits</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Promotional credits are non-refundable under any circumstances</li>
            <li>Bonus credits from referrals or promotions cannot be converted to cash</li>
            <li>Promotional credits may have expiration dates and specific usage terms</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Enterprise and Custom Plans</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enterprise customers may have custom refund terms in their agreement</li>
            <li>SLA (Service Level Agreement) compensation is separate from refunds</li>
            <li>Contact your account manager for enterprise-specific policies</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Free Trial Users</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Free trial credits are promotional and non-refundable</li>
            <li>If accidentally charged during free trial, full refund within 48 hours</li>
            <li>Contact support immediately if charged unexpectedly</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Fraudulent Activity and Abuse</h2>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p>
              SimVid.AI has zero tolerance for fraudulent refund requests and abuse of our refund policy. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Deny refunds for suspected fraudulent activity</li>
              <li>Permanently ban accounts with abusive refund patterns</li>
              <li>Report fraudulent behavior to payment processors and authorities</li>
              <li>Pursue legal action for fraudulent chargebacks</li>
              <li>Share fraud information with industry fraud prevention networks</li>
              <li>Require additional verification for future purchases</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Policy Modifications</h2>
          <p>
            SimVid.AI reserves the right to modify this Refund Policy at any time to comply with payment processor requirements or business needs. Changes will be:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Posted on this page with an updated effective date</li>
            <li>Applied to all new purchases after the effective date</li>
            <li>Communicated via email for material changes</li>
            <li>Previous version terms apply to purchases made before changes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
          <p>
            For eligible refund requests under this policy:
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li><strong>Support Email:</strong> support@simvid.ai</li>
            <li><strong>Billing Inquiries:</strong> billing@simvid.ai</li>
            <li><strong>Response Time:</strong> 1-3 business days</li>
            <li><strong>Website:</strong> https://simvid.ai</li>
          </ul>
          
          <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold mb-3">⚠️ Important Reminders</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Credits are consumed immediately upon video generation</li>
              <li>✓ Refunds are only for service outages/failures, not dissatisfaction with results</li>
              <li>✓ Contact us first before filing chargebacks to avoid account suspension</li>
              <li>✓ Document any service failures with screenshots for refund requests</li>
              <li>✓ Read our Terms of Service for complete details about our AI video generation service</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
