export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  template: `
<app-img :src="src" :alt="alt" class="avatar" />
`
};
