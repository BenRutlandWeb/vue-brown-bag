export default {
  // v-model requires a value prop
  props: {
    value: {
      required: true
    },
    // pass a label to the component
    label: {
      type: String
    }
  },
  // v-model requires an input event to emit the value back to the parent
  methods: {
    input({ target }) {
      this.$emit("input", target.value);
    }
  },
  template: `
<label class="input">
  <div class="input__label">{{ label }}</div>
  <div class="input__flex">
    <slot name="start" />
    <input v-bind="$attrs" @input="input" :value="value" class="input__field" />
    <slot name="end" />
  </div>
</label>
`
};
