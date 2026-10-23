export function StarBorder({
  as: Component = "button",
  className = "",
  color = "var(--accent, #f59e0b)",
  speed = "5s",
  children,
  ...props
}) {
  return (
    <Component className={`star-border-btn ${className}`} {...props}>
      <span
        className="star-border-glow"
        style={{
          animationDuration: speed,
        }}
      />
      <span className="star-border-content">{children}</span>
    </Component>
  );
}
