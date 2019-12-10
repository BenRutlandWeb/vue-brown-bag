export default {
  props: {
    title: {
      type: String
    }
  },
  template: `
<header class="header">

  <app-img src="https://vuejs.org/images/logo.png" alt="" class="header__logo" />

  <router-link :to="{ name: 'Home' }" class="header__title-link">
    <h1 class="header__title">{{ title }}</h1>
  </router-link>

  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }"><app-icon>home</app-icon></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </li>
    </ul>
  </nav>

</header>
`
};
