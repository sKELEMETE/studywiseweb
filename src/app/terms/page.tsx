import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for StudyWise, an Android study app for AI summaries and active learning tools.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "Use of StudyWise",
    body: [
      "StudyWise is provided as a study assistant for generating summaries, flashcards, prompts, and related learning outputs from user-provided materials. Users are responsible for ensuring they have the right to upload and process any content they submit.",
      "Users agree not to misuse the app, interfere with service operation, reverse engineer protected components, attempt unauthorized access, or use StudyWise for unlawful, harmful, or academically dishonest conduct.",
    ],
  },
  {
    title: "AI-generated content",
    body: [
      "AI outputs may be incomplete, inaccurate, or unsuitable for a specific course, exam, or institution. Users should review summaries and learning materials before relying on them.",
      "StudyWise does not replace teachers, tutors, official textbooks, medical advice, legal advice, or professional judgment. The app is intended to support learning, not to guarantee outcomes.",
    ],
  },
  {
    title: "User content",
    body: [
      "Users retain ownership of their uploaded notes, PDFs, images, and other study materials. By using the app, users grant StudyWise the limited permission needed to process that content and return requested study outputs.",
      "Users should not upload confidential, sensitive, copyrighted, or restricted materials unless they have permission and understand how those materials may be processed by app infrastructure and service providers.",
    ],
  },
  {
    title: "Downloads and updates",
    body: [
      "The APK is provided for Android installation. Users are responsible for installing updates from official StudyWise distribution channels and keeping device security settings appropriate for APK installation.",
      "Features, compatibility, availability, and performance may change over time. StudyWise may modify, suspend, or discontinue parts of the app without prior notice where necessary.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, StudyWise is provided on an as-is and as-available basis without warranties of uninterrupted operation, accuracy, fitness for a particular purpose, or non-infringement.",
      "StudyWise and its operators should not be liable for indirect, incidental, special, consequential, or punitive damages, including academic, business, device, data, or reputational losses arising from use of the app.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "These placeholder Terms may be replaced or updated before launch. Continued use of StudyWise after updated terms are posted means the user accepts the revised terms.",
      "If any provision is found unenforceable, the remaining provisions should remain in effect to the maximum extent permitted by law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      intro="These placeholder Terms describe the conditions for downloading and using StudyWise, including responsibilities for uploaded study materials and AI-generated outputs."
      sections={sections}
    />
  );
}
