import clsx from "clsx";
import Link from "next/link";

type Props = {
  buttonText: string | null;
  className?: string;
  href: string;
};

export default function Button({ href, buttonText, className }: Props) {
  return (
    <Link
      className={clsx(
        "rounded-xl bg-[#e61c59] px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-[#c80e40] md:text-2xl",
        className,
      )}
      href={href}
    >
      {buttonText}
    </Link>
  );
}
