import { ButtonHTMLAttributes } from "react";

export default function NavBarButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      className="font-mono my-0.5 rounded-md  hover:bg-slate-600 hover:font-bold w-auto"
      {...props}
    >
      {props.children}
    </button>
  );
}
