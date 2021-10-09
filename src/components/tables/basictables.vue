<template>
  <div>
    <div class="table-responsive">
      <table class=" table">
        <thead>
          <tr style="background:#E3E9EF;">
            <th>
              <b-form-checkbox size="lg"></b-form-checkbox>
            </th>
            <th v-for="(list, i) in headerlist" :key="i + 'basic-table'">
              {{list}}
            </th>
          </tr>
        </thead>
        <tbody>
          <slot />
        </tbody>
      </table>
    </div>
    <div v-if="paginate" class="mt-3">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        align="center"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import Sparklines from "@/components/Sparklines/Sparklines";
import Vue from "vue";

export default {
  name: "Tablebasic",
  props: ["headerlist", "paginate"],
  components: {},
  data() {
    return {
      checkboxes1: [false, false, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    };
  },
  methods: {
    getRandomData() {
      const result = [];

      for (let i = 0; i <= 8; i += 1) {
        result.push(Math.floor(Math.random() * 20) + 1);
      }

      return [{ data: result }];
    },
    getRandomColor() {
      const { primary, success, info, danger } = this.appConfig.colors;
      const colors = [info, primary, danger, success];
      return { colors: [colors[Math.floor(Math.random() * colors.length)]] };
    },
  },
};
</script>

<style src="./Basic.scss" lang="scss" scoped></style>

<style scoped>
th:first-child {
  border-radius: 10px 0 0 10px;
}
th:last-child {
  border-radius: 0 10px 10px 0;
}
th {
  padding-top: 20px;
  padding-bottom: 20px;
}

.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: none!important;
}
.table{
      width: 100%;
    margin-bottom: 1rem!important;
    color: #29323a;
    border-spacing: 0 1.5em;
    border-collapse: separate;
}
</style>
