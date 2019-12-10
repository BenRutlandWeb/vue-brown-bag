export default {
  props: {
    cite: {
      type: String
    },
    src: {
      type: String
    }
  },
  template: `
<app-blockquote>
  <slot />
  <template #cite>
    <app-avatar class="mr-1" :src="src" :alt="cite" v-if="src" />
    <app-cite>{{ cite }}</app-cite>
  </template>
</app-blockquote>
`
};
