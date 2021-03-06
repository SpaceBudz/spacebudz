import "./src/css/index.css";
import "focus-visible";
import wrapWithProvider from "./wrap-with-provider";
import { theme } from "./src/theme/theme";
export const wrapRootElement = wrapWithProvider;

console.log(
  `%c 
░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗ ████████╗░█████╗░
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝ ╚══██╔══╝██╔══██╗
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░ ░░░██║░░░██║░░██║
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░ ░░░██║░░░██║░░██║
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗ ░░░██║░░░╚█████╔╝
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝ ░░░╚═╝░░░░╚════╝░

░██████╗██████╗░░█████╗░░█████╗░███████╗██████╗░██╗░░░██╗██████╗░███████╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗██║░░░██║██╔══██╗╚════██║
╚█████╗░██████╔╝███████║██║░░╚═╝█████╗░░██████╦╝██║░░░██║██║░░██║░░███╔═╝
░╚═══██╗██╔═══╝░██╔══██║██║░░██╗██╔══╝░░██╔══██╗██║░░░██║██║░░██║██╔══╝░░
██████╔╝██║░░░░░██║░░██║╚█████╔╝███████╗██████╦╝╚██████╔╝██████╔╝███████╗
╚═════╝░╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚══════╝╚═════╝░░╚═════╝░╚═════╝░╚══════╝`,
  `color:${theme.colors.primary}`
);
