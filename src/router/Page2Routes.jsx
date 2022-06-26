import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: null,
    child: <Page2 />
  },
  {
    path: ":id",
    child: <UrlParameter />
  }
];
