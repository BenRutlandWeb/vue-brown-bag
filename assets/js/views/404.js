export default {
  template: `
<div class="content">

  <app-img src="https://www.pngkit.com/png/full/930-9306501_404-graphic-design.png" fluid alt="" />

  <h1>404: Page not found</h1>
  <p>The page you were looking for can't be found.</p>
  <router-link :to="{name:'Home'}">Home</router-link>

</div>
`
};
