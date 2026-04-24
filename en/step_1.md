<h2 class="c-project-heading--task">Add the promo text</h2>

Add a scrolling advert area above the arcade demo.

`marquee.css` is already linked in the page, so begin by putting the marquee HTML inside the `promo-zone` section of `index.html`.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 18
line_highlights: 21-22
---
      <section class="promo-zone" aria-labelledby="promo-title">
        <h2 id="promo-title">Promo:</h2>
        <!-- Add your scrolling promo inside this section. -->
        <div class="marquee" aria-label="Scrolling arcade advert">
          <p class="marquee-text">Now playing: Laser Hamster Xtreme</p>
        </div >
      </section>
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Your promo words should appear above the retro invaders demo.

<div class="c-project-output">
  <img src="images/step_1_output.png" alt="Observed project output after this step.">
</div>
