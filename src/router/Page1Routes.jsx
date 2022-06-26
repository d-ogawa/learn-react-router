import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  {
    path: null,
    child: <Page1 />
  },
  {
    path: "detailA",
    child: <Page1DetailA />
  },
  {
    path: "detailB",
    child: <Page1DetailB />
  }
];
