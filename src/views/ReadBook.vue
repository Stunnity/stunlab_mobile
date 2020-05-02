<template>
  <div id="app">
    <PDFDocument v-bind="{url, scale}" />
  </div>
</template>

<script>
  import PDFDocument from "../components/pdf/PDFDocument";
export default {
  name:"ReadBook",
  components:{
    PDFDocument
  },
  data() {
    return {
      url: 'http://www.ngororero.gov.rw/fileadmin/templates/document/planning_documents/signature__imihigo_2018-2019_with_h.e.pdf', // a PDF
      scale: 2,
    }
  },
}
</script>

<style scoped>

</style>