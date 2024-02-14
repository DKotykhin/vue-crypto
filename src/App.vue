<template>
    <page-wrapper>
        <section-wrapper>
            <h1>Crypto</h1>
            <InputField :changeAmount='changeAmount' :amount='amount' />
            <div class='selectors'>
                <InputSelector :setCrypto='setCryptoFirst' :cryptoNow='cryptoFirst' />
                <InputSelector :setCrypto='setCryptoSecond' :cryptoNow='cryptoSecond' />
            </div>
            <ActionButtons :reset='reset' :convert='convert' />
            <p className='exchange' v-if='cryptoFirst || cryptoSecond'>
                {{ cryptoFirst }} to {{ cryptoSecond }}
            </p>
            <p v-if='error' class='error'>{{ error }}</p>
            <p v-if='result' class='result'>Result: {{ result }}</p>
        </section-wrapper>
        <p class='link'>
            Powered by <a v-bind:href='link' target='_blank'>Dmytro Kotykhin</a>
        </p>
    </page-wrapper>
</template>

<script lang="ts">
import CryptoConvert from 'crypto-convert';

import InputField from '@/components/InputField.vue';
import InputSelector from '@/components/InputSelector.vue';
import ActionButtons from '@/components/ActionButtons.vue';

const convert = new CryptoConvert();

export default {
    components: {
        InputField,
        InputSelector,
        ActionButtons,
    },
    data() {
        return {
            amount: "",
            cryptoFirst: '',
            cryptoSecond: '',
            error: '',
            result: 0,
            link: import.meta.env.VITE_APP_LINKEDIN_LINK || '',
        }
    },
    methods: {
        changeAmount(value: string) {
            this.amount = value;
            this.error = ''
        },
        setCryptoFirst(value: string) {
            this.cryptoFirst = value;
            this.error = ''
        },
        setCryptoSecond(value: string) {
            this.cryptoSecond = value;
            this.error = ''
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
            this.result = res.toFixed(2) || 0;
        },
        reset() {
            this.amount = '';
            this.cryptoFirst = '';
            this.cryptoSecond = '';
            this.error = '';
            this.result = 0;
        }
    }
}
</script>

<style scoped>
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
    font-size: 20px;
    margin: 10px 0;
    color: #fff;
}

.error {
    color: rgb(252, 101, 101);
    margin: 10px 0;
    line-height: 24px;
}

.result {
    color: #fff;
    margin: 10px 0;
    font-size: 20px;
}

.link {
    color: #fff;
    margin-bottom: 20px;
}

.link a {
    color: #808080;
}
</style>
