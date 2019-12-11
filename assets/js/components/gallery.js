import LuminousGallery from "luminous";

export default {
  mounted() {
    new LuminousGallery(
      this.$el.children,
      {},
      {
        sourceAttribute: "src"
      }
    );
  },
  template: `
<div class="gallery">
  <slot />
</div>
`
};
