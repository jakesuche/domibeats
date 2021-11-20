<template>
   <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  
                  <th>Email</th>
                  <th class="hidden-sm-down">Display Name</th>
                  <th class="hidden-sm-down">Phone</th>
                 
                 
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, i) in users" :key="user.uid + i" style="color:var(--humber-light)">
                  <td><p class="mb-0">
                    {{i + 1}} 
                    </p></td>
                 
                  <td>
                    
                    <p class="mb-0">
                     {{user.email}}
                    </p>
                  </td>
                  <td>
                    <p class="mb-0">
                     {{user.displayName}}
                    </p>
                    
                  </td>
                  <td >
                    <p class="mb-0">
                     {{user.phoneNumber || 'N/A'}}
                    </p>
                  </td>
                  
                 
                </tr>
              </tbody>
            </table>
          </div>
        
</template>

<script>
export default {
  props:['users']
}
</script>

<style>

</style>