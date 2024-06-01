<template>

    <v-app-bar class="bg-primary" height="80">

        <v-row class="w-100" align="center" justify="center">

            <v-col class="pr-16" cols="6" sm="5">
                <v-img src="../assets/logo.png" class="mr-sm-16" type="image/webp" height="60" />
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

            <v-col cols="6" sm="7" align="right" class="d-none d-sm-block pl-sm-16">
                <div class="d-flex d-none">
                    <v-btn>
                        <h6 class="font-weight-bold">Home</h6>
                    </v-btn>
                    <v-btn>
                        <h6 class="text-secondary font-weight-medium">Soluções</h6>
                    </v-btn>
                    <v-btn>
                        <h6 class="text-secondary">Serviços</h6>
                    </v-btn>
                    <v-btn>
                        <h6 class="text-secondary">Contato</h6>
                    </v-btn>
                </div>
            </v-col>

        </v-row>

    </v-app-bar>
</template>

<script setup>
const itemsMobile = [
    { title: 'Soluções', click: '#soluçoes' },
    { title: 'Serviços', click: '#serviços' },
    { title: 'Contato', click: '#contato' }
]
</script>