<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route">
          <!-- ícone -->
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <!-- texto  -->
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer=!drawer" />
      <v-toolbar-title>Admin App Frases</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        {
          title: "Categoria",
          icon: "mdi-card-text-outline",
          route: "/categoria"
        },
        { title: "Frases", icon: "mdi-card-text-outline", route: "/frase" },
        { title: "Usuario", icon: "mdi-account", route: "/usuario" }
      ],
      right: null
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
