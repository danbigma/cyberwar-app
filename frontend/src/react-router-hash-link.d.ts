declare module "react-router-hash-link" {
  import { NavLinkProps } from "react-router-dom";
  import { ForwardRefExoticComponent, RefAttributes } from "react";

  export interface NavHashLinkProps extends NavLinkProps {
    smooth?: boolean;
    scroll?: (el: HTMLElement) => void;
    elementId?: string;
    className?:
      | string
      | ((props: { isActive: boolean; isPending: boolean }) => string);
  }

  export const NavHashLink: ForwardRefExoticComponent<
    NavHashLinkProps & RefAttributes<HTMLAnchorElement>
  >;
}
