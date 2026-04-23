<h2 class="c-project-heading--task">Turn up the arcade style</h2>

Add loud colours, chunky letters, and glowing borders so the marquee feels like a real arcade advert.

Update your marquee rules in `style.css` with bright colours, shadow, and a bold display font.

<div class="c-project-code">

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 126
line_highlights: 130-133,143-150
---
.marquee {
  width: 100%;
  overflow: hidden;
  border: 6px double var(--yellow);
  background: #050014;
  box-shadow: 0 0 18px var(--pink), inset 0 0 18px rgba(255, 223, 77, 0.25);
  transform: rotate(-1deg);
}

.marquee-text {
  display: inline-block;
  min-width: max-content;
  margin: 0;
  padding: 18px 0;
  color: #ffffff;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0;
  text-shadow: 3px 3px 0 var(--pink), 6px 6px 0 var(--purple);
  text-transform: uppercase;
  white-space: nowrap;
  animation: scroll-left 11s linear infinite;
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Your advert should look bright, chunky, and louder than the rest of the page.

<div class="c-project-output">
  <img src="images/step_3_output.png" alt="Observed project output after this step.">
</div>
