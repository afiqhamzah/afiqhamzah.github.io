<template>
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">

  <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item has-text-light" href="https://afiqhamzah.github.io/">
          Afiq Hamzah's Page
        </a>
      </div>
  </div>
  
  <div class="navbar-menu" >
      <div class="navbar-end">
         <a class="navbar-item">
            <pdf-exporter
                :target="target"
            ></pdf-exporter>
        </a>     
      </div>
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
