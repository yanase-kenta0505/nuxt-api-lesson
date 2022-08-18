<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $axios } = useContext()
    const message = useAsync(() => $axios.$get('http://localhost:3000/api'))
    
    return {
      message
    }
  }
})
</script>
