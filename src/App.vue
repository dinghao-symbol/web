<template>
  <div>
    <tab></tab>
    <keep-alive exclude="/home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Tab from './pages/tab/Tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>

</style>
