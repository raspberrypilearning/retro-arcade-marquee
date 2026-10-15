<h2 class="c-project-heading--task">Add the promo text</h2>

Add a scrolling advert area above the arcade game demo.

`marquee.css` is already linked in the page, so start by putting the HTML for the marquee inside the `promo-zone` section of `index.html`.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 18
line_highlights: 21-25
---
      <section class="promo-zone" aria-labelledby="promo-title">
        <h2 id="promo-title">Promo:</h2>
        <!-- Add your scrolling promo inside this section. -->
        <div class="marquee" aria-label="Scrolling arcade advert">
          <p class="marquee-text">
          Now playing: Laser Hamster Xtreme
          </p>
        </div >
      </section>
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Your promo text should appear above the retro space shooter demo.

<div class="c-project-output">
  <img src="images/step_1_output.png" alt="A page with the titles “CODE CLUB ARCADE” and “RETRO ARCADE MARQUEE” showing a space shooter demo, with the text “PROMO:”, then the promo text “Now playing: Laser Hamster Xtreme” above the demo. The page background is a dark purple gradient, the titles are yellow and pale yellow, and the promo text is pale yellow.">
</div>
