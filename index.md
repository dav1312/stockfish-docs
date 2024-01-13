---
description: Download, documentation, technical details, and frequent questions.
title: 'Stockfish - Strong open-source chess engine'

# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Stockfish"
  text: "Strong open-source chess engine"
  tagline: Download, documentation, technical details, and frequent questions.
  image:
    src: /images/logo/icon_512x512@2x.png
    alt: Stockfish logo
  actions:
    - theme: brand
      text: Download
      link: /download/
    - theme: alt
      text: View on Github
      link: https://github.com/official-stockfish/Stockfish
features:
  - title: Strong
    details: Stockfish is a winner of the Top Chess Engine Championship, Chess.com Computer Chess Championship, and reliably tops rating lists.
    link: https://en.wikipedia.org/wiki/Stockfish_(chess)#Competition_results
    linkText: View competition results
  - title: Open Source
    details: Stockfish is open source (GPLv3 license). That means you can read the code, modify it, and contribute back.
    link: https://github.com/official-stockfish/Stockfish
    linkText: View source
  - title: Run Anywhere
    details: You can use Stockfish on your computer or on your iOS or Android device. So you can get world-class chess analysis, wherever you are.
    link: /download/
    linkText: Download page
---

<style scope>
.VPHero .clip {
  animation: title-gradient 5s ease infinite;
  background-size: 400% 400%;
  background-image: linear-gradient(-45deg,var(--green7),var(--green4),var(--green7),var(--green5),var(--green4),var(--green5),var(--green7),var(--green4));
}

@keyframes title-gradient {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  to {
    background-position: 0% 50%
  }
}

.image-bg {
  background: linear-gradient(45deg, var(--green7) 0%, var(--green7) 100%) top left,
              linear-gradient(-45deg, var(--green0) 0%, var(--green0) 100%) top right,
              linear-gradient(-135deg, var(--green4) 0%, var(--green4) 100%) bottom right,
              linear-gradient(135deg, var(--green0) 0%, var(--green0) 100%) bottom left  !important;
  background-size: 50% 50% !important;
  background-repeat: no-repeat !important;
}
</style>
