<template>
  <div class="spin">
  </div>
  <p class="text">Loading please wait...</p>
</template>

<script>
export default {

}
</script>

<style scoped>
.text{
    text-align: center;
}
.spin{
    width: 40px;
    height: 40px;
    border: 5px solid transparent;
    /* background-color: aqua; */
    border-radius: 50%;
    margin: 200px auto;
    border-top-color: #777;

    animation: spin 1s infinite;
}
@keyframes spin{
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>