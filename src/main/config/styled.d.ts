import "styled-components";
import type { dark as darkTheme } from "src/presentation/styles/themes";

type ThemeType = typeof darkTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends darkTheme {}
}
