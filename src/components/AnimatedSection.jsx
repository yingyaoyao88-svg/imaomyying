import { motion, useReducedMotion } from "framer-motion";

export function AnimatedSection({
  as: Component = "section",
  className = "",
  children,
  delay = 0,
  id,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      as={Component}
      id={id}
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
