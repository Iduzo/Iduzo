<template>
  <div style="height:100%">
    <el-input
    v-model="query"
    placeholder="Please enter keyword"
    @input="onQueryChanged"
    style="margin:10px; width:265px;"
    />
    
    <el-tree
    ref="treeRef"
    :filter-method="filterMethod"
    :data="data"
    :props="props"
    draggable
    :allow-drag="(node)=> node.isLeaf"
    :allow-drop="(node, target)=> !target"
    @node-drag-end="dragendHandler"
    style="margin:10px;"
    >
      <template #default="{ node }">
        <div v-if="node.isLeaf" style="display: flex; justify-content: space-between; width:100%; margin-right:5px">
          <img :src="node.data.image" class="library-image"/>
          {{node.label}} <span v-if="node.data.price">{{node.data.price}}€/m²</span>
        </div>
        <div v-else>
          {{node.label}}
        </div>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const query = ref()
  const treeRef = ref()
  const onQueryChanged = (query) => {
    treeRef.value.filter(query)
  }

  const props = {
    value: 'value',
    label: 'label',
    children: 'children',
    price: 'price',
  }
</script>

<script>
export default {
  name: 'LibraryMenu',
  props: {},
  data: () => {
    return {
      data: [
        {
          value: "floor",
          label: "Sols",
          children: [
            {
              value: "wood",
              label: "Parquet",
              children: [
                {
                  value: "vivienne",
                  label: "Vivienne",
                  price: 100,
                  image: "https://www.carresol-parquet.com/9421-large_default/batons-rompus-chene-semi-massif-vivienne-1645x90x500-mm-huile.jpg"
                },
                {
                  value: "vivienne2",
                  label: "Vivienne2",
                  price: 150,
                  image: "https://www.carresol-parquet.com/9421-large_default/batons-rompus-chene-semi-massif-vivienne-1645x90x500-mm-huile.jpg"
                }
              ]
            }
          ]
        },
         {
          value: "walls",
          label: "Murs",
          children: [
            {
              value: "peinture",
              label: "Peinture",
              children: [
                {
                  value: "bleu",
                  label: "Bleu",
                  price: 100,
                  image: "https://www.carresol-parquet.com/9421-large_default/batons-rompus-chene-semi-massif-vivienne-1645x90x500-mm-huile.jpg"
                },
                {
                  value: "rouge",
                  label: "Rouge",
                  price: 150,
                  image: "https://www.carresol-parquet.com/9421-large_default/batons-rompus-chene-semi-massif-vivienne-1645x90x500-mm-huile.jpg"
                }
              ]
            }
          ]
        },
      ],
    }
  },
  methods: {
    filterMethod(query, node) {
      return node.label.includes(query)
    },
    dragendHandler(node, target, type, event) {
      console.log(node, target, type, event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .library-image{
    width:20px;
    height:20px;
    border-radius: 5px;
    margin-right: 5px;
  }

</style>

<style lang="scss">
  .el-tree.is-dragging .el-tree-node__content{
    cursor:grabbing !important
  }
</style>