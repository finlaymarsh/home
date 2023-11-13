import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLElement> {
  to: string;
}

export default function NavBarButton(props: Props) {
  return (
    <button className="font-mono my-0.5 rounded-md  hover:bg-slate-600 hover:font-bold w-auto">
      <Link to={props.to}>{props.children}</Link>
    </button>
  );
}
