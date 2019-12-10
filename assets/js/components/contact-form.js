export default {
  data() {
    return {
      inputs: {
        name: "",
        tel: "",
        email: ""
      }
    };
  },
  updated() {
    this.$emit("change", this.inputs);
  },
  template: `
<form action="" method="GET">

  <app-input type="text" label="Name" v-model="inputs.name" name="name" required>
    <template #start>
      <app-icon>person</app-icon>
    </template>
  </app-input>

  <app-input type="email" label="Email" v-model="inputs.email" name="email" required>
    <template #end>
      <app-icon>mail</app-icon>
    </template>
  </app-input>

  <app-input type="text" label="Tel" v-model="inputs.tel" name="tel" />

  <app-button type="submit">Submit</app-button>

</form>
`
};
