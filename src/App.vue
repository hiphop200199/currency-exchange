<script setup>

</script>

<template>
  <nav class="navbar">
    <router-link class="link" to="/" >Home</router-link>
    <router-link class="link" to="/about" >About</router-link>
    <router-link class="link" to="/reference" >Reference</router-link>
    <router-link class="link" to="*" >Home</router-link>
    </nav>
  <router-view/>
</template>


