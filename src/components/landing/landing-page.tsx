import { AnimatedBackground } from "@/components/landing/animated-background";
import { DownloadSection } from "@/components/landing/download-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { FloatingNavbar } from "@/components/landing/floating-navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { MotionProvider } from "@/components/landing/motion-provider";
import { MouseGlow } from "@/components/landing/mouse-glow";
import { ScrollProgress } from "@/components/landing/scroll-progress";
import { SiteFooter } from "@/components/landing/site-footer";

export function LandingPage() {
  return (
    <MotionProvider>
      <AnimatedBackground />
      <ScrollProgress />
      <MouseGlow />
      {/* <FloatingNavbar /> */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
