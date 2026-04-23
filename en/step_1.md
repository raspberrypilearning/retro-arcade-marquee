<h2 class="c-project-heading--task">Build the promo sign</h2>

### Step 1

Run your code to see what you start with.

### Step 2

Add the HTML for a marquee sign that will hold your made-up arcade advert.

The animation at the top is already set up in helper files, so begin inside the `promo-zone` section of `index.html`.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 23
line_highlights: 26-28
---
      <section class="promo-zone" aria-labelledby="promo-title">
        <h2 id="promo-title">Your game advert</h2>
        <!-- The marquee is your scrolling advert for an invented arcade game. -->
        <div class="marquee" aria-label="Scrolling arcade advert">
          <p class="marquee-text">NOW PLAYING: LASER HAMSTER XTREME</p>
        </div >
      </section>
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your code. Your page should show the arcade demo at the top and your advert words underneath it.

<div class="c-project-output">
  <img src="images/step_1_output.png" alt="Observed project output after this step.">
</div>
