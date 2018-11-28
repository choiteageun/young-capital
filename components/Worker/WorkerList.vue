<template>
  <div>
    <WorkerListTable :dialog="dialog"></WorkerListTable>
    <WorkerListDialog ref="dialog" :dialog="dialog" @createConsul="createConsul"></WorkerListDialog>
  </div>
</template>
<script>
import axios from "axios";
import WorkerListTable from '@/components/Worker/WorkerListTable.vue'
import WorkerListDialog from '@/components/Worker/WorkerListDialog.vue'

export default {
  components: {
    WorkerListTable,
    WorkerListDialog
  },
  data() {
    return {
      dialog: {
        createCustomer: false,
        updateConsul: false
      },
    }
  },
  methods: {
    async createConsul(consulData) {
    }
  },
  async mounted() {
  }
}
</script>
<style scoped lang="scss">
.pagination {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>