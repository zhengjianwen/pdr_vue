<template>
    <div class="editor">
         <vue-html5-editor :content="content" :height="400" @change="updateData"></vue-html5-editor>  
    </div>
</template>
<script>
export default {
  data() {
    return { content: "请输入文章内容" };
  },
  methods: {
    updateData(e = "") {
      let c1 = e.replace(/<img width="100%"/g, "<img");
      let c2 = c1.replace(/<img/g, '<img width="100%"');
      this.content = c2;

      console.info(this.content);
    }
  }
};
</script>

<style scoped>
</style>
