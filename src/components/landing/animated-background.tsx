const particles = [
  { left: "8%", top: "82%", delay: "0s", duration: "14s" },
  { left: "16%", top: "62%", delay: "1.8s", duration: "18s" },
  { left: "24%", top: "74%", delay: "3.4s", duration: "16s" },
  { left: "35%", top: "88%", delay: "0.9s", duration: "19s" },
  { left: "44%", top: "64%", delay: "2.6s", duration: "15s" },
  { left: "53%", top: "79%", delay: "4.2s", duration: "20s" },
  { left: "63%", top: "70%", delay: "1.2s", duration: "17s" },
  { left: "72%", top: "86%", delay: "3s", duration: "18s" },
  { left: "82%", top: "60%", delay: "5s", duration: "16s" },
  { left: "91%", top: "77%", delay: "2.1s", duration: "21s" },
  { left: "12%", top: "42%", delay: "6.2s", duration: "17s" },
  { left: "88%", top: "38%", delay: "4.8s", duration: "19s" },
] as const;

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0 light-sheet" />
      <div className="absolute -inset-x-24 top-[-14rem] h-[44rem] aurora-veil" />
      <div className="surface-grid absolute inset-0 opacity-55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.36)_58%,rgba(0,0,0,0.92)_100%)]" />
      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
