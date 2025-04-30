import clsx from "clsx";

type BoundedProps = {
  className?: string;
  children: React.ReactNode;
};

export const Bounded = ({
  className,
  children,
  ...restProps
}: BoundedProps) => {
  return (
    <section
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="container flex flex-col items-center">{children}</div>
    </section>
  );
};
