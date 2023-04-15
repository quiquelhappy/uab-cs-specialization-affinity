<template>
  <div class="text-center mt-10" v-if="question < 0">
    <v-row>
      <v-col cols="auto">
        <v-switch @change="ttsTest()" :disabled="tts == null" v-model="tts" label="TTS" />
      </v-col>
      <v-col>
        <v-btn @click="question = 0" block size="x-large">
          Start Test
        </v-btn>
      </v-col>
    </v-row>
  </div>
  <div class="text-center my-10 py-10" v-else-if="shuffled.length <= 0">
    <v-progress-circular indeterminate size="large" />
  </div>
  <v-card :style="`margin-bottom:${($refs['vote']?.offsetHeight ?? 0) + 40}px`" v-else-if="voting" class="mt-5">
    <v-progress-linear color="primary" :model-value="progress" />
    <v-list-item class="my-3" :title="subjects[id].name">
      <template v-slot:prepend>
        <v-btn variant="outlined" class="mr-5" icon="mdi-text-box-search-outline"
          :href="`https://guies.uab.cat/guies_docents/public/portal/html/${year}/assignatura/${id}/en`" />
      </template>
    </v-list-item>
    <v-divider />
    <div style="line-height: 2.3em;" class="my-3 pa-5">
      <div v-if="Array.isArray(subjects[id].description)">
        <v-list-item prepend-icon="mdi-circle-small" v-for="t, i in subjects[id].description" :key="`${id}-${i}`">
          {{ t }}
        </v-list-item>
      </div>
      <span v-else>
        {{ subjects[id].description }}
      </span>
    </div>
  </v-card>
  <div v-else>
    <v-card :variant="i == 0 ? 'tonal' : undefined" :color="i == 0 ? 'green' : null" class="mb-4 py-4"
      v-for="specialization, i in Object.keys(Object.fromEntries(Object.entries(this.affinity).sort(([, a], [, b]) => a - b))).reverse()"
      :key="specialization">
      <v-list-item :title="specializations[specialization].name">
        <template v-slot:append>
          <v-progress-circular :model-value="Math.abs(affinity[specialization]) * 100"
            :color="affinity[specialization] > .5 ? 'green' : (affinity[specialization] > .3 ? 'yellow' : 'red')"
            size="x-large">
            {{ Math.trunc(affinity[specialization] * 10000) / 100 }}%
          </v-progress-circular>
        </template>
      </v-list-item>
    </v-card>
  </div>
  <div v-if="voting" ref="vote" style="position:fixed; bottom:30px; width: 100%; left: 0px">
    <v-container style="max-width: 700px;">
      <v-card border class="pa-5">
        <p class="text-center mb-5">Based on this information, do you believe you would like to course this subject?</p>
        <v-row>
          <v-col cols="12" md="4">
            <v-btn @click="preference(id, -1)" prepend-icon="mdi-thumb-down" block color="red" size="x-large"
              variant="tonal">
              Won't Like
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn @click="preference(id, 0)" block size="x-large" variant="tonal">
              Indifferent
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn @click="preference(id, 1)" append-icon="mdi-thumb-up" block color="green" size="x-large"
              variant="tonal">
              Would Like
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { subjects, specializations } from '@/assets/subjects'
export default {
  data: () => ({
    affinity: {},
    question: -1,
    subjects: subjects,
    specializations: specializations,
    shuffled: [],
    tts: null,
    voice: null
  }),
  watch: {
    question() {
      if (this.voting && this.tts) {
        this.speak(`${this.subjects[this.id].name}: ` + (Array.isArray(this.subjects[this.id].description) ? ("In this course, you'll: " + this.subjects[this.id].description.join(', ')) : this.subjects[this.id].description))
      }
    }
  },
  computed: {
    year() {
      const now = new Date()
      return now.getMonth() < 8 ? (now.getFullYear() - 1) : now.getFullYear()
    },
    id() {
      return this.shuffled[this.question]
    },
    progress() {
      return this.question / Object.keys(subjects).length * 100
    },
    voting() {
      return this.question < Object.keys(subjects).length && this.question >= 0
    },
  },
  methods: {
    speak(t){
      const utt = new SpeechSynthesisUtterance(t)
        utt.rate=1.2
        utt.voice=this.voice
        utt.lang='en'
        this.window.speechSynthesis.speak(utt);
    },
    ttsTest() {
      if (this.tts) {
        console.log('testing tts')
        this.speak('Text to speech enabled')
      }
    },
    preference(subjectId, val) {
      this.question++
      for (const id in specializations) {
        if (Object.hasOwnProperty.call(specializations, id)) {
          const specialization = specializations[id];
          if (specialization.subjects.includes(subjects[subjectId])) {
            this.affinity[id] += Math.trunc(val / specialization.subjects.length * 1000) / 1000
          }
        }
      }
    }
  },
  async mounted() {
    this.affinity = {}
    for (const specializationId in specializations) {
      if (Object.hasOwnProperty.call(specializations, specializationId)) {
        this.affinity[specializationId] = 0
      }
    }
    this.shuffled = Object.keys(subjects)
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)


    for (let i = 0; i < 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      try {
        const voices = this.window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          this.tts = false
          if (voices.length <= 0) throw new Error('no voices')
          this.voice = voices.find(v => v.voiceURI.includes('English'))
          const better = voices.find(v => v.voiceURI.includes('English') && v.voiceURI.includes('Male'))
          if (better) this.voice = better
          break;
        }
      } catch (error) {

      }
    }
  }
}
</script>