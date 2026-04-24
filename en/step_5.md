<h2 class="c-project-heading--task">Style the letters</h2>

Make the words brighter, bigger, and easier to read.

Now update the `.marquee-text` rule in `marquee.css`.

<div class="c-project-code">

--- code ---
---
language: css
filename: marquee.css
line_numbers: true
line_number_start: 11
line_highlights: 15-18
---
.marquee-text {
  display: inline-block;
  min-width: max-content;
  margin: 0;
  padding: 18px 0;
  color: #ffffff;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 2rem;
  white-space: nowrap;
  animation: scroll-left 11s linear infinite;
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

The message should look larger and brighter as it scrolls past.

<div class="c-project-output">
  <img src="images/step_5_output.png" alt="Observed project output after this step.">
</div>
