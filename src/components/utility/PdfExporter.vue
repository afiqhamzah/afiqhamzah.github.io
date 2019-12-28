<template>
  <div>
    <button class="button is-link"  @click="exportToPdf">Download Pdf</button>
  </div>
</template>

<script>

export default {

  props: {
    target: {
      type: String,
      default: ''
    }
  },

  methods: {
    exportToPdf() {
      var element = document.getElementById(this.target);
      var opt = {
        margin: 1,
        filename: "afiq_hamzah_resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save();
    }
  },

  mounted() {
    window.html2pdf = require("html2pdf.js");
  }
};
</script>

<style scoped>
</style>
