<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>uchech</td>
          <td>cuchee</td>
          <td>
            <a>
              <button class="btn btn-primary btn-sm me-2 mr-2">
                Edit
              </button>
            </a>
            <button class="btn btn-danger btn-sm">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { useLoadUsers, deleteUser } from '@/firebase'
export default {};
</script>

<style scoped>
.card {
  min-height: 399px;
  min-height: 399px;
  background: var(--humber-dark);
  border: 1px solid var(--humber-golden);
}

.table td {
  color: var(--humber-light);
}
.table th {
  color: var(--humber-light);
}
</style>
