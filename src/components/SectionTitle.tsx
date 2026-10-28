import Link from "next/link";

/** Centered section heading used on the home page: small label, big title, optional "view all" link. */
export function SectionTitle({ title, subtitle, href }: { title: string; subtitle?: string; href?: string }) {
  return (
    <div className="mb-6 text-center sm:mb-8">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-1.5 max-w-xl text-sm text-[var(--color-muted-foreground)]">{subtitle}</p>}
      {href && (
        <Link href={href} className="mt-3 inline-block text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:text-[var(--color-primary)]">
          View all
        </Link>
      )}
    </div>
  );
}

export const SECTION = "page-container py-10 sm:py-14";
export const PRODUCT_GRID = "grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4";
