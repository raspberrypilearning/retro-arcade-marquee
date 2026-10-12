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
          NOW PLAYING: LASER HAMSTER XTREME
          </p>
        </div >
      </section>
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Your promo text should appear above the retro space shooter demo.

<div class="c-project-output">
  <img src="images/step_1_output.png" alt="A page with the titles &ldquo;CODE CLUB ARCADE&rdquo; and &ldquo;RETRO ARCADE MARQUEE&rdquo; showing a space shooter demo, with the text &ldquo;PROMO:&rdquo;, then the promo text &ldquo;NOW PLAYING: LASER HAMSTER XTREME&rdquo; above the demo. The page background is a dark purple gradient, the titles are yellow and pale yellow, and the promo text is pale yellow.">
</div>
