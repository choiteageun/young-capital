<template>
  <div>
    <WorkerList />
  </div>
</template>
<script>
import axios from "axios";
import WorkerList from '@/components/Worker/WorkerList.vue'
export default {
  layout:'worker',
  components:{
    WorkerList
  },
  data() {
    return {
    };
  },
  methods: {
  },

};
</script>
<style scoped lang="scss">
.pagination{
  margin-top:15px;
  margin-bottom: 15px;
}
</style>