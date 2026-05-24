import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for StudyWise, an Android study app that helps generate AI summaries and active learning tools.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "Information we may collect",
    body: [
      "StudyWise may process study materials you choose to upload, including PDFs, images, typed notes, extracted text, and related prompts. This placeholder policy assumes the app collects only the information needed to provide summaries, flashcards, and active learning outputs.",
      "Basic technical information may be collected to keep the app reliable, such as device type, app version, crash diagnostics, approximate usage events, and download source. This information should be used to operate, secure, and improve the service.",
    ],
  },
  {
    title: "How information may be used",
    body: [
      "Uploaded study content may be used to generate AI summaries, learning prompts, flashcards, and related study outputs requested by the user. The service should not use study materials for unrelated advertising purposes.",
      "Technical information may be used for security monitoring, debugging, analytics, feature improvement, abuse prevention, and compliance with applicable legal obligations.",
    ],
  },
  {
    title: "Storage and retention",
    body: [
      "StudyWise should retain user-provided study content only for as long as needed to provide the requested functionality, maintain account or app history when enabled, resolve support requests, or comply with legal obligations.",
      "Users should be able to request deletion of personal information where required by applicable law. Backup copies may persist for a limited period before being removed from routine systems.",
    ],
  },
  {
    title: "Sharing and processors",
    body: [
      "StudyWise may share information with trusted service providers that support hosting, AI processing, analytics, crash reporting, security, and app distribution. These providers should process information only under appropriate contractual restrictions.",
      "Information may also be disclosed if required by law, to protect rights and safety, to investigate abuse, or as part of a merger, acquisition, financing, or transfer of assets.",
    ],
  },
  {
    title: "User choices",
    body: [
      "Users can choose what materials to upload and may stop using the app at any time. Device-level permissions, notifications, and storage access can be managed through Android settings.",
      "Requests about access, correction, deletion, or portability of personal information should be directed to the app operator once official support contact details are added.",
    ],
  },
  {
    title: "Children and updates",
    body: [
      "StudyWise is intended for general study use and should not knowingly collect personal information from children where parental consent is legally required.",
      "This placeholder policy may be updated before launch or as product behavior changes. Material updates should be reflected by changing the effective date and notifying users when appropriate.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This placeholder Privacy Policy describes how StudyWise may collect, use, store, and protect information when users download and use the Android app."
      sections={sections}
    />
  );
}
