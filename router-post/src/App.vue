<template>
  <div id="app">
    <el-badge class="item" :value="1" :max="9">
      <el-button nativeType="submit" size="medium" @click="addComment">评论</el-button>
    </el-badge>
    <el-badge class="item" :value="10" :max="9">
      <el-button size="small" type="primary">发布</el-button>
    </el-badge>
    <el-badge class="item" :value="1" :max="9" isDot>
    <el-button size="mini" type="success">前往</el-button>
    </el-badge>
    <el-button :disabled="saveDisabled" @click="doSave()" type="danger">再见</el-button>
  </div>
</template>

<script>
import ElBadge from '@/components/ElBadge'
import ElButton from '@/components/ElBotton'
export default {
  name: 'app',
  data () {
    return {
      saveDisabled: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.saveDisabled = false
    }, 5000);
  },
  methods: {
    addComment() {
      console.log('评论');
    },
    doSave() {
      console.log('前往');
    }
  },
  components: {
    ElButton,
    ElBadge
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
