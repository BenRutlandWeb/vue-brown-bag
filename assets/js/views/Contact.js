import ContactForm from "../components/contact-form.js";

export default {
  components: {
    ContactForm
  },
  data() {
    return {
      inputs: {
        name: "",
        tel: "",
        email: ""
      }
    };
  },
  methods: {
    updateData(data) {
      this.inputs = data;
    }
  },
  template: `
<div class="content">

  <app-img src="https://www.square-cloud.co.uk/storage/app/media/images/contact-us.png" fluid alt="" />

  <h1>Contact</h1>

  <h2>Get in touch</h2>
  <contact-form @change="updateData"></contact-form>

  <h3>Vue updates data instantly</h3>
  <p>Name: {{ inputs.name }}</p>
  <p>Email: {{ inputs.email }}</p>
  <p>Tel: {{ inputs.tel }}</p>
</div>
`
};
