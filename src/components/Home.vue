<script setup>

import Titles from '../tools/Titles.vue';

import { ref } from 'vue';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7f3e04d0fmsh481d6b03cd7494ep14cfdcjsn8775ef35e2c3',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

const data=ref([]);
const latestFrom=ref("");
const latestTo=ref("");
const latestResult=ref("");
const date=ref("");
const historyFrom=ref("");
const historyTo=ref("");
const historyResult=ref("");
const convertFrom=ref("");
const convertTo=ref("");
const convertResult=ref("");
const number=ref(0);
async function getSymbols(){
    const res = await fetch(
    "https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols",
    options
  );

  const finalRes = await res.json();

  for(let key in finalRes.symbols){
    data.value.push(key);
  }
  data.value.sort();
}

async function getLatest(){
  const res = await fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${latestFrom.value}&to=${latestTo.value}`, options);

  const finalRes = await res.json();

  latestResult.value=finalRes.rates[latestTo.value];
}
async function getHistory(){
  const res = await fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/${date.value}?base=${historyFrom.value}&to=${historyTo.value}`, options);

  const finalRes = await res.json();

  historyResult.value=finalRes.rates[historyTo.value];
}
async function getConvert(){
  const res = await fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${convertFrom.value}&to=${convertTo.value}&amount=${number.value}`, options);
 
  const finalRes = await res.json();

convertResult.value= finalRes.result;
}

getSymbols();

</script>

<template>
  <div class="container">
  <Titles subtitle="information about exchange rates."/>
   
        <section class="function">
            <h3 class="function-title">latest rate</h3>
            <label class="label">from: </label>
            <input class="input" type="text" list="symbols" v-model="latestFrom">
            <label class="label">to: </label>
            <input class="input" type="text" list="symbols" v-model="latestTo">
            <button class="button" @click="getLatest">send</button>
            <p class="result">result: {{latestResult}}</p>
        </section>
        <section class="function">
            <h3 class="function-title">historical rate</h3>
            <label class="label">the date:</label>
            <input class="input" type="date" v-model="date">
            <label class="label">from: </label>
            <input class="input" type="text" list="symbols" v-model="historyFrom">
            <label class="label">to: </label>
            <input class="input" type="text" list="symbols" v-model="historyTo">
            <button class="button" @click="getHistory">send</button>
            <p class="result">result: {{historyResult}}</p>
        </section>
        <section class="function">
            <h3 class="function-title">convert</h3>
            <label class="label">from: </label>
            <input class="input" type="text" list="symbols" v-model="convertFrom">
            <label class="label">to: </label>
            <input class="input" type="text" list="symbols" v-model="convertTo">
            <label class="label">amount: </label>
            <input class="input" type="number" min="0" v-model="number">
            <button class="button" @click="getConvert">send</button>
            <p class="result">result: {{ convertResult }}</p>
        </section>
        <datalist id="symbols">
          <option v-for="symbol in data" :key="symbol" :value="symbol"></option>
        </datalist>
  </div>
</template>


