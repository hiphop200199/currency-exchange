<script setup>
/*import { ref } from 'vue';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7f3e04d0fmsh481d6b03cd7494ep14cfdcjsn8775ef35e2c3',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

const data=ref([]);

async function getSymbols(){
    const res = await fetch(
    "https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols",
    options
  );

  const finalRes = await res.json();

  data.value=finalRes;
}

getSymbols();*/
</script>

<template>
  <div class="container">
    <h1 class="title">Currency.</h1>
    <h2 class="subtitle">information about exchange rates.</h2>
   
        <section class="function">
            <h3 class="function-title">latest rate</h3>
            <label class="label" for="">from: </label>
            <input class="input" type="text" name="" id="">
            <label class="label" for="">to: </label>
            <input class="input" type="text" name="" id="">
            <button class="button">send</button>
            <p class="result">result: </p>
        </section>
        <section class="function">
            <h3 class="function-title">historical rate</h3>
            <label class="label" for="">the date:</label>
            <input class="input" type="date" name="" id="">
            <label class="label" for="">from: </label>
            <input class="input" type="text" name="" id="">
            <label class="label" for="">to: </label>
            <input class="input" type="text" name="" id="">
            <button class="button">send</button>
            <p class="result">result: </p>
        </section>
        <section class="function">
            <h3 class="function-title">convert</h3>
            <label class="label" for="">from: </label>
            <input class="input" type="text" name="" id="">
            <label class="label" for="">to: </label>
            <input class="input" type="text" name="" id="">
            <button class="button">send</button>
            <p class="result">result: </p>
        </section>
   
  </div>
</template>


