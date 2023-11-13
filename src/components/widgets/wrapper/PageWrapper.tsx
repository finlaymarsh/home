import { HTMLAttributes } from "react";

export default function PageWrapper(props: HTMLAttributes<HTMLElement>) {
  return (
    <div className="mt-24 px-10 max-w-[64rem]" {...props}>
      {props.children}
    </div>
  );
}
