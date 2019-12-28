<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <!-- <img src="https://bulma.io/images/bulma&#45;logo.png" width="112" height="28"> -->
      Afiq Hamzah
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
