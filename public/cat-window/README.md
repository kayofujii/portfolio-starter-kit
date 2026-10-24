# Sleeping cat — current scene

The current illustration is the supplied `Frame 2609945 (1).svg`, preserved as
`assets/Scene-upload.svg`. It replaces the entire previous scene, including the
window, cat and plant. No prior replacement plant is overlaid on this drawing.

`cat-window.riv` is compiled with the official Rive CLI 1.7.0 and contains native
editable vector paths and bone skinning, without embedded scripts or images.
Runtime file size: 110,111 bytes. The web integration uses the self-hosted,
MIT-licensed official `@rive-app/webgl2` 2.46.0 runtime.

## Preview

From this directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/. In the portfolio, the same asset plays in the Contact
footer. It loads when visible, pauses offscreen/in hidden tabs, provides a pause
button and displays the original still SVG for reduced motion or load failure.
The canvas uses `Fit.Contain`, a square container and a pixel-density cap of 2.

## Source and animation

- `assets/Scene-upload.svg`: supplied illustration (only trailing whitespace normalized), 2170 × 2170.
- `poster.svg`: byte-for-byte copy of that illustration, used as the fallback.
- `assets/Background.svg`, `CatBody.svg`, `CatTail.svg`: generated aligned layers
  in the common 1280 × 1280 coordinate system, uniformly scaled from the source.
- `tools/replace_scene.py`: preserves the source cubic curves, separates the
  tail using exact de Casteljau subdivision, and prepares those three layers.
- `tools/build_scene.py`: converts the layers into native Rive paths and rig.
- `rig.json`: current rig origin. `scene.rml` and `rive.yaml`: editable CLI source.
- `validation/`: official CLI captures, inspection, browser results/screenshots.
- Older `CatBody-upload.svg`, `Plant-upload.svg`, and `update_plant.py` remain
  historical references; they are not used by the current scene build.

The supplied illustration has merged contours rather than separate cat/tail
objects. The tail is extracted at X=480, with one pixel of overlap beneath the
fixed root. Matching vector backing fills the original tail footprint and fine
trace gaps, so the curl reveals the window without transparent cracks. The
original drawing's vector contours, colors and proportions are retained.

Compositing order, back to front: Background, CatTail, CatBody. The background
and body have no keyed properties. Eight tail contours, including small edge
details, share the same three-bone skin. The rig is aligned to the new drawing:
root (480,1030), middle (400,1030), tip (320,1030), pointing left in bind pose.

The movement is unchanged: `Idle` loops over 180 frames at 60 fps (3 seconds).
At frames 0 and 180, the middle and tip rotations are zero. At frame 90 they
reach +0.14 and +0.26 radians respectively. Each segment uses ease-in-out
(0.42,0,0.58,1). The root stays fixed; shapes bend organically rather than
rotating as one rigid tail. `CatStateMachine` enters `Idle` and plays continuously.

## Rebuild and edit

From this directory, with the official CLI installed:

```sh
python3 tools/replace_scene.py
python3 tools/build_scene.py
rive . --verify
rive inspect . --summary
rive . --once
cp build/cat-window.riv cat-window.riv
rive .                         # native live preview
```

Regeneration replaces generated layer SVGs and RML. Preserve hand edits before
running it. Do not run the historical `update_plant.py` on the new whole scene.

Editor document export requires a Rive account session. No `.rev` is included:

```sh
rive login
rive . --once --rev=cat-window.rev
```

Open/import `cat-window.rev` in the Rive Editor. Select `CatWindow`, then `Idle`
or `CatStateMachine` in Animate mode. Paths, colors, bones, weights and keys
are editable native objects. No manual rigging is needed. Authenticated editor
import has not been validated. Script signing is unnecessary: no scripts exist.

## Deploy

Deploy `cat-window.riv`, `poster.svg`, `index.html`, `style.css`, `cat-window.js`
and `vendor/` together for the standalone integration. The portfolio imports
its runtime as a package and shares the WASM files under `vendor/`. Serve WASM
as `application/wasm`, enable gzip/Brotli, and version URLs before using immutable
cache headers. Source, tools and validation assets can be omitted from a minimal
static deployment.

## Validation

Official CLI verification and inspection report zero errors/warnings. Resting,
maximum-curl and post-entry full-loop frames were rendered with the official
CLI. The file is also loaded by the official WebGL2 runtime in Chrome, with
exported names `Idle`, `CatStateMachine`, and 1280 × 1280 artboard bounds.

`validation/browser-results.txt` records responsive desktop/mobile behavior,
pause/resume, live and initial reduced-motion checks, pixel differences, and
page errors. CLI step 1 and step 181 are the same animation pose: Entry consumes
the first step. Movement is confined to the tail; background and body stay still.

SHA-256: `81b2c1e1ff9c043463e029e04efe95bfd3bf20d2d59116db355b118c1181bfd6`

Official references: [CLI](https://rive.app/docs/cli/overview),
[web runtime](https://rive.app/docs/runtimes/web/web-js),
[runtime API](https://rive.app/docs/runtimes/web/rive-parameters).
