<template>
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item has-text-light" href="https://afiqhamzah.github.io/">
      Afiq Hamzah's Page
    </a>
    <a class="navbar-item">
        <pdf-exporter
            :target="target"
        ></pdf-exporter>
    </a>
    
  </div>
  
</nav>
</template>

<script>
import pdfExporter from "~/components/utility/PdfExporter.vue";

export default {
  
  props: {
    target: {
      type: String,
      default:""
    },
  },

  components: {
     pdfExporter
  },

};
</script>
