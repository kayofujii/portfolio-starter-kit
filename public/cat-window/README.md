# Sleeping cat on a windowsill

`cat-window.riv` is a successfully compiled and browser-validated Rive runtime
asset (28,576 bytes). The animation uses native editable vector geometry and
bone skinning, with no embedded scripts, textures, fonts, or external assets.

## Files

- `cat-window.riv`: deployable runtime asset.
- `index.html`, `style.css`, `cat-window.js`: responsive integration.
- `vendor/`: official MIT-licensed `@rive-app/webgl2` 2.46.0, including both WASM variants.
- `assets/`: window background with replacement plant and shadows, original
  tail, refined `CatBody.svg`, plus unchanged `CatBody-upload.svg` and
  `Plant-upload.svg` edit references.
- `poster.svg`: original SVGs composed in their shared coordinate space; static fallback.
- `scene.rml`, `rive.yaml`: editable Rive CLI project source.
- `tools/build_scene.py`: reproducible SVG-to-native-vector conversion and rig construction.
- `tools/update_plant.py`: restores the uploaded plant to the scene and adds vector shadows.
- `validation/`: CLI captures, scene inspection, browser screenshots and results.

## Preview the website

Serve this directory over HTTP (opening the HTML through `file://` will not load
WASM correctly):

```sh
cd /Users/kayofujii/Development/portfolio-starter-kit/public/cat-window
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/. If the existing Next.js project is running, this
example is also available at `/cat-window/index.html` on that server.

Copy the example directory to any static host to deploy it. For a smaller
deployment, omit `assets/`, `tools/`, `validation/`, `build/`, and CLI source
files; keep the runtime file, poster, HTML, CSS, JS and vendor files together.
Serve WASM as `application/wasm`. Enable gzip/Brotli, and use versioned URLs
before adding immutable cache headers. No third-party CDN is contacted.

The canvas preserves the square 1280 × 1280 artboard using `Fit.Contain` and
a square CSS container. The named state machine automatically plays `Idle`.
Pixel density is capped at 2. Rendering pauses offscreen and in hidden tabs;
the pause button also stops rendering. Reduced motion shows the original
resting SVG, avoids loading the `.riv` and WASM initially, and responds to live
preference changes. Loading failures and disabled JavaScript retain the still.

## Rig and animation

The original shared coordinate space is retained without scaling or recentering.
Compositing order, back to front: `Background`, `CatTail`, `CatBody`.
RML lists these in reverse because Rive draws the first sibling on top.

The cat body was refined against the supplied reference: softer head and paw
contours, finer whiskers, a smaller inner ear and restrained underside shading.
The supplied plant is placed at (780, 826) with uniform scale 1.05, preserving
its colors and proportions. A muted cast shadow offsets left 13 px/down 7 px;
a 16% opaque contact shadow anchors the pot to the sill. Both are editable
vector paths, without runtime blur or image filters. To regenerate the plant
and poster, run `python3 tools/update_plant.py` before rebuilding the scene.

The uploaded body used a different artboard; its coordinates were restored by
adding 546 to Y, retaining the original scene alignment and tail overlap.

SVG paths become native Rive paths. Cubic SVG curves are retained exactly.
Quadratic curves convert mathematically
to cubic curves; fills, strokes and gradients retain their original values.
The SVG blinds pattern expands into native clipped rectangles. Every visible
element can be edited after exporting the editor document; no layer is a bitmap.

The tail has two separately skinned paths (cream silhouette and tan underside),
bound to the same three-bone chain:

| Bone | Bind origin | Peak local rotation | Animated |
| --- | --- | --- | --- |
| TailRoot | (480, 1000), points left | 180° bind orientation | No |
| TailMiddle | (400, 1000) | +0.14 radians / 8.02° | Yes |
| TailTip | (320, 1000) | +0.26 radians / 14.90° | Yes |

Weights interpolate continuously along X, including independent cubic handles.
Both contours use the same influence field. The fixed root stays covered by
the stationary body. Neither the body nor background has keyed properties.

`Idle`: 60 fps, 180 frames, loop enabled. At frames 0 and 180 both animated
rotations are zero; at frame 90 they reach their peak. Both segments use
cubic ease-in-out (0.42, 0, 0.58, 1), with zero endpoint velocity.
`CatStateMachine` is the default state machine; its Entry transitions directly
to an AnimationState referencing `Idle`. No runtime input is required.

## Preview and rebuild with the official CLI

Install the official CLI using the instructions at
https://rive.app/docs/cli/overview. This project was built with version 1.7.0.
From this directory:

```sh
rive .                         # native preview, rebuilds as source changes
rive . --verify                # compile validation
rive inspect . --summary       # structure, wiring and skinning validation
rive . --once                  # creates build/cat-window.riv
cp build/cat-window.riv cat-window.riv
```

To regenerate RML from the original SVGs, run `python3 tools/build_scene.py`,
then verify, inspect and rebuild. Regeneration replaces `scene.rml`, including
hand edits. Keep later editor changes in the editor document or a separate
source copy.

## Rive Editor handoff — one manual authentication step remains

**No `.rev` file is included.** The CLI reported `Not logged in` (exit 3)
when editor export was attempted. The supported `.rev` export requires a
Rive account session. The runtime `.riv` already works on the web: signing is
unnecessary for this project because it contains no scripts.

After signing in, from this directory run:

```sh
rive login
rive . --once --rev=cat-window.rev
```

Then open/import `cat-window.rev` in the Rive Editor. Select `CatWindow`, switch
to Animate, and select `Idle` or `CatStateMachine`. Paths, fills, bones, weights,
keyframes and state-machine wiring are native editable objects. Confirm the
rig at frames 0, 90 and 180, then save your editor document. No manual rigging
or animation construction is required. The editor import itself has not been
validated in this delivery because the authenticated export was unavailable.

If you change the illustration in the editor, update the static poster as well.
Export the runtime asset again after editing and retest the integration.

## Validation completed

- Official CLI verify and inspect: zero errors, zero warnings, no problems.
- Compiled binary reimported by the CLI and loaded by the official web runtime.
- Browser confirms `Idle`, `CatStateMachine` and 1280 × 1280 bounds.
- 720 px desktop canvas and 351 px mobile canvas: no aspect distortion/overflow.
- Pause/resume, reduced-motion preference changes, and initial reduced-motion
  loading behavior checked in headless Chrome. No application errors.
- Rest/curl pixel differences occur only within X 262–452, Y 978–1031;
  there are zero changed pixels outside the tail region.
- The post-entry full-loop capture at CLI step 181 matches the resting capture
  pixel-for-pixel (zero differing channels). Entry consumes the first CLI step.
- Resting render compared with the updated SVG composite: mean absolute
  channel difference 0.114 on a 0–255 scale. Different renderers produce small
  antialiasing/gradient rounding differences; this is not a pixel-identical SVG
  renderer conversion.

Primary references: [Rive CLI](https://rive.app/docs/cli/overview),
[official web runtime](https://rive.app/docs/runtimes/web/web-js),
[runtime API](https://rive.app/docs/runtimes/web/rive-parameters).

Runtime asset SHA-256:
`c10cad73a6f70820685c7632b861385fd9024dfbeb7e3e41af9d1f593c4b7598`
