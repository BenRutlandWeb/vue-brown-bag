export default {
  data() {
    return {
      name: "",
      tel: "",
      email: ""
    };
  },
  template: `
<div class="content">

  <app-img src="https://www.square-cloud.co.uk/storage/app/media/images/contact-us.png" fluid alt="" />

  <h1>Contact</h1>

  <h2>Get in touch</h2>
  <form action="" method="GET">
    <app-input type="text" label="Name" v-model="name" name="name" required>
      <template #start>
        <app-icon>person</app-icon>
      </template>
    </app-input>
    <app-input type="email" label="Email" v-model="email" name="email" required>
      <template #end>
        <app-icon>mail</app-icon>
      </template>
    </app-input>
    <app-input type="text" label="Tel" v-model="tel" name="tel" />
    <app-button type="submit">Submit</app-button>
  </form>

  <h3>Vue updates data instantly</h3>
  <p>Name: {{ name }}</p>
  <p>Email: {{ email }}</p>
  <p>Tel: {{ tel }}</p>
</div>
`
};
