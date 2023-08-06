import type { MenuItem } from "~/types";
import { faGear, faHome } from "@fortawesome/free-solid-svg-icons";
export const MENU_LIST: MenuItem[] = [
  {
    name: "index",
    icon: faHome,
    href: "/",
  },
  {
    name: "settings",
    icon: faGear,
    href: "/settings",
  },
];
