import { PropsWithChildren } from "react";
import Link from "next/link";
import BlogLink from "@/components/Blog-Link";
export default (props: PropsWithChildren) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-48">
        <ul>
          {[1, 2, 3, 4].map((slug) => {
            return (
              <li key={slug}>
                <BlogLink slug={slug.toString()} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full">{props.children}</div>
    </div>
  );
};