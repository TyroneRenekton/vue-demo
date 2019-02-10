<template>
  <div id="app" style="position : absolute; left: 0px; top: 0px; width: 100%; height: 100%">
    <p> {{message}}</p>
    <h1> {{site}}</h1>
    <div v-html="message">
    </div>
    <span v-if = "seen">我是span标签，你可以看到我吗</span>
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
      seen: false
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
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
