<template>
  <div>
    <button class="button is-light has-text-primary is-hidden-touch" @click="exportToPdf">
      Download Resume as PDF &nbsp; &nbsp;
      <b-icon icon="file-download" />
    </button>
    <button
      class="button is-light has-text-primary is-hidden-desktop is-hidden-tablet"
      @click="exportToPdf"
    >
      PDF Resume &nbsp; &nbsp;
      <b-icon icon="file-download" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: ""
    }
  },

  methods: {
    exportToPdf() {
      this.$swal({
        type: "success",
        title: "PDF Generated",
        text: "Click OK to start downloading"
      }).then(result => {
        const elements = document.getElementsByClassName("target_pdf");
        let visible_target = null;

        for (let target of elements) {
          const parent = target.parentElement.parentElement.parentElement;
          const visible_parent = window
            .getComputedStyle(parent)
            .getPropertyValue("display");
          if (visible_parent !== "none") {
            visible_target = target;
          }
        }

        let opt = {
          margin: 1,
          filename: `afiq_hamzah_resume (${moment().format(
            "MMM Do YYYY"
          )}).pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };

        html2pdf()
          .set(opt)
          .from(visible_target)
          .save();
      });
    }
  },

  mounted() {
    window.html2pdf = require("html2pdf.js");
    window.moment = require("moment");
  }
};
</script>

<style scoped>
</style>
