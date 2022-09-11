<template>
  <div>
    <p v-for="(line, index) in lines" :key="index">
      <span v-for="(elem, indexElem) in line" :key="indexElem">
        <b v-if="elem.bold">
          {{elem.text}}
        </b>
        <span v-else>
          {{elem.text}}
        </span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MultiLines',
  components: {
  },
  props: {
    lines: Array,
    //lines should be in this format
    // [
    //   [{ text: "any text", bold: boolean }]
    // ]
  }
}
</script>