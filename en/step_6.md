<h2 class="c-project-heading--task">Challenge</h2>

Add the last dramatic text effects, then change the message to advertise your own ridiculous game.

### Step 1

First, finish the `.marquee-text` rule in `marquee.css`.

<div class="c-project-code">

--- code ---
---
language: css
filename: marquee.css
line_numbers: true
line_number_start: 10
line_highlights: 20-23
---
.marquee-text {
  display: inline-block;
  min-width: max-content;
  margin: 0;
  white-space: nowrap;
  animation: scroll-left 11s linear infinite;
  padding: 18px 0;
  color: #ffffff;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-shadow: 3px 3px 0 var(--pink), 6px 6px 0 var(--purple);
  text-transform: uppercase; 
}
--- /code ---
</div>

### Step 2

Open `index.html`

### Step 3

Update the promo text to advertise your favourite game!

<div class="c-project-code">
--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 21
line_highlights: 23
---
        <div class="marquee" aria-label="Scrolling arcade advert">
          <p class="marquee-text">
            NOW PLAYING: LASER HAMSTER XTREME &#9889; WIN THE GALAXY &#9889; FREE LASERS WITH EVERY MOON BURGER
          </p>
        </div >
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Your marquee should now look loud and dramatic, and the words should advertise your own arcade game idea.

<div class="c-project-output">
  <img src="images/step_6_output.png" alt="Observed project output after this step.">
</div>
