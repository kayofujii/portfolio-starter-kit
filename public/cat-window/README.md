# Sleeping cat — current scene

The supplied `Frame 2609945 (1).svg` is preserved as a reference in
`assets/Scene-upload.svg`. The window and plant retain their cleaned geometry. Only the cat uses the
original uploaded contours, including its silhouette, shading and small details.
Window edges remain straight and blind slats remain evenly spaced.

`cat-window.riv` is compiled with the official Rive CLI 1.7.0 and contains native
editable vector paths and bone skinning, without embedded scripts or images.
Runtime file size: 22,463 bytes (previous traced version: 110,111 bytes).
The web integration uses the self-hosted, MIT-licensed official
`@rive-app/webgl2` 2.46.0 runtime.

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

- `assets/Scene-upload.svg`: supplied traced drawing, retained as a reference.
- `assets/Background.svg`, `CatBody.svg`, `CatTail.svg`: aligned editable layers
  in the common 1280 × 1280 coordinate system.
- `poster.svg`: matching cleaned static SVG, also suitable for standalone use.
- `tools/clean_scene.py`: cleaned window/plant plus original cat extraction; active
  source generator for the current illustration.
- `tools/build_scene.py`: converts the layers into native Rive paths and rig.
- `rig.json`: rig origin. `scene.rml` and `rive.yaml`: editable CLI source.
- `validation/`: official CLI captures, inspection and browser results/screenshots.
- `replace_scene.py`: cubic subdivision helpers imported by `clean_scene.py`;
  running it directly restores the entire traced scene, so do not run it for
  the current mixed scene. `update_plant.py` and older upload SVGs are historical.

Compositing order, back to front: Background, CatTail, CatBody. The background
and body have no keyed properties. Eight original tail contours share the same
three-bone skin. The root remains at (480,1030), middle at (400,1030) and tip at
(320,1030), pointing left in bind pose. The root stays beneath the body with
an overlap so it cannot open a gap.

The scene has 479 cubic vertices versus 2,564 in the full traced version.
The cat layers match the previous uploaded-cat extraction exactly. Background
SVG hashes also match the preceding clean version, verifying the window and
plant were not changed. Muted cast and contact shadows retain depth.

The movement is unchanged: `Idle` loops over 180 frames at 60 fps (3 seconds).
At frames 0 and 180, the middle and tip rotations are zero. At frame 90 they
reach +0.14 and +0.26 radians respectively. Each segment uses ease-in-out
(0.42,0,0.58,1). The root stays fixed; shapes bend organically rather than
rotating as one rigid tail. `CatStateMachine` enters `Idle` and plays continuously.

## Rebuild and edit

From this directory, with the official CLI installed:

```sh
python3 tools/clean_scene.py
python3 tools/build_scene.py
rive . --verify
rive inspect . --summary
rive . --once
cp build/cat-window.riv cat-window.riv
rive .                         # native live preview
```

Regeneration replaces generated layer SVGs and RML. Preserve hand edits before
running it. Do not run the historical `replace_scene.py` or `update_plant.py` on the cleaned scene.

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

SHA-256: `9aad849d4a364454581486009f688953c1fd1714c72aaf69e0f42aff9e3a8f95`

Official references: [CLI](https://rive.app/docs/cli/overview),
[web runtime](https://rive.app/docs/runtimes/web/web-js),
[runtime API](https://rive.app/docs/runtimes/web/rive-parameters).
