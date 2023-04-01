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
let loaded=false;
function compare(a,b){
  if(a.code < b.code){
    return -1;
  }else if(a.code > b.code){
    return 1;
  }else{
    return 0;
  }
}
async function getSymbols(){
    const res = await fetch(
    "https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols",
    options
  );

  const finalRes = await res.json();
 
  for (let item in finalRes.symbols){

    let box={};
    box.code=item;
    box.meaning= finalRes.symbols[item];
    data.value.push(box);
  }
  data.value.sort(compare);
  loaded=true;
}
getSymbols();
</script>

<template>
 <div class="container">
  <Titles subtitle="code reference."/>
  <h2 class="subtitle" :style="{display: loaded?'none':'block'}">Loading...</h2>
    <table class="table">
        <thead>
            <tr>
                <th>code</th>
                <th>meaning</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data">
                <td >{{item.code}}</td>
                <td>{{item.meaning}}</td>
            </tr>
        </tbody>
    </table>
    <a class="to-top" href="#">top</a>    
  </div>
</template>