<template>
  <div  style="height: 100%; display: flex; justify-content: space-around; flex-direction: column;">
    <multi-lines :lines="lines"/>
    <div>
      <div style="display: flex; justify-content: space-around;">
        <div>
          <h1>Première visite ?</h1>
          <el-button round type="primary" @click="()=>router.push({name:'tutorial'})" :icon="ArrowLeftBold">
            <h1>Tutoriel</h1> 
          </el-button>
        </div>
        <div>
          <h1>A vous de jouer !</h1>
           <el-button round type="primary" @click="()=>router.push({name:'tool'})">
            <h1>GO</h1> 
            <el-icon>
              <ArrowRightBold/>
            </el-icon>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowRightBold,
  ArrowLeftBold
} from '@element-plus/icons-vue'
import MultiLines from '@/components/text/Lines.vue'
import { useRouter} from 'vue-router'

const router = useRouter()
</script>

<script>
export default {
  name: 'StartView',
  data: () => {
    return {
      lines: [
        [{ text: "Un rafraîchissement de la peinture ? Une nouvelle cuisine ?", bold: true }],
        [{ text: "Modélisez vos futurs travaux dans l'appartement de vos rêves, avant l'achat !" }],
        [
          { text: "Grace à la " },
          { text: "création de devis réel en simultané", bold: true },
          { text: ", maitrisez vos budgets et programmez une visite du bien, en connaissance de cause !" },
        ],
        [
          { text: "Et si vous achetez, " },
          { text: "réalisez vos travaux, sans surprise", bold: true },
          { text: ", grace aux entreprises partenaires..." },
        ],
      ]
    }
  }
}
</script>