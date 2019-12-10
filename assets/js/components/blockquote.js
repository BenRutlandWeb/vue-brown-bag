export default {
  template: `
<blockquote>
  <slot />
  <div class="flex align-center mt-1">
    <slot name="cite" />
  </div>
</blockquote>
`
};
