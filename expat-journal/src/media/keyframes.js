import { keyframes } from "styled-components"

export const BGColorKeyFrames = keyframes `

0% {
    background: #b7472a;
  }
  100% {
    background: #ffd5ab;
  }
`
//animation: color-change-2x 2s linear infinite alternate both;

export const LogoKeyFrames = keyframes `
0% {
transform: translateY(800px) rotate(540deg);
  opacity: 0;
}
100% {
transform: translateY(0) rotate(0deg);
  opacity: 1;
}
`
//animation: roll-in-bottom 0.6s ease-out both;