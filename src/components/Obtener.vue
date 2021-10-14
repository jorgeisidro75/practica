<template>
  <div class="mt-4">
        <button
            class="btn btn-danger w-100"
            @click="$emit('perfil-action')"
        >
             <samp>Obtener</samp>
        </button>       
  </div>
</template>

<script>
export default {
  name: "Obtener",
  props: {
    
  },
};
</script>
