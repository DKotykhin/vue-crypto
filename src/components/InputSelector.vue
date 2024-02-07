<template>
    <ul>
        <li v-for="currency in currencies" :key="currency.name" @click='setCrypto(currency.name)'
            :class='{ active: cryptoNow === currency.name }'>
            <p>{{ currency.label }}</p>
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    name: 'InputSelector',
    props: {
        setCrypto: {
            type: Function,
            required: true
        },
        cryptoNow: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            currencies: [
                {
                    name: 'BTC',
                    label: 'Bitcoin',
                },
                {
                    name: 'ETH',
                    label: 'Ethereum',
                },
                {
                    name: 'USDT',
                    label: 'Tether',
                }
            ],
            // currentCrypto: '',
        }
    },
    // methods: {
    //     selectItem(value: string) {
    //         this.currentCrypto = value
    //         this.setCrypto(value)
    //     }
    // }
}
</script>

<style scoped>
ul {
    list-style: none;
    width: 120px;
    padding: 0 16px;
    border: 2px solid #fff;
    border-radius: 15px;
}

ul li {
    color: #fff;
    cursor: pointer;
}

li:hover,
li.active {
    background-color: #fff;
    color: #000;
    border-radius: 15px;
    padding: 0 10px;
}
</style>