<template>

    <v-app-bar class="bg-primary" height="90">

        <v-row class="w-100" align="center" justify="center">

            <v-col class="pl-8 pl-md-0 pr-lg-16 mr-lg-16" cols="6" sm="6" lg="6">
                <div class="pr-lg-16 mr-lg-16 w-50">
                    <v-img src="../assets/logo.png" class="mr-sm-16" type="image/webp" height="70" />
                </div>
            </v-col>


            <v-col cols="6" align="right" class="d-sm-none">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn class="mr-3" color="secondary" v-bind="props" icon="mdi-menu">
                        </v-btn>
                    </template>
                    <v-list class="bg-primary">
                        <v-list-item class="text-secondary bg-primary" :href="item.click"
                            @click="redirecionarPara(item)" v-for="(item, index) in itemsMobile" :key="index"
                            :value="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col>

            <v-col cols="6" sm="6" lg="5" class="d-none d-sm-block  pr-sm-10 pr-md-8 pr-lg-0">
                <div class="d-flex justify-space-evenly">
                    <div class="d-sm-none d-md-block">
                        <v-btn href="#home" class="rounded-pill elevation-24" style="border: 1px solid white">
                            <h6 class="font text-secondary font-weight-bold">HOME</h6>
                        </v-btn>
                    </div>

                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn class="rounded-pill elevation-24" v-bind="props" style="border: 1px solid white">
                                <h6 class="font text-secondary font-weight-medium">SOLUÇÕES</h6>
                            </v-btn>
                        </template>
                        <v-list class="bg-primary">
                            <v-list-item class="text-secondary bg-primary" :href="item.click"
                                @click="redirecionarPara(item)" v-for="(item, index) in solutions" :key="index"
                                :value="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn class="rounded-pill elevation-24" v-bind="props" style="border: 1px solid white">
                                <h6 class="font text-secondary">SERVIÇOS</h6>
                            </v-btn>
                        </template>
                        <v-list class="bg-primary">
                            <v-list-item class="text-secondary bg-primary" :href="item.click"
                                @click="redirecionarPara(item)" v-for="(item, index) in services" :key="index"
                                :value="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    
                    <v-btn
                        class="bg-secondary rounded-pill elevation-24 animate__animated animate__pulse animate__infinite"
                        href="#contato">
                        <h6 class="font text-primary">CONTATO</h6>
                    </v-btn>
                </div>
            </v-col>

        </v-row>

    </v-app-bar>
</template>

<style scoped>
.font {
    font-family: "Inter", sans-serif;
}
</style>


<script setup>
const itemsMobile = [
    { title: 'Soluções', click: '#soluçoes' },
    { title: 'Serviços', click: '#serviços' },
    { title: 'Contato', click: '#contato' }
]

const solutions = [
    { title: '+ Leads', click: '#leads' },
    { title: '+ Vendas', click: '#leads' },
    { title: '+ Engajamento', click: '#leads' },
    { title: '+ Experiência', click: '#experiencia' },
    { title: '+ Networking', click: '#experiencia' },
    { title: '+ Visibilidade', click: '#experiencia' }

]

const services = [
    { title: 'Marketing', click: '#inbound' },
    { title: 'Social Media', click: '#social' },
    { title: 'Tráfego Pago', click: '#trafego' }, 
    { title: 'Landing Page', click: '#landing' }
]
</script>