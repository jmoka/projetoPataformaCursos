<script>
export default {
    data() {
        return {
            text: "",
            text2: ""

        }
    },
    methods: {
        onInput(event) {
            this.text = event.target.value;
        }
    }
}
</script>

<template>
    <div>
        <input :value="text" @input="onInput" placeholder="Type here" />
        <p>{{ text }}</p> <!-- Corrige a exibição para usar 'text' em vez de 'msg' -->

        <input v-model="text2" />
        <p>{{ text2 }}</p> <!-- Corrige a exibição para usar 'text' em vez de 'msg' -->
    </div>
</template>