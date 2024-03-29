import { css } from 'styled-components';
import { fadeIn } from '@components/ui/keyframes';

export const globalCSS = css`
  :root {
    --primary: #ffffff;
    --primary-2: #f1f3f5;
    --secondary: #000000;
    --secondary-2: #111;

    --selection: var(--cyan);

    --text-base: #000000;
    --text-primary: #000000;
    --text-secondary: white;

    --hover: rgba(0, 0, 0, 0.075);
    --hover-1: rgba(0, 0, 0, 0.15);
    --hover-2: rgba(0, 0, 0, 0.25);

    --cyan: #22b8cf;
    --green: #37b679;
    --red: #da3c3c;
    --pink: #e64980;
    --purple: #f81ce5;

    --blue: #0070f3;

    --violet-light: #7048e8;
    --violet: #5f3dc4;

    --accents-0: #f8f9fa;
    --accents-1: #f1f3f5;
    --accents-2: #e9ecef;
    --accents-3: #dee2e6;
    --accents-4: #ced4da;
    --accents-5: #adb5bd;
    --accents-6: #868e96;
    --accents-7: #495057;
    --accents-8: #343a40;
    --accents-9: #212529;
  }

  [data-theme='dark'] {
    --primary: #212529;
    --primary-2: #111;
    --secondary: #ffffff;
    --secondary-2: #f1f3f5;
    --hover: rgba(255, 255, 255, 0.075);
    --hover-1: rgba(255, 255, 255, 0.15);
    --hover-2: rgba(255, 255, 255, 0.25);
    --selection: var(--purple);

    --text-base: white;
    --text-primary: white;
    --text-secondary: black;

    --accents-0: #212529;
    --accents-1: #343a40;
    --accents-2: #495057;
    --accents-3: #868e96;
    --accents-4: #adb5bd;
    --accents-5: #ced4da;
    --accents-6: #dee2e6;
    --accents-7: #e9ecef;
    --accents-8: #f1f3f5;
    --accents-9: #f8f9fa;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    height: 100%;
    box-sizing: border-box;
    touch-action: manipulation;
    font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0;
    text-rendering: optimizeLegibility;
  }

  html,
  body {
    font-family: 'Noto Sans KR', sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue;
    text-rendering: optimizeLegibility;
    background-color: var(--primary);
    color: var(--text-primary);
    transition: background-color 150ms;
  }

  body {
    position: relative;
    height: 100%;
    margin: 0;
  }

  #__next {
    height: 100%;
    & > div {
      height: 100%;
    }
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .fadeIn {
    animation-name: ${fadeIn};
  }
`;
