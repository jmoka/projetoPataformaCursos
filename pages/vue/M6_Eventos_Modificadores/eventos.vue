<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuVue />
        </v-navigation-drawer>
        <v-card class="TextMenu">
            <!-- Conteúdo adicional -->
        </v-card>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <p class="justificar">
                            Nesta aula, vamos explorar diversos tipos de eventos no JavaScript, categorizados em eventos
                            de mouse, teclado, formulário, janela, rede, toque, animação e transição, mídia, conteúdo e
                            ponteiro. Cada categoria de evento permite que você responda a diferentes interações do
                            usuário e mudanças no ambiente.
                        </p>

                        <h3>Eventos de Mouse</h3>
                        <p class="justificar">
                            Eventos relacionados a interações com o mouse:
                        </p>
                        <ul>
                            <li><strong>click:</strong> Disparado quando o botão do mouse é pressionado e liberado sobre
                                um elemento.</li>
                            <li><strong>dblclick:</strong> Disparado quando o botão do mouse é pressionado duas vezes
                                rapidamente sobre um elemento.</li>
                            <li><strong>mousedown:</strong> Disparado quando o botão do mouse é pressionado sobre um
                                elemento.</li>
                            <li><strong>mouseup:</strong> Disparado quando o botão do mouse é liberado sobre um
                                elemento.</li>
                            <li><strong>mouseover:</strong> Disparado quando o cursor do mouse passa sobre um elemento.
                            </li>
                            <li><strong>mouseout:</strong> Disparado quando o cursor do mouse sai de um elemento.</li>
                            <li><strong>mousemove:</strong> Disparado quando o cursor do mouse se move sobre um
                                elemento.</li>
                            <li><strong>contextmenu:</strong> Disparado quando o menu de contexto (clique direito do
                                mouse) é aberto.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;button 
                        @click="handleClick"
                        @dblclick="handleDblClick"
                        @mousedown="handleMouseDown"
                        @mouseup="handleMouseUp"
                        @mouseover="handleMouseOver"
                        @mouseout="handleMouseOut"
                        @mousemove="handleMouseMove"
                        @contextmenu="handleContextMenu"
                      &gt;Interaja com o botão&lt;/button&gt;
                      &lt;p v-text="message"&gt;&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        message: ""
                      }
                    },
                    methods: {
                      handleClick() { this.message = "Clique detectado!"; },
                      handleDblClick() { this.message = "Clique duplo detectado!"; },
                      handleMouseDown() { this.message = "Botão do mouse pressionado!"; },
                      handleMouseUp() { this.message = "Botão do mouse liberado!"; },
                      handleMouseOver() { this.message = "Mouse sobre o elemento!"; },
                      handleMouseOut() { this.message = "Mouse saiu do elemento!"; },
                      handleMouseMove() { this.message = "Movendo o mouse!"; },
                      handleContextMenu() { this.message = "Menu de contexto aberto!"; }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Eventos de Teclado</h3>
                        <p class="justificar">
                            Eventos relacionados a interações com o teclado:
                        </p>
                        <ul>
                            <li><strong>keydown:</strong> Disparado quando uma tecla é pressionada.</li>
                            <li><strong>keyup:</strong> Disparado quando uma tecla é liberada.</li>
                            <li><strong>keypress:</strong> Disparado quando uma tecla é pressionada e liberada, mas não
                                é acionado para todas as teclas.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;input 
                        @keydown="handleKeyDown"
                        @keyup="handleKeyUp"
                        @keypress="handleKeyPress"
                        placeholder="Digite algo"
                      &gt;
                      &lt;p v-text="message"&gt;&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        message: ""
                      }
                    },
                    methods: {
                      handleKeyDown(event) { this.message = `Tecla pressionada: ${event.key}`; },
                      handleKeyUp(event) { this.message = `Tecla liberada: ${event.key}`; },
                      handleKeyPress(event) { this.message = `Tecla pressionada (keypress): ${event.key}`; }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Eventos de Formulário</h3>
                        <p class="justificar">
                            Eventos relacionados a formulários e elementos de entrada:
                        </p>
                        <ul>
                            <li><strong>submit:</strong> Disparado quando um formulário é enviado.</li>
                            <li><strong>reset:</strong> Disparado quando um formulário é resetado.</li>
                            <li><strong>change:</strong> Disparado quando o valor de um elemento de entrada é alterado.
                            </li>
                            <li><strong>input:</strong> Disparado quando o valor de um elemento de entrada é modificado.
                            </li>
                            <li><strong>focus:</strong> Disparado quando um elemento recebe o foco.</li>
                            <li><strong>blur:</strong> Disparado quando um elemento perde o foco.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;form 
                      @submit.prevent="handleSubmit"
                      @reset="handleReset"
                    &gt;
                      &lt;input 
                        v-model="inputValue"
                        @change="handleChange"
                        @input="handleInput"
                        placeholder="Digite algo"
                      &gt;
                      &lt;button type="submit"&gt;Enviar&lt;/button&gt;
                      &lt;button type="reset"&gt;Resetar&lt;/button&gt;
                    &lt;/form&gt;
                    &lt;p v-text="message"&gt;&lt;/p&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        inputValue: "",
                        message: ""
                      }
                    },
                    methods: {
                      handleSubmit() { this.message = "Formulário enviado!"; },
                      handleReset() { this.message = "Formulário resetado!"; },
                      handleChange() { this.message = `Valor alterado: ${this.inputValue}`; },
                      handleInput() { this.message = `Valor do input: ${this.inputValue}`; }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Eventos de Janela</h3>
                        <p class="justificar">
                            Eventos relacionados à janela do navegador:
                        </p>
                        <ul>
                            <li><strong>resize:</strong> Disparado quando a janela do navegador é redimensionada.</li>
                            <li><strong>scroll:</strong> Disparado quando a rolagem da página ocorre.</li>
                            <li><strong>load:</strong> Disparado quando a página e todos os seus recursos são totalmente
                                carregados.</li>
                            <li><strong>unload:</strong> Disparado quando a página está prestes a ser descarregada.</li>
                            <li><strong>beforeunload:</strong> Disparado antes de uma página ser descarregada,
                                permitindo a exibição de um alerta ao usuário.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;button @click="showWindowAlert"&gt;Mostrar Alerta de Janela&lt;/button&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    methods: {
                      showWindowAlert() {
                        window.addEventListener('resize', () => { console.log('Janela redimensionada!'); });
                        window.addEventListener('scroll', () => { console.log('Rolagem detectada!'); });
                        window.addEventListener('load', () => { console.log('Página carregada!'); });
                        window.addEventListener('unload', () => { console.log('Página prestes a ser descarregada!'); });
                        window.addEventListener('beforeunload', (event) => {
                          event.preventDefault();
                          event.returnValue = '';
                          console.log('Antes de descarregar a página!');
                        });
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Eventos de Rede</h3>
                        <p class="justificar">
                            Eventos relacionados a operações de rede:
                        </p>
                        <ul>
                            <li><strong>abort:</strong> Disparado quando uma requisição é abortada.</li>
                            <li><strong>error:</strong> Disparado quando ocorre um erro durante a requisição.</li>
                            <li><strong>loadstart:</strong> Disparado quando uma requisição começa a carregar.</li>
                            <li><strong>progress:</strong> Disparado enquanto a requisição está carregando, para mostrar
                                progresso.</li>
                            <li><strong>timeout:</strong> Disparado quando uma requisição excede o tempo limite.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;button @click="startRequest"&gt;Iniciar Requisição&lt;/button&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    methods: {
                      startRequest() {
                        const xhr = new XMLHttpRequest();
                        xhr.addEventListener('abort', () => { console.log('Requisição abortada!'); });
                        xhr.addEventListener('error', () => { console.log('Erro na requisição!'); });
                        xhr.addEventListener('loadstart', () => { console.log('Requisição iniciada!'); });
                        xhr.addEventListener('progress', (event) => { console.log(`Progresso: ${event.loaded / event.total * 100}%`); });
                        xhr.addEventListener('timeout', () => { console.log('Tempo limite excedido!'); });
                        xhr.open('GET', 'https://api.example.com/data');
                        xhr.timeout = 5000;
                        xhr.send();
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Eventos de Toque (em dispositivos móveis)</h3>
                        <p class="justificar">
                            Eventos relacionados ao toque em dispositivos móveis:
                        </p>
                        <ul>
                            <li><strong>touchstart:</strong> Disparado quando o usuário toca na tela.</li>
                            <li><strong>touchend:</strong> Disparado quando o usuário levanta o dedo da tela.</li>
                            <li><strong>touchmove:</strong> Disparado quando o usuário move o dedo na tela.</li>
                            <li><strong>touchcancel:</strong> Disparado quando o toque é interrompido por um evento do
                                sistema.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div 
                      @touchstart="handleTouchStart"
                      @touchend="handleTouchEnd"
                      @touchmove="handleTouchMove"
                      @touchcancel="handleTouchCancel"
                      style="width: 300px; height: 300px; background: #eee;"
                    &gt;
                      Toque na área
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    methods: {
                      handleTouchStart() { console.log('Toque iniciado!'); },
                      handleTouchEnd() { console.log('Toque finalizado!'); },
                      handleTouchMove() { console.log('Movendo o toque!'); },
                      handleTouchCancel() { console.log('Toque cancelado!'); }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Eventos de Animação e Transição</h3>
                        <p class="justificar">
                            Eventos relacionados a animações e transições CSS:
                        </p>
                        <ul>
                            <li><strong>animationstart:</strong> Disparado quando uma animação CSS começa.</li>
                            <li><strong>animationend:</strong> Disparado quando uma animação CSS termina.</li>
                            <li><strong>animationiteration:</strong> Disparado em cada iteração de uma animação CSS.
                            </li>
                            <li><strong>transitionend:</strong> Disparado quando uma transição CSS termina.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div 
                      @animationstart="handleAnimationStart"
                      @animationend="handleAnimationEnd"
                      @animationiteration="handleAnimationIteration"
                      @transitionend="handleTransitionEnd"
                      class="animated-box"
                    &gt;
                      Animação e transição
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    methods: {
                      handleAnimationStart() { console.log('Animação iniciada!'); },
                      handleAnimationEnd() { console.log('Animação terminada!'); },
                      handleAnimationIteration() { console.log('Animação iterada!'); },
                      handleTransitionEnd() { console.log('Transição terminada!'); }
                    }
                  }
                  &lt;/script&gt;
                  
                  &lt;style scoped&gt;
                    .animated-box {
                      width: 100px;
                      height: 100px;
                      background-color: red;
                      animation: example 5s infinite;
                      transition: background-color 2s;
                    }
                    
                    @keyframes example {
                      0% { background-color: red; }
                      100% { background-color: blue; }
                    }
                  &lt;/style&gt;
                </code>
              </pre>

                        <h3>Eventos de Mídia</h3>
                        <p class="justificar">
                            Eventos relacionados ao controle de mídia:
                        </p>
                        <ul>
                            <li><strong>play:</strong> Disparado quando a mídia começa a tocar.</li>
                            <li><strong>pause:</strong> Disparado quando a mídia é pausada.</li>
                            <li><strong>ended:</strong> Disparado quando a mídia termina de tocar.</li>
                            <li><strong>volumechange:</strong> Disparado quando o volume da mídia é alterado.</li>
                            <li><strong>timeupdate:</strong> Disparado quando o tempo de reprodução da mídia é
                                atualizado.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;video 
                        @play="handlePlay"
                        @pause="handlePause"
                        @ended="handleEnded"
                        @volumechange="handleVolumeChange"
                        @timeupdate="handleTimeUpdate"
                        controls
                      &gt;
                        &lt;source src="video.mp4" type="video/mp4"&gt;
                      &lt;/video&gt;
                      &lt;p v-text="message"&gt;&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        message: ""
                      }
                    },
                    methods: {
                      handlePlay() { this.message = "Mídia começou a tocar!"; },
                      handlePause() { this.message = "Mídia pausada!"; },
                      handleEnded() { this.message = "Mídia terminou!"; },
                      handleVolumeChange() { this.message = "Volume alterado!"; },
                      handleTimeUpdate() { this.message = "Tempo de reprodução atualizado!"; }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Eventos de Conteúdo</h3>
                        <p class="justificar">
                            Eventos relacionados ao carregamento e impressão de conteúdo:
                        </p>
                        <ul>
                            <li><strong>load:</strong> Disparado quando um recurso é carregado.</li>
                            <li><strong>DOMContentLoaded:</strong> Disparado quando o DOM é totalmente carregado e
                                analisado.</li>
                            <li><strong>beforeprint:</strong> Disparado antes de uma página ser impressa.</li>
                            <li><strong>afterprint:</strong> Disparado depois de uma página ser impressa.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;button @click="startPrint"&gt;Imprimir Página&lt;/button&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    methods: {
                      startPrint() {
                        window.addEventListener('beforeprint', () => { console.log('Antes da impressão!'); });
                        window.addEventListener('afterprint', () => { console.log('Após a impressão!'); });
                        window.print();
                      }
                    },
                    mounted() {
                      document.addEventListener('DOMContentLoaded', () => { console.log('DOM totalmente carregado!'); });
                      window.addEventListener('load', () => { console.log('Página carregada!'); });
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Eventos de Pointer</h3>
                        <p class="justificar">
                            Eventos relacionados a interações com ponteiros, como o mouse e toques:
                        </p>
                        <ul>
                            <li><strong>pointerover:</strong> Disparado quando um ponteiro entra na área de um elemento.
                            </li>
                            <li><strong>pointerenter:</strong> Disparado quando um ponteiro entra no elemento.</li>
                            <li><strong>pointerdown:</strong> Disparado quando um ponteiro é pressionado.</li>
                            <li><strong>pointerup:</strong> Disparado quando um ponteiro é liberado.</li>
                            <li><strong>pointercancel:</strong> Disparado quando um ponteiro é cancelado.</li>
                            <li><strong>pointermove:</strong> Disparado quando um ponteiro se move sobre um elemento.
                            </li>
                            <li><strong>pointerout:</strong> Disparado quando um ponteiro sai da área de um elemento.
                            </li>
                            <li><strong>pointerleave:</strong> Disparado quando um ponteiro sai do elemento.</li>
                        </ul>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div 
                      @pointerover="handlePointerOver"
                      @pointerenter="handlePointerEnter"
                      @pointerdown="handlePointerDown"
                      @pointerup="handlePointerUp"
                      @pointercancel="handlePointerCancel"
                      @pointermove="handlePointerMove"
                      @pointerout="handlePointerOut"
                      @pointerleave="handlePointerLeave"
                      style="width: 300px; height: 300px; background: #ddd;"
                    &gt;
                      Interaja com o ponteiro
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    methods: {
                      handlePointerOver() { console.log('Ponteiro sobre o elemento!'); },
                      handlePointerEnter() { console.log('Ponteiro entrou no elemento!'); },
                      handlePointerDown() { console.log('Ponteiro pressionado!'); },
                      handlePointerUp() { console.log('Ponteiro liberado!'); },
                      handlePointerCancel() { console.log('Ponteiro cancelado!'); },
                      handlePointerMove() { console.log('Ponteiro movendo-se!'); },
                      handlePointerOut() { console.log('Ponteiro saiu da área do elemento!'); },
                      handlePointerLeave() { console.log('Ponteiro saiu do elemento!'); }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>


                    </v-col>
                </v-row>
            </v-container>
        </v-main>

    </v-app>
</template>

<script>
import MenuVue from '~/components/vue/menuVue.vue'
import Footer from '@/components/footer_page.vue'

export default {
    name: "DirectivesVOn",
    data: () => ({
        msg: "Diretiva: v-on",
        video: 'https://www.youtube.com/embed/VIDEO_ID',
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    }),
    components: {
        MenuVue,
        Footer
    }
}
</script>

<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}

.justificar {
    text-align: justify;
}
</style>