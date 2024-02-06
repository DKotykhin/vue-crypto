<template>
    <div class='container'>
        <div class='wrapper'>
            <h1>Crypto</h1>
            <InputField :changeAmount='changeAmount' />
            <div class='selectors'>
                <InputSelector :setCrypto='setCryptoFirst' />
                <InputSelector :setCrypto='setCryptoSecond' />
            </div>
            <p className='exchange' v-if='cryptoFirst || cryptoSecond'>
                {{ cryptoFirst }} to {{ cryptoSecond }}
            </p>
            <p v-if='error' class='error'>{{ error }}</p>
            <p v-if='result' class='result'>Result: {{ result }}</p>
            <button @click='convert'>Convert</button>
        </div>
    </div>
</template>

<script lang="ts">
import InputField from './components/InputField.vue'
import InputSelector from './components/InputSelector.vue'
import CryptoConvert from 'crypto-convert';

const convert = new CryptoConvert();

export default {
    components: {
        InputField,
        InputSelector,
    },
    data() {
        return {
            amount: 0,
            cryptoFirst: '',
            cryptoSecond: '',
            error: '',
            result: 0,
        }
    },
    methods: {
        changeAmount(value: number) {
            this.amount = value
        },
        setCryptoFirst(value: string) {
            this.cryptoFirst = value
        },
        setCryptoSecond(value: string) {
            this.cryptoSecond = value
        },
        async convert() {
            this.result = 0;
            if (this.amount && this.cryptoFirst && this.cryptoSecond) {
                this.error = ''
            } else {
                this.error = 'Please fill all fields!'
                return
            }
            if (this.cryptoFirst === this.cryptoSecond) {
                this.error = 'Please select different currencies!'
                return
            }
            await convert.ready();        

            const res = convert[this.cryptoFirst as keyof typeof convert][this.cryptoSecond](this.amount);
            this.result = res || 0;
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.wrapper {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-family: Nabla;
    margin-top: 60px;
    font-size: 120px;
    margin-bottom: 50px;
}

.selectors {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.exchange {
    font-family: Montserrat;
    font-size: 20px;
    margin: 10px 0;
    color: #fff;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    font-family: Montserrat;
    cursor: pointer;
    margin-top: 12px;
}

button:hover {
    background-color: #d8d8d8;
}

.error {
    font-family: Montserrat;
    color: rgb(252, 101, 101);
    margin: 10px 0;
    line-height: 24px;
}

.result {
    font-family: Montserrat;
    color: #fff;
    margin: 10px 0;
    font-size: 20px;
}</style>
