import { createGlobalStyle } from "styled-components";

export const GlobalStyleFonts = createGlobalStyle`

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1588644109114'); /* IE9 */
  src: url('./iconfont.eot?t=1588644109114#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1588644109114') format('woff'),
  url('./iconfont.ttf?t=1588644109114') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1588644109114#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  &.pen{
    margin-right:7px;
  }
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;
