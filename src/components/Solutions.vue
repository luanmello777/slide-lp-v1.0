<template>
    <div class="bg-primary pt-2 pb-lg-16" align="center" justify="center">
        <v-img src="/setaup.png" type="image/webp" style="height: 20px;" />

        <div class="mt-12 mt-lg-16 pt-lg-16" style="line-height: normal;">
            <h1 class="font text-sm-h3 text-md-h2 font-weight-bold text-lg-h1">MARKETING</h1>
            <h1
                class="text-secondary text-sm-h3 text-md-h2 text-lg-h1 font-weight-bold animate__animated animate__pulse animate__infinite">
                +
            </h1>
            <h1 class="font text-sm-h3 text-md-h2 font-weight-bold text-lg-h1">TECNOLOGIA</h1>

            <h6 class="font d-sm-none" style="font-size: 39%;">A <span class="font text-secondary">SOLUÇÃO
                    DIGITAL</span> PARA O SEU NEGÓCIO OU
                EMPREENDIMENTO</h6>

            <h6 class="font d-none d-sm-block d-md-none" style="font-size: 60%;">A <span
                    class="font text-secondary">SOLUÇÃO
                    DIGITAL</span> PARA O SEU NEGÓCIO OU
                EMPREENDIMENTO</h6>

            <h6 class="font d-none d-md-block d-lg-none" style="font-size: 75%;">A <span
                    class="font text-secondary">SOLUÇÃO
                    DIGITAL</span> PARA O SEU NEGÓCIO OU
                EMPREENDIMENTO</h6>

            <h6 class="font d-none d-lg-block mt-2" style="font-size: 115%;">A <span class="font text-secondary">SOLUÇÃO
                    DIGITAL</span> PARA O SEU NEGÓCIO OU
                EMPREENDIMENTO</h6>
        </div>

        <div align="center" justify="center">
            <v-row class="w-100 mt-16 pt-2 mt-sm-16 pt-sm-16" align="center" justify="center">
                <v-col class="mt-5" cols="6" lg="3">
                    <div class="rounded-xl pb-5 elevation-24" style="border: 1px solid #72FFFF;">
                        <v-img class="w-75" src="/leads.png" type="image/webp" />

                        <h4 class="text-secondary text-sm-h4 text-lg-h3 font-weight-bold">Leads</h4>
                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">
                            Aumente vendas</h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">Capture leads<br>
                        </h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;"> Converta
                            visitantes</h6>

                        <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-btn v-bind="activatorProps, props"
                                            :color="isHovering ? 'secondary' : 'primary'"
                                            class="bg-transparent text-white elevation-24 rounded-pill mt-5 w-75 mb-md-3"
                                            style="border: 1px solid white;" size="large">
                                            <h6 class="">SAIBA MAIS</h6>
                                        </v-btn>
                                    </template>
                                </v-hover>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card class="bg-primary rounded-xl">
                                    <v-card-text>
                                        <h1 class="text-secondary font-weight-bold">Leads</h1>
                                        Leads qualificados são a chave para o crescimento do seu negócio. Eles são
                                        potenciais clientes prontos para comprar, permitindo campanhas de marketing
                                        personalizadas, redução de custos e construção de relacionamentos duradouros.
                                        Invista em leads e garanta um fluxo contínuo de oportunidades e aumento de
                                        receita.
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn class="text-secondary rounded-xl" text="Voltar"
                                            @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </div>
                </v-col>

                <v-col class="mt-5" cols="6" lg="3">
                    <div class="rounded-xl pb-5 elevation-24" style="border: 1px solid white;">
                        <v-img class="w-75" src="/vendas.png" type="image/webp" />

                        <h4 class="text-secondary text-sm-h4 text-lg-h3 font-weight-bold">Vendas</h4>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;"> Impulsione
                            conversões <br></h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;"> Maximize
                            lucros<br></h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">Venda mais</h6>

                        <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-btn v-bind="activatorProps, props"
                                            :color="isHovering ? 'secondary' : 'primary'"
                                            class="bg-transparent text-white elevation-24 rounded-pill mt-5 w-75 mb-md-3"
                                            style="border: 1px solid #72FFFF;" size="large">
                                            <h6 class="">SAIBA MAIS</h6>
                                        </v-btn>
                                    </template>
                                </v-hover>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card class="bg-primary rounded-xl">
                                    <v-card-text>
                                        <h1 class="text-secondary font-weight-bold">Vendas</h1>
                                        Venda mais ao identificar oportunidades de crescimento e otimizar cada etapa do
                                        processo de vendas. Ao priorizar a eficiência e a necessidade do cliente, você
                                        não só impulsiona as conversões, mas também aumenta os lucros, garantindo o
                                        sucesso contínuo do seu negócio.
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn class="text-secondary rounded-xl" text="Voltar"
                                            @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </div>
                </v-col>

                <v-col class="mt-10 mt-lg-5" cols="6" lg="3">
                    <div class="rounded-xl pb-5 elevation-24" style="border: 1px solid #72FFFF;">
                        <v-img class="w-75" src="/engajamento.png" type="image/webp" />

                        <h4 class="text-secondary text-sm-h4 text-lg-h3 font-weight-bold">Engajamento</h4>
                        <h6 class=" text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">
                            Envolva clientes<br></h6>

                        <h6 class=" text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;"> Aumente
                            interações<br></h6>

                        <h6 class=" text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">Fidelize
                            audiência</h6>

                        <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-btn v-bind="activatorProps, props"
                                            :color="isHovering ? 'secondary' : 'primary'"
                                            class="bg-transparent text-white elevation-24 rounded-pill mt-5 w-75 mb-md-3"
                                            style="border: 1px solid white;" size="large">
                                            <h6 class="">SAIBA MAIS</h6>
                                        </v-btn>
                                    </template>
                                </v-hover>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card class="bg-primary rounded-xl">
                                    <v-card-text>
                                        <h1 class="text-secondary font-weight-bold">Engajamento</h1>
                                        O engajamento é essencial para o crescimento do seu negócio. Clientes
                                        engajados não só compram mais, mas também promovem sua marca e permanecem leais.
                                        Ao investir em estratégias de engajamento, você fortalece esses relacionamentos
                                        e
                                        impulsiona um crescimento contínuo.
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn class="text-secondary rounded-xl" text="Voltar"
                                            @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </div>
                </v-col>

                <span class="d-none d-lg-block text-transparent">'</span>

                <v-col class="mt-10" cols="6" lg="3">
                    <div class="rounded-xl pb-5 elevation-24" style="border: 1px solid white;">
                        <v-img class="w-75" src="/experiencia.png" type="image/webp" />

                        <h4 class="text-secondary text-sm-h4 text-lg-h3 font-weight-bold">Experiência</h4>
                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">
                            Experiência única<br></h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">Navegação
                            intuitiva<br></h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">Satisfação
                            garantida</h6>

                        <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-btn v-bind="activatorProps, props"
                                            :color="isHovering ? 'secondary' : 'primary'"
                                            class="bg-transparent text-white elevation-24 rounded-pill mt-5 w-75 mb-md-3"
                                            style="border: 1px solid #72FFFF;" size="large">
                                            <h6 class="">SAIBA MAIS</h6>
                                        </v-btn>
                                    </template>
                                </v-hover>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card class="bg-primary rounded-xl">
                                    <v-card-text>
                                        <h1 class="text-secondary font-weight-bold">Experiência</h1>
                                        Uma experiência positiva não só fideliza clientes, mas também incentiva
                                        recomendações e aumenta o valor de cada compra. Isso resulta em uma satisfação
                                        garantida, onde cada interação
                                        com sua marca é uma experiência memorável.
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn class="text-secondary rounded-xl" text="Voltar"
                                            @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </div>
                </v-col>

                <v-col class="mt-10" cols="6" lg="3">
                    <div class="rounded-xl pb-5 elevation-24"
                        style="border: 1px solid #72FFFF;  animation: pulse 3s infinite alternate;">
                        <v-img class="w-75" src="/definir.png" type="image/webp" />

                        <h4 class="text-secondary text-sm-h4  text-lg-h3 font-weight-bold">Networking Digital</h4>
                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">
                            Conexões Digitais<br></h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">Oportunidades
                            Online<br></h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">Conecte-se e
                            prospere</h6>


                        <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-btn v-bind="activatorProps, props"
                                            :color="isHovering ? 'secondary' : 'primary'"
                                            class="bg-transparent text-white elevation-24 rounded-pill mt-5 w-75 mb-md-3"
                                            style="border: 1px solid white;" size="large">
                                            <h6 class="">SAIBA MAIS</h6>
                                        </v-btn>
                                    </template>
                                </v-hover>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card class="bg-primary rounded-xl">
                                    <v-card-text>
                                        <h1 class="text-secondary font-weight-bold">Networking</h1>
                                        O networking digital é uma peça-chave no cenário atual dos negócios. Ele não
                                        apenas expande sua rede de contatos, mas também abre portas para novas
                                        oportunidades, parcerias e colaborações. Não subestime o poder do networking
                                        digital ele pode ser um dos impulsos que seu negócio precisa para alcançar novos
                                        patamares.
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn class="text-secondary rounded-xl" text="Voltar"
                                            @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </div>
                </v-col>

                <v-col class="mt-10" cols="6" lg="3">
                    <div class="rounded-xl pb-5 elevation-24" style="border: 1px solid white;">
                        <v-img class="w-75" src="/visibilidade.png" type="image/webp" />

                        <h4 class="text-secondary text-sm-h4 text-lg-h3 font-weight-bold">Visibilidade</h4>
                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">
                            Aumente alcance<br></h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">Destacar
                            marca<br>
                        </h6>

                        <h6 class="text-grey text-sm-h6 px-3 text-md-h5 mt-2" style="font-size: 10px;">Visibilidade
                            máxima</h6>

                        <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-btn v-bind="activatorProps, props"
                                            :color="isHovering ? 'secondary' : 'primary'"
                                            class="bg-transparent text-white elevation-24 rounded-pill mt-5 w-75 mb-md-3"
                                            style="border: 1px solid #72FFFF;" size="large">
                                            <h6 class="">SAIBA MAIS</h6>
                                        </v-btn>
                                    </template>
                                </v-hover>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card class="bg-primary rounded-xl">
                                    <v-card-text>
                                        <h1 class="text-secondary font-weight-bold">Visibilidade</h1>
                                        A visibilidade atrai novos clientes, impulsiona as
                                        vendas, constrói credibilidade, diferencia você da concorrência e fideliza
                                        clientes. Investir em visibilidade não é apenas uma estratégia de marketing, mas
                                        uma decisão embasada em dados que pode levar seu negócio ao próximo nível.
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn class="text-secondary rounded-xl" text="Voltar"
                                            @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<style scoped>
.font {
    font-family: "Inter", sans-serif;
}
</style>

<script setup>
import 'animate.css';
</script>