<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Admin</v-list-item-title>
        <v-list-item-subtitle>App Frases</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.route">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        {
          title: "Categoria",
          icon: "mdi-card-text-outline",
          route: "/categoria"
        },
        { title: "Frases", icon: "mdi-card-text-outline", route: "/frases" },
        { title: "Usuario", icon: "mdi-account", route: "/usuario" }
      ],
      right: null
    };
  }
};
</script>