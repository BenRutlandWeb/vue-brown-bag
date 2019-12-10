export default {
  template: `
<button class="button" v-on="$listeners" v-bind="$attrs">
  <slot />
</button>
`
};
