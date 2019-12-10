import rtlMirror from "../mixins/rtlMirror.js";

export default {
  mixins: [rtlMirror],
  template: `
<span :class="['material-icons',{'rtl-mirror':rtlMirror}]">
  <slot />
</span>
`
};
