# Site typography

The site uses open-source alternatives to Claude's serif reading and sans-serif
interface typography. These are not Anthropic's proprietary font files.

| Role | Family | Files | License |
| --- | --- | --- | --- |
| Body, headings, author name | Lora | `lora-latin-variable.woff2`, `lora-latin-italic-variable.woff2` | [SIL OFL](lora-OFL.txt) |
| Navigation, sidebar details, buttons, forms, captions, tables, footer | DM Sans | `dm-sans-latin-variable.woff2`, `dm-sans-latin-italic-variable.woff2` | [SIL OFL](dm-sans-OFL.txt) |
| Code | JetBrains Mono | `jetbrains-mono-latin-variable.woff2` | [SIL OFL](jetbrains-mono-OFL.txt) |

Font files are Latin subsets served locally, with `font-display: swap`. Lora and
DM Sans support weights 400–700, including true italics; JetBrains Mono supports
weights 400–600. Chinese and other scripts use the system fallbacks defined in
`_sass/_variables.scss`. Icon fonts retain their original families.

Sources: [Google Fonts CSS API](https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=DM+Sans:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:wght@400..600&display=swap),
[Lora](https://github.com/google/fonts/tree/main/ofl/lora),
[DM Sans](https://github.com/google/fonts/tree/main/ofl/dmsans),
[JetBrains Mono](https://github.com/google/fonts/tree/main/ofl/jetbrainsmono).
