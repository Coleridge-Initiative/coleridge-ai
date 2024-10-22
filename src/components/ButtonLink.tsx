import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
  className,
  href,  // Ensure href is required and passed
  ...restProps
}: PrismicNextLinkProps & { href: string }) {  // Ensure href is mandatory
  return (
    <PrismicNextLink
      href={href}  // Required for Next.js link components
      className={clsx(
        "inline-block px-4 py-2 text-white bg-blue-500 rounded-md",
        className,
      )}
      {...restProps}
    />
  );
}
