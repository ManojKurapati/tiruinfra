export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-relative public-asset path with the basePath if any. */
export function asset(p: string): string {
  if (!p.startsWith("/")) return p;
  return `${basePath}${p}`;
}
