<template>
  <div style="margin-top: 50px;">
    <WorkerList />
  </div>
</template>
<script>
import axios from 'axios'
import WorkerList from '@/components/Worker/WorkerList.vue'
export default {
  layout: 'worker',
  components: {
    WorkerList
  },
  data() {
    return {}
  },
  methods: {},
  async fetch({ store, app, redirect }) {
    const data = await app.$axios.$get('/api/consultation')
    store.commit('setApplyList', data)

    const staffs = await app.$axios.$get('/api/user')
    store.commit('setStaffList', staffs)
  }
}
</script>
<style scoped lang="scss">
.pagination {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>