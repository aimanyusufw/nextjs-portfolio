function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`animate-pulse bg-neutral-500 ${className}`} {...props} />
  );
}

export { Skeleton };
