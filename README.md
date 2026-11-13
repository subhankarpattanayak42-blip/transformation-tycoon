# Transformation Tycoon

Teaching material for a 60-minute management class on IT and AI transformation:
a classroom board game, a case video in two languages, and the pedagogy that
connects them.

**Showcase site:** https://subhankarpattanayak42-blip.github.io/transformation-tycoon/
**Play the game:** https://subu-prog.github.io/transformation-tycoon/

## What is here

| Path | What it is |
|---|---|
| `index.html` | The showcase site (single page, no build step) |
| `assets/style.css` | All styling; light and dark themes, print styles |
| `assets/baron-coburg-en.mp4` | Case video, English narration (1:32) |
| `assets/baron-coburg-bn.mp4` | Case video, Bengali narration (1:41), same visuals |
| `assets/poster-*.jpg` | Video poster frames |
| `assets/deck/` | The 15 slides, rendered as images for the in-page viewer |
| `assets/transformation-tycoon-deck.pdf` | The deck as PDF (510 KB), for presenting or printing |

The playable game is a separate repository, deployed at
[subu-prog.github.io/transformation-tycoon](https://subu-prog.github.io/transformation-tycoon/).
It is a client-side app backed by a Google Apps Script endpoint and a Google
Sheet, and has three entry screens: team, facilitator and projector. This site
links to it and explains it; it does not host it.

## The teaching problem

The course already uses games for accounting, supply chain, negotiation,
entrepreneurship, operations, finance, leadership and strategy. None of them
teaches IT and AI transformation, so the topic arrives as slides and frameworks
and students never take a sequencing decision or live with the debt of a shortcut.

## The intervention

**Transformation Tycoon** — eight teams of five, each running a legacy company,
two teams per company so every team has a rival. Eight rounds, six budget points
a round. The board is 24 spaces: ten capabilities in five colour groups, six AI
use cases, four event spaces, four corners.

The mechanic that carries the lesson: **a use case earns value only when the
capabilities it depends on are owned.** Missing a prerequisite leaves it a pilot
earning nothing; launching early fast-tracks it, paying now but adding one debt
token per gap; and every use case pays half value until the Change Management
Office exists. The final score is value plus trust minus technical debt, with the
weights hidden until the reveal.

## The case video

*Baron Coburg — the first AI ROI case?* retells a teaching parable: Ivan brings
223 bushels but his plough is broken and he owes the ploughmaker; Frederick brings
105 but keeps his equipment. The video's point is that the infographic's 10.7
against 12.2 does not reconcile with the case data, and that a flashy pilot is not
evidence of a return. Bushels become demo vanity metrics, seed and fertiliser
become tokens and compute, the ox becomes shared platform infrastructure, the
plough becomes scaffolding and tech debt, and the ploughmaker's bill becomes
unpaid vendor liabilities.

The English and Bengali versions carry the same visuals.

## Local preview

No dependencies. Open the file directly:

```sh
open index.html
```

Or serve it:

```sh
python3 -m http.server 8000
```

## Note on the numbers

The 58-versus-39 final scores quoted on the site are a **worked illustration**,
not observations from a delivered class. They leave out dice, fees and events.

## Author

Subhankar Pattanayak, IMI Bhubaneswar.
