<template>
  <div id="app">
    <GmapMap
      :center="coodinate"
      :zoom="15"
      :style="{ width: '100vw', height: '100vh' }"
      ref="mapRef"
      id="map"
      :options="{
        mapTypeControl: false,
        streetViewControl: false,
      }"
    ></GmapMap>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      coodinate: {
        lat: -19.257753,
        lng: 146.823688
      }
    }
  },
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      const google = window.google
      const options = {
        url: `https://${location.host}/public/westcampus.kml`
      }
      console.log('url', options.url)
      const kml = new google.maps.KmlLayer({ map, options })
      console.log(kml)
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
