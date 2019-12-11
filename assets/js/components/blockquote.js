// https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/

export default {
  template: `
<figure class="quote">
  <blockquote>
    <slot />
  </blockquote>
  <figcaption class="flex align-center mt-1">
    <slot name="cite" />
  </figcaption>
</figure>
`
};
