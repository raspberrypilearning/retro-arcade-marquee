<h2 class="c-project-heading--task">Make the words move</h2>

Create a modern CSS version of the old scrolling marquee effect.

The old HTML `<marquee>` tag is deprecated, so use `animation` and `@keyframes` in `style.css` to make the text travel across the sign.

Add this code to the bottom of the `style.css` file.

<div class="c-project-code">

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 182
line_highlights: 
---
/* This animation moves the advert text across the sign. */
.marquee {
  width: 100%;
  overflow: hidden;
}

.marquee-text {
  display: inline-block;
  min-width: max-content;
  margin: 0;
  white-space: nowrap;
  animation: scroll-left 11s linear infinite;
}

@keyframes scroll-left {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your code. Your message should slide from the right side of the sign to the left.

<div class="c-project-output">
  <img src="images/step_2_output.png" alt="Observed project output after this step.">
</div>
