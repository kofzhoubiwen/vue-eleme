<template>
  <div class="ftitle">
    <div class="title">
      <div class="line"></div>
      <div class="text">{{this.ftitle}}</div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {
      ftitle: {
        type: String
      }
    }
  };
</script>
