<template>
  <div>
    <button class="button"  @click="exportToPdf">Download Pdf</button>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

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
  }
};
</script>

<style scoped>
</style>
