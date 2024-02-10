<template>
    <ul>
        <li v-for="currency in currencies" :key="currency.name" @click='setCrypto(currency.name)'
            :class='{ active: cryptoNow === currency.name }'>
            {{ currency.label }}
        </li>
    </ul>
</template>

<script lang="ts">
import { currencyList } from '@/assets/currencyList';

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
            currencies: currencyList,
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
    padding: 4px 16px;
    border: 2px solid #fff;
    border-radius: 15px;
}

ul li {
    color: #fff;
    cursor: pointer;
    padding: 5px 10px;
    margin: 5px 0;
}

li:hover,
li.active {
    background-color: #fff;
    color: #000;
    border-radius: 15px;
}
</style>