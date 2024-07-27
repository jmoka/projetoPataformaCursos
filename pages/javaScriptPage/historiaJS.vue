<template>
    <v-app>
        <v-navigation-drawer permanent app>
        <Menu />
      </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }}</h1> 
            </div>
           <div>
            <p>
                JavaScript é uma das linguagens de programação mais populares e amplamente utilizadas 
                no desenvolvimento web. Aqui está um resumo de sua história e evolução:
            </p>
            <b><h2>História e Início</h2></b>
            <h3>Criação (1995)<hr></h3>  
           <ul>
                <li>
                    <p><b>Brendan Eich, </b>um programador da Netscape, criou JavaScript em apenas 10 dias em maio de 1995. </p>
                </li>
                <li>
                    <p>Inicialmente chamado de <b>Mocha,</b> foi renomeado para <b>LiveScript</b>  e, finalmente, para <b>JavaScript</b> como uma estratégia 
                        de marketing para capitalizar a popularidade do Java na época. </p>
                </li>
           </ul>                   
            <br>
            <h3>Lançamento (1995) <hr></h3>  
           <ul>
                <li>
                    <p>JavaScript foi lançado pela primeira vez com o navegador Netscape Navigator 2.0. </p>
                </li>
                <li>
                    <p>A Microsoft lançou uma implementação própria chamada <b>JScript</b>  para o Internet Explorer 3.0 </p>
                </li>
           </ul>
           <br>
            <h3>ECMA-262 (1997)<hr></h3>  
           <ul>
                <li>
                    <p>A linguagem foi padronizada pela <b>ECMA International</b> com a especificação <b>ECMAScript</b> </p>
                </li>
                <li>
                    <p>O ECMAScript 1 foi publicado como o primeiro padrão oficial</p>
                </li>
           </ul>
           <br>
            <h3>Crescimento (1997-2005)<hr></h3>  
           <ul>
                <li>
                    <p>JavaScript tornou-se a linguagem dominante para scripts do lado do cliente</p>
                </li>
                <li>
                    <p>Introdução de <strong>AJAX</strong>(Asynchronous JavaScript and XML), permitindo a criação de aplicações web mais dinâmicas e interativas</p>
                </li>
           </ul>
           <br>
            <h3>ECMAScript 3 (1999)<hr></h3>  
           <ul>
                <li>
                    <p>Esta versão trouxe várias melhorias significativas e foi amplamente adotada</p>
                </li>               
           </ul>
           <br>
            <h3>Estagnação e Renascimento (2000-2009)<hr></h3>  
           <ul>
                <li>
                    <p>Houve pouca evolução na linguagem devido à concorrência entre navegadores</p>
                </li>
                <li>
                    <p>A introdução do <strong>Google Chrome</strong> em 2008 e do motor <strong>V8</strong> reavivou o interesse em JavaScript</p>
                </li>
           </ul>
           <br>
            <h3>ECMAScript 5 (2009)<hr></h3>  
           <ul>
                <li>
                    <p>Introduziu recursos como <b>strict mode</b>, novos métodos de <b>array</b>, <b>JSON nativo</b>, entre outros</p>
                </li>
              
           </ul>
           <br>
            <h3>ECMAScript 6 (2015)<hr></h3>  
           <ul>
                <li>
                    <p>Também conhecido como <b>ES6</b> ou <b>ECMAScript 2015</b>, foi uma atualização revolucionária que trouxe</p>
                </li>
            </ul>
            <br>
            <h3>Classes e módulos<hr></h3>  
            <ul>
                <li>           
                    <p>Arrow functions</p>
                </li>  
                <li>      
                    <p>Promises para programação assíncrona</p>
                </li>    
                <li>    
                    <p> let e const para variáveis de escopo de bloco</p>
                </li>  
                <li>      
                    <p> Destructuring, templates literais e muito mais</p>
                </li>    
           </ul>
           <br>
            <h3>Atualizações Contínuas (2016-Divsente)<hr></h3>  
           <ul>
                <li>
                    <p>Novos recursos e melhorias são adicionados regularmente, como async/await (ES2017), optional chaining (ES2020), e muitas outras melhorias</p>
                </li>
                <li>
                    <p>A partir de 2016, a ECMA International começou a lançar atualizações anuais para o ECMAScript</p>
                </li>    
           </ul>
           <br>
            <h3>Ferramentas e Frameworks<hr></h3>  
           <ul>
                <li>
                    <p>O ecossistema JavaScript expandiu-se com a criação de várias bibliotecas e frameworks populares, como:</p>
                    <pre>
                        - jQuery
                        - Angular
                        - React
                        - Vue.js

                    </pre>
                </li>
                <li>
                    <p>Ferramentas de build e gerenciamento de pacotes como <b>Node.js</b>, <b>npm</b> (Node Package Manager), <b>Webpack</b>, e <b>Babel</b> são 
                        amplamente usadas</p>
                </li>    
           </ul>
           <br>
            <h3>Evolução Contínua<hr></h3>  
           <ul>
                <li>
                    <p>JavaScript continua a evoluir com novas funcionalidades sendo adicionadas regularmente</p>
                   
                </li>
                <li>
                    <p>A linguagem está se tornando cada vez mais robusta e eficiente, mantendo-se relevante no desenvolvimento moderno de aplicações web</p>
                </li>    
           </ul>
           <br>
            <h3>Impacto<hr></h3>  
           <ul>
                <li>
                    <p>JavaScript é fundamental para a web moderna. É a única linguagem que roda nativamente nos navegadores web e é uma peça central no 
                        desenvolvimento front-end, além de ter uma divsença crescente no back-end com Node.js.</p>
                   
                </li>
                <li>
                    <p> Com uma comunidade vibrante e um ecossistema vasto, JavaScript continua a ser uma escolha essencial para desenvolvedores em todo o mundo.</p>
                </li>    
           </ul>
           </div>
        
        </v-main>   
    </v-app>
</template>

<script>
import Menu from '@/components/javaScript/menu.JavaScript.vue'
    export default {
        data () {
            return{
                msg:'História e Evolução do JavaScript'
            }
        },
        components:{
            Menu
        }
         
    }
</script>

<style scoped>
 .v-main {
     padding: 10px 20px 10px 50px !important; /* Ajuste o padding conforme necessário */
 }
</style>