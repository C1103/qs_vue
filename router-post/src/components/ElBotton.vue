<template>
  <button 
  :disabled="disabled"
  :type="nativeType" 
  class="el-button" 
  @click="handleClick" 
  :class="[type? 'el-button--' + type : '',buttonSize? 'el-button--' + buttonSize:'',
  {'is-disabled': disabled}]">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    props: {
      disabled: Boolean,
      nativeType: String,
      size: String,
      type: {
        type: String,
        default: 'default'
      },
    },
    computed: {
      buttonSize () {
        return this.size;
      }
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>
<style>

</style>