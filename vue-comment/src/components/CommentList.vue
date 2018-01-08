<template>
  <div class="comment-list">
    <comment-item v-for="item in List" :comment="item" :key="item.id"></comment-item>
    <div v-if="!List.length" class="empty-msg">当前没有评论</div>
  </div>
</template>
<script>
import CommentItem from './CommentItem'
export default {
  name: 'commentList',
  props: ['List'],
  components: {
    'comment-item': CommentItem
  }
}
</script>
<style>
.comment-list{
  background: #eee;
  color: #000;
  font-size: 15px;
  margin:10px;
  width: 300px;
  border:1px solid #eee;
  margin:10px auto;
}

</style>

