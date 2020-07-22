<template>
  <div class="map" id="map"></div>
</template>

<script>
import qs from "qs";

export default {
  name: "Map",
  mounted() {
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NjM5MjMxOS1lMWVkLTQyNDQtYTM4Yi0wZjA4ZDMxYTlmNDMiLCJpZCI6MTQ4MiwiaWF0IjoxNTI4Njc3NDQyfQ.vVoSexHMqQhKK5loNCv6gCA5d5_z3wE2M0l_rWnIP_w";
    window.viewer = this.initMap("map");
  },
  methods: {
    initMap(id) {
      let viewer = new Cesium.Viewer(id, {
        animation: false,
        vrButton: false,
        homeButton: false,
        timeline: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        navigationHelpButton: false,
        geocoder: false,
        infoBox: false,
        sceneModePicker: false,
        selectionIndicator: false,
        shouldAnimate: false,
        terrainProvider: new Cesium.CesiumTerrainProvider({
          url: Cesium.IonResource.fromAssetId(1)
        }),
        imageryProvider: new Cesium.UrlTemplateImageryProvider({
          url: "http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}",
          tilingScheme: new Cesium.WebMercatorTilingScheme()
        })
      });
      this.addLayer(viewer);
      // this.Test();
      return viewer;
    },
    addLayer(viewer) {
      // var terrain = new Cesium.createWorldTerrain({
      //   requestWaterMask: true,
      //   requestVertexNormals: true
      // });
      // viewer.terrainProvider = terrain; //加入世界地形图
      let googleMap = new Cesium.UrlTemplateImageryProvider({
        url: "http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}",
        tilingScheme: new Cesium.WebMercatorTilingScheme()
      });
      // viewer.imageryLayers.addImageryProvider(googleMap);
      let gaoDeMap = new Cesium.UrlTemplateImageryProvider({
        url:
          "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
        layer: "tdtAnnoLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible"
      });
      // viewer.imageryLayers.addImageryProvider(gaoDeMap);

      let geoDeJieDao = new Cesium.UrlTemplateImageryProvider({
        url:
          "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
        layer: "tdtVecBasicLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible"
      });
      viewer.imageryLayers.addImageryProvider(geoDeJieDao, 3);

      let arcgisMap = new Cesium.ArcGisMapServerImageryProvider({
        url:
          "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
      });
      // viewer.imageryLayers.addImageryProvider(arcgisMap);
    },
    Test() {
      // this.$axios({
      //   methods: "get",
      //   url: Configuration.BackstageServer + "/api/User/GetUser",
      //   params: {
      //     userid: 1
      //   }
      // }).then(res => {
      //   console.log(res);
      // });
      // let params = [
      //   {
      //     UserName: "visitor",
      //     Name: "游客",
      //     PassWord: "123456"
      //   },
      //   {
      //     UserName: "test01",
      //     Name: "测试用户01",
      //     PassWord: "123456"
      //   }
      // ];
      // $.ajax({
      //   type: "post",
      //   url: "/api/User/AddUser",
      //   contentType: "application/json",
      //   data: JSON.stringify(params),
      //   success: function(data, status) {
      //     console.log(data);
      //   },
      //   error: function(data) {}
      // });
      // this.$axios({
      //   method: "post",
      //   url: "/api/User/AddUser",
      //   headers: { 'Content-Type': 'application/json' },
      //   params: JSON.stringify(params)
      // }).then(res => {
      //   console.log(res);
      // });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  height: 94%;
  position: absolute;
  top: 3.75rem;
  width: 100%;
}
</style>
