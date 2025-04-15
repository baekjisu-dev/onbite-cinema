import styles from "./loading-spinner.module.css";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LoadingSpinner({
  className,
  size = "sm",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: styles.spinnerSm,
    md: styles.spinnerMd,
    lg: styles.spinnerLg,
  };

  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <div className={`${styles.spinner} ${sizeClasses[size]}`}>
        <span className={styles.srOnly}>로딩중...</span>
      </div>
    </div>
  );
}
