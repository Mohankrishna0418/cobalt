"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default () => {
  const pathname = usePathname();
  return (
    <div>
      <ol className="flex flex-row items-center justify-center gap-8 ">
        <li key="/Home" className={pathname === "/" ? "text-red-500" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li
          key="/Enterprise"
          className={pathname === "/enterprise" ? "text-red-500" : ""}
        >
          <Link href="/enterprise">Enterprise</Link>
        </li>
        <li
          key="/Pricing"
          className={pathname === "/pricing" ? "text-red-500" : ""}
        >
          <Link href="/pricing">Pricing</Link>
        </li>
        <li
          key="/Blog"
          className={pathname === "/blog" ? "text-red-500" : ""}
        >
          <Link href="/blog">Blog</Link>
        </li>
      </ol>
    </div>
  );
};
