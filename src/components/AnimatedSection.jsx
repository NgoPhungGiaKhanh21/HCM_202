import { useScrollAnimation } from "../hooks/useScrollAnimation";

const AnimatedSection = ({
  children,
  className = "",
  animationType = "fadeInUp",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;

    if (!isVisible) {
      switch (animationType) {
        case "fadeInUp":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "fadeInDown":
          return `${baseClasses} opacity-0 -translate-y-8`;
        case "fadeInLeft":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "fadeInRight":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        case "scaleIn":
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
