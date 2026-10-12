<h2 class="c-project-heading--task">Add an arcade glow</h2>

Turn the strip into a realistic arcade sign with a border, a glow, and a slight tilt.

Keep working in the `.marquee` rule in `marquee.css`.

You could experiment with the colours and rotation value to get different effects.

<div class="c-project-code">

--- code ---
---
language: css
filename: marquee.css
line_numbers: true
line_number_start: 2
line_highlights: 6-8
---
.marquee {
  overflow: hidden;
  padding: 8px 0;
  background: #050014;
  border: 6px double var(--yellow);
  box-shadow: 0 0 18px var(--pink), inset 0 0 18px rgba(255, 223, 77, 0.25);
  transform: rotate(-1deg);
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Your marquee should glow and lean a little bit, like an arcade sign.

<div class="c-project-output">
  <img src="images/step_4_output.png" alt="The strip with the promo text now has a yellow border and pink box shadow and runs across the screen at a slight diagonal.">
</div>