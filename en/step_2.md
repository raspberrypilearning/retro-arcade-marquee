<h2 class="c-project-heading--task">Make the words scroll</h2>

Use CSS animation to move the promo text from right to left.

Add your first marquee rules to `marquee.css`.

### Step 1

Open `marquee.css`.

### Step 2

Add the CSS code.

Try changing the animation speed (on line 11). 

<div class="c-project-code">

--- code ---
---
language: css
filename: marquee.css
line_numbers: true
line_number_start: 1
line_highlights: 2-23
---
/* Add your scrolling marquee styles in this file. */
.marquee {
  overflow: hidden;
}

.marquee-text {
  display: inline-block;
  min-width: max-content;
  margin: 0;
  white-space: nowrap;
  animation: scroll-left 11s linear infinite;
}

/* Move the whole message across the sign. */
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

Your promo text should slide across the page above the arcade game demo.

<div class="c-project-output">
  <img src="images/step_2_output.png" alt="The space shooter demo page with the promo text “Now playing: Laser Hamster Xtreme” scrolling across the page from right to left above the demo.">
</div>
