import {DefaultTheme} from "styled-components";
import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: string;
    subColor: string;
    sideColor: string;
  }
}
