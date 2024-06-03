<template>
  <div class="d-flex justify-center" id="home">

    <video class="background-video h-25 w-100" autoplay loop muted playsinline>
      <source :src="videoSource" type="video/mp4">
    </video>

    <div class="w-100 mt-md-10 mt-16 pt-sm-10" style="position: absolute; line-height: normal;" align="center">

      <h3 class="font text-white font-weight-bold text-sm-h4 mt-sm-10 mt-md-16 pt-md-16 text-md-h3 text-lg-h2">TE
        AJUDAMOS A
        <span class="text-secondary">VENDER
          MAIS</span>!
      </h3>

      <h6 class="font text-white font-weight-light mt-1 d-sm-none" style="font-size: 38%;">SE <span
          class="font-weight-bold">POSICIONE</span> NO
        MERCADO E
        SE <span class="font-weight-bold">DESTAQUE</span> ATRAVÉS DO <span
          class="text-secondary font-weight-bold">MARKETING DIGITAL</span></h6>


      <h6 class="font text-white font-weight-light mt-1 d-none d-md-none d-sm-block" style="font-size: 10px">SE <span
          class="font-weight-bold">POSICIONE</span> NO
        MERCADO E
        SE <span class="font-weight-bold">DESTAQUE</span> ATRAVÉS DO <span
          class="text-secondary font-weight-bold">MARKETING DIGITAL</span></h6>

      <h6 class="font text-white font-weight-light mt-1 mt-lg-3 d-none d-md-block text-lg-h6" style="font-size: 14px">SE
        <span class="font-weight-bold">POSICIONE</span> NO
        MERCADO E
        SE <span class="font-weight-bold">DESTAQUE</span> ATRAVÉS DO <span
          class="text-secondary font-weight-bold">MARKETING DIGITAL</span>
      </h6>



      <v-btn class="mt-16 rounded-pill w-25 bg-secondary d-lg-block d-none" height="80px" size="x-large"
        href="#inbound">
        <h6 class="text-primary font-weight-bold d-none d-md-block" style="font-size: 110%; line-height: 80px;">CONHECER
        </h6>
      </v-btn>


      <v-btn class="mt-3 rounded-pill w-25 bg-secondary mt-sm-10 d-none d-sm-block d-lg-none" size="large"
        href="#inbound">
        <h6 class="text-primary font-weight-bold d-md-none" style="font-size: 80%; line-height: 45px;">CONHECER</h6>

        <h6 class="text-primary font-weight-bold d-none d-md-block" style="font-size: 105%; line-height: 45px;">CONHECER
        </h6>
      </v-btn>

      <v-btn class="mt-3 rounded-pill w-50 bg-secondary mt-sm-10 w-sm-25 d-sm-none" href="#inbound">
        <h6 class="text-primary font-weight-bold d-md-none" style="font-size: 80%;">CONHECER</h6>

        <h6 class="text-primary font-weight-bold d-none d-md-block" style="font-size: 105%;">CONHECER</h6>
      </v-btn>
    </div>
  </div>
</template>



<style scoped>
.font {
  font-family: "Inter", sans-serif;
}

#home {
  scroll-margin-top: 100px;
}
</style>

<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay()
const videoSource = '/videohome.mp4';
</script>