<template>
  <v-app>
    <v-main>
      <NavBar />
      <Home />
      <Solutions />
      <Services />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Home from '@/components/Home.vue'
import Solutions from '@/components/Solutions.vue'
import Services from '@/components/Services.vue'
import Footer from '@/components/Footer.vue'
</script>
