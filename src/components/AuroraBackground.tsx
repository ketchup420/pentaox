import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="aurora-blob"
        style={{
          width: 600,
          height: 600,
          top: -150,
          left: -100,
          background: "var(--aurora-1)",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: 700,
          height: 700,
          top: "30%",
          right: -200,
          background: "var(--aurora-2)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: 500,
          height: 500,
          bottom: -100,
          left: "30%",
          background: "var(--aurora-3)",
          animationDelay: "-12s",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.97 0.01 250 / 0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}