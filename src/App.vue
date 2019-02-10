<template>
  <div id="app" style="position : absolute; left: 0px; top: 0px; width: 100%; height: 100%">
    <div v-bind:class="{ active: isActive }"></div>
  </div>

</template>

<script>
export default {
  name: 'App',
  data : function () {
    return {
      message: '<h1>菜鸟教程</h1>',
      site: "菜鸟教程",
      url: "www.runoob.com",
      alexa: "10000",
      seen: false,
      sites: [
        {name : "c"},
        {name : "c"},
        {name : "c"}
      ],
      counter: 1,
      isActive: true
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  watch: {
    counter: function (nval, oval) {
      alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
    }
  }
}
  document.documentElement.style.overflow = 'hidden';
  var move = function (e) {
    e.preventDefault && e.preventDefault();
    e.returnValue = false;
    e.stopPropagation && e.stopPropagation();
    return false;
  }
  var keyFunc = function (e) {
    if (37 <= e.keyCode && e.keyCode <= 40) {
      return move(e);
    }
  }
  document.body.onkeydown = keyFunc;
</script>
<style>
  .active {
    width: 100px;
    height: 100px;
    background: green;
  }
</style>
