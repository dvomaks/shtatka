<template>
  <div>
    <h3>Батальйон</h3>
    <staff-table
      :staff="staff"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StaffTable from "../components/staff-table/StaffTable";

export default {
  name: 'IndexPage',
  components: { StaffTable },
  computed: {
    ...mapGetters({
      staff: 'localStorage/shtat'
    })
  }
}
</script>
