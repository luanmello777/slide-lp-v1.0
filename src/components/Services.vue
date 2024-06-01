<template>

    <div class="backcolor bg-primary pt-16 pb-16" align="center" justify="center">

        <div class="mt-5 mb-5 mt-sm-16 mb-sm-16 mt-lg-16 pt-lg-16">
            <h1 class="font text-secondary font-weight-bold text-sm-h2 text-md-h2 text-lg-h1">SERVIÇOS</h1>
        </div>

        <v-row class="w-100 pt-16 mt-sm-16 ml-lg-10">
            <v-col class="pt-lg-16" cols="6">
                <div align="left" style="line-height: normal;">
                    <h5 class="font font-weight-bold text-secondary pt-5 pt-sm-9 pt-md-16 pt-lg-16 mt-lg-16 text-sm-h5 text-md-h4 text-lg-h4"
                        style="line-height: normal;">INBOUND
                    </h5>
                    <h3 class="font font-weight-bold text-sm-h4 text-md-h3 text-lg-h2">MARKETING</h3>
                    <h6 class="text-grey text-sm-h6 text-lg-h5 mt-1 mt-lg-2 font-weight-light">Inbound Marketing é sobre
                        atrair,
                        envolver e
                        converter.<br> Com conteúdo relevante e estratégias de relacionamento, ele transforma estranhos
                        em
                        clientes e defensores da marca.</h6>

                    <div class="mt-4 d-sm-flex">
                        <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-btn v-bind="activatorProps, props"
                                            :color="isHovering ? 'secondary' : 'transparent'"
                                            class="rounded-pill w-100 w-sm-25 elevation-24"
                                            style="border: 2px solid #72FFFF;" size="large">
                                            <h6 style="font-size: 60%;">SAIBA MAIS</h6>
                                        </v-btn>
                                    </template>
                                </v-hover>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card class="bg-primary rounded-xl">
                                    <v-card-text>
                                        <h1 class="text-white font-weight-bold">MARKETING</h1>
                                        <p class="text-secondary">Combinamos produção de conteúdo e tráfego pago para
                                            atrair e converter leads de maneira eficaz. Criamos conteúdo de alta
                                            qualidade, como posts, vídeos e landing pages que abordam os interesses e
                                            problemas do público-alvo. Em seguida, promovemos esse conteúdo usando
                                            anúncios pagos em plataformas como Google Ads e Meta Ads, alcançando um
                                            público mais amplo e segmentado.</p>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn class="text-white rounded-xl" text="Voltar"
                                            @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>

                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn v-bind="props" :color="isHovering ? 'transparent' : 'secondary'"
                                    href="https://wa.me/8499584725" target="_blank" style="border: 2px solid #72FFFF;"
                                    class="rounded-pill w-100 w-sm-50 mt-3 mt-sm-0 ml-sm-5 animate__animated animate__pulse animate__infinite"
                                    size="large">
                                    <h6 class="font-weight-bold">CONSULTAR</h6>
                                </v-btn>
                            </template>
                        </v-hover>
                    </div>
                </div>
            </v-col>

            <v-col cols="6">
                <div>
                    <v-img src="/marketing.png" type="image/webp" />
                </div>
            </v-col>
        </v-row>


        <v-row class="w-100 pt-16 mt-10 mt-sm-16">
            <v-col cols="6">
                <div>
                    <v-img src="/social.png" type="image/webp" />
                </div>
            </v-col>

            <v-col class="pt-lg-16" cols="6">
                <div align="left" style="line-height: normal;">
                    <h5 class="font font-weight-bold text-quartiary pt-5 pt-sm-9 pt-md-16 pt-lg-16 mt-lg-8 text-sm-h5 text-md-h4 text-lg-h4"
                        style="line-height: normal;">PRODUÇÃO
                    </h5>
                    <h3 class="font font-weight-bold text-sm-h4 text-md-h3 text-lg-h2">SOCIAL MEDIA</h3>
                    <h6 class="font text-grey text-sm-h6 text-lg-h5 mt-1 mt-lg-2 font-weight-light"> Cada postagem,
                        vídeo ou
                        informativo é uma oportunidade de ouro para cativar, educar e
                        inspirar. É a
                        chance de criar um
                        vínculo
                        genuíno com sua audiência.</h6>
                </div>

                <div class="mt-4 d-sm-flex">
                    <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-hover>
                                <template v-slot:default="{ isHovering, props }">
                                    <v-btn v-bind="activatorProps, props"
                                        :color="isHovering ? 'quartiary' : 'transparent'"
                                        class="rounded-pill w-100 w-sm-25 elevation-24"
                                        style="border: 2px solid #DC3657;" size="large">
                                        <h6 style="font-size: 60%;">SAIBA MAIS</h6>
                                    </v-btn>
                                </template>
                            </v-hover>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card class="bg-primary rounded-xl">
                                <v-card-text>
                                    <h1 class="text-white font-weight-bold">SOCIAL MEDIA</h1>
                                    <p class="text-quartiary">Criamos posts, vídeos, e stories que abordam
                                        os interesses e problemas do público-alvo nas redes sociais como Facebook,
                                        Instagram, LinkedIn e Twitter. Esse conteúdo é otimizado para gerar engajamento
                                        e compartilhamentos, ampliando seu alcance orgânico. Ao construir uma presença
                                        ativa e valiosa nas redes sociais, atraímos seguidores, fomentamos
                                        relacionamentos e conduzimos esses leads pelo funil de vendas, convertendo-os em
                                        clientes leais.</p>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn class="text-white rounded-xl" text="Voltar"
                                        @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>

                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn v-bind="props" :color="isHovering ? 'transparent' : 'quartiary'"
                                href="https://wa.me/8499584725" target="_blank" style="border: 2px solid #DC3657;"
                                class="rounded-pill w-100 w-sm-50 mt-3 mt-sm-0 ml-sm-5 animate__animated animate__pulse animate__infinite"
                                size="large">
                                <h6 class="font-weight-bold">CONSULTAR</h6>
                            </v-btn>
                        </template>
                    </v-hover>
                </div>
            </v-col>
        </v-row>


        <v-row class="w-100 pt-16 mt-10 mt-sm-16 ml-lg-10">
            <v-col class="pt-lg-16" cols="6">
                <div align="left" style="line-height: normal;">
                    <h5 class="font font-weight-bold text-secondary pt-5 pt-sm-9 pt-md-16 pt-lg-16 mt-lg-16 text-sm-h5 text-md-h4 text-lg-h4"
                        style="line-height: normal;">GESTÃO</h5>
                    <h3 class="font font-weight-bold text-sm-h4 text-md-h3 text-lg-h2">TRAFEGO PAGO</h3>
                    <h6 class="font text-grey text-sm-h6 text-lg-h5 mt-1 mt-lg-2 font-weight-light">É a arte de
                        direcionar
                        estrategicamente
                        o fluxo
                        de visitantes. <br class="d-none d-lg-block">A principal vantagem do tráfego
                        pago é a
                        capacidade de segmentação precisa, permitindo atingir públicos específicos.
                    </h6>
                </div>

                <div class="mt-4 d-sm-flex">
                    <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-hover>
                                <template v-slot:default="{ isHovering, props }">
                                    <v-btn v-bind="activatorProps, props"
                                        :color="isHovering ? 'secondary' : 'transparent'"
                                        class="rounded-pill w-100 w-sm-25 elevation-24"
                                        style="border: 2px solid #72FFFF;" size="large">
                                        <h6 style="font-size: 60%;">SAIBA MAIS</h6>
                                    </v-btn>
                                </template>
                            </v-hover>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card class="bg-primary rounded-xl">
                                <v-card-text>
                                    <h1 class="text-white font-weight-bold">TRÁFEGO PAGO</h1>
                                    <p class="text-secondary">A gestão de tráfego
                                        envolve
                                        a análise profunda de dados, a segmentação precisa do público-alvo e a
                                        otimização contínua das
                                        campanhas para maximizar o retorno sobre o investimento. A segmentação precisa
                                        permite que você alcance pessoas que já estão interessadas nos tópicos que você
                                        aborda, aumentando a relevância e a taxa de conversão.</p>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn class="text-white rounded-xl" text="Voltar"
                                        @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>

                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn v-bind="props" :color="isHovering ? 'transparent' : 'secondary'"
                                href="https://wa.me/8499584725" target="_blank" style="border: 2px solid #72FFFF;"
                                class="rounded-pill w-100 w-sm-50 mt-3 mt-sm-0 ml-sm-5 animate__animated animate__pulse animate__infinite"
                                size="large">
                                <h6 class="font-weight-bold">CONSULTAR</h6>
                            </v-btn>
                        </template>
                    </v-hover>
                </div>
            </v-col>

            <v-col cols="6">
                <div>
                    <v-img src="/trafego.png" type="image/webp" />
                </div>
            </v-col>
        </v-row>


        <v-row class="w-100 pt-16 mt-10 mt-sm-16">
            <v-col cols="6">
                <div>
                    <v-img src="/page.png" type="image/webp" />
                </div>
            </v-col>

            <v-col class="pt-lg-16" cols="6">
                <div align="left" style="line-height: normal;">
                    <h5 class="font font-weight-bold text-quartiary pt-5 pt-sm-9 pt-md-16 pt-lg-16 mt-lg-8 text-sm-h5 text-md-h4 text-lg-h4"
                        style="line-height: normal;">CRIAÇÃO
                    </h5>
                    <h3 class="font font-weight-bold text-sm-h4 text-md-h3 text-lg-h2">LANDING PAGE</h3>
                    <h6 class="font text-grey text-sm-h6 text-lg-h5 mt-1 mt-lg-2 font-weight-light">É aqui que a
                        criatividade
                        encontra a estratégia,
                        onde cada
                        palavra e imagem são cuidadosamente escolhidas <br class="d-none d-lg-block"> para transmitir
                        uma
                        mensagem convincente e
                        direcionar os
                        visitantes para o próximo passo.</h6>
                </div>


                <div class="mt-4 d-sm-flex">
                    <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-hover>
                                <template v-slot:default="{ isHovering, props }">
                                    <v-btn v-bind="activatorProps, props"
                                        :color="isHovering ? 'quartiary' : 'transparent'"
                                        class="rounded-pill w-100 w-sm-25 elevation-24"
                                        style="border: 2px solid #DC3657;" size="large">
                                        <h6 style="font-size: 60%;">SAIBA MAIS</h6>
                                    </v-btn>
                                </template>
                            </v-hover>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card class="bg-primary rounded-xl">
                                <v-card-text>
                                    <h1 class="text-white font-weight-bold">LANDING PAGE</h1>
                                    <p class="text-quartiary">Desenvolvemos landing pages otimizadas com um design
                                        atraente (responsivo), tecnologias funcionais,
                                        chamadas para ação claras e formulários simples. Promovemos as landing pages
                                        através de conteúdo orgânico e tráfego pago, direcionando um público segmentado
                                        para essas páginas. Isso permite capturar leads qualificados, que podem ser
                                        nutridos posteriormente com conteúdo relevante, movendo-os ao longo do funil de
                                        vendas até a conversão.</p>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn class="text-white rounded-xl" text="Voltar"
                                        @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>

                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn v-bind="props" :color="isHovering ? 'transparent' : 'quartiary'"
                                href="https://wa.me/8499584725" target="_blank" style="border: 2px solid #DC3657;"
                                class="rounded-pill w-100 w-sm-50 mt-3 mt-sm-0 ml-sm-5 animate__animated animate__pulse animate__infinite"
                                size="large">
                                <h6 class="font-weight-bold">CONSULTAR</h6>
                            </v-btn>
                        </template>
                    </v-hover>
                </div>
            </v-col>
        </v-row>


        <v-row class="w-100 pt-16 mt-10">
            <v-col cols="12">
                <div>
                    <v-img src="/setadupla.png" type="image/webp" style="height: 30px;" />
                </div>
            </v-col>

            <v-col>

            </v-col>
        </v-row>


        <v-row class="w-100 pt-16 mt-10 mt-lg-16" justify="center">

            <v-col cols="12" sm="6">
                <div align="left">
                    <div style="line-height: normal;">
                        <h1 class="font ml-3 font-weight-bold text-sm-h4 text-md-h3 text-lg-h2">COMO PODEMOS</h1>
                        <h1 class="font ml-3 font-weight-bold text-sm-h4 text-md-h3 text-lg-h2">TE AJUDAR?</h1>
                    </div>
                    <h5 class="ml-4 mt-4 font-weight-bold text-lg-h6">A <span class="font text-secondary">SOLUÇÃO
                            DIGITAL</span> PARA O SEU
                        NEGÓCIO OU EMPREENDIMENTO</h5>

                    <v-form method="POST" action="https://formsubmit.co/slidetechnologys@gmail.com">
                        <v-container class="mt-lg-10">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" class="rounded-xl">
                                    <v-text-field name="nome" label="Nome" color="secondary"
                                        hint="Informe seu Nome"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field name="email" label="E-mail" placeholder="email@email.com.br"
                                        hint="Informe seu E-mail" color="secondary"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field name="whatsapp" label="WhatsApp" color="secondary"
                                        placeholder="ddd + número" hint="Informe seu WhatsApp"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field name="message" label="Mensagem" color="secondary"
                                        hint="Informe sua Mensagem"></v-text-field>
                                </v-col>
                            </v-row>

                            <input type="hidden" name="_captcha" value="false">

                            <div align="center">
                                <v-btn type="submit"
                                    class="bg-secondary w-75 w-lg-50 mt-md-8 rounded-pill animate__animated animate__pulse animate__infinite"
                                    size="large">
                                    <h3 class="text-primary">ENVIAR</h3>
                                </v-btn>
                            </div>
                        </v-container>
                        <v-snackbar type="hidden" name="_next" v-model="snackbar" :timeout="3000" color="success"
                            value="Formulário enviado com sucesso!">

                        </v-snackbar>
                    </v-form>
                </div>
            </v-col>

            <v-col cols="12" sm="6">
                <div class="mt-16">
                    <v-img src="/iphone.png" type="image/webp" :class="smAndDown ? '' : 'w-75'" />
                </div>

                <div class="d-flex justify-space-evenly mt-10">
                    <v-btn class="bg-transparent elevation-2" style="border: 2px solid #72FFFF;"
                        href="https://www.facebook.com/profile.php?id=61559094414497" target="_blank" flat
                        icon="mdi-facebook" color="primary"></v-btn>

                    <v-btn class="bg-transparent elevation-2" style="border: 2px solid #72FFFF;"
                        href="https://www.instagram.com/slide.technology/" target="_blank" flat icon="mdi-instagram"
                        color="primary"></v-btn>

                    <v-btn class="bg-transparent elevation-2" style="border: 2px solid #72FFFF;"
                        href="https://wa.me/8499584725" target="_blank" flat icon="mdi-whatsapp"
                        color="primary"></v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.font {
    font-family: "Inter", sans-serif;
}

.backcolor {
    background: linear-gradient(300deg, #72FFFF, #000A14, #000A14);
    background-size: 180% 180%;
    animation: gradient-animation 15s ease infinite;
}

@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>


<script setup>
import { useDisplay } from 'vuetify';


const { smAndDown } = useDisplay()
</script>
