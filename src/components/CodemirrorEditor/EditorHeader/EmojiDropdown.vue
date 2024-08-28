<script setup>
import { ref } from 'vue'

// eslint-disable-next-line import/order
import AboutDialog from './AboutDialog.vue'
import { EmojiIndex, Picker } from 'emoji-mart-vue-fast/src'
// all emoji sets.
import data from 'emoji-mart-vue-fast/data/all.json'
// Import default CSS
import 'emoji-mart-vue-fast/css/emoji-mart.css'

import { storeToRefs } from 'pinia'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useStore } from '@/stores'

const props = defineProps([`isOpen`, `clickTrigger`, `openDropdown`, `updateOpen`])

const store = useStore()

const { editor } = storeToRefs(store)

const aboutDialogVisible = ref(false)

const emojiIndex = new EmojiIndex(data)

const emojiI18n = {
  search: `搜索...`,
  categories: {
    search: `搜索结果`,
    recent: `经常使用`,
    smileys: `心情`,
    people: `人物`,
    nature: `动物 & 大自然`,
    foods: `食物 & 饮料`,
    activity: `活动`,
    places: `旅行 & 地标`,
    objects: `物体`,
    symbols: `符号`,
    flags: `国旗`,
    custom: `自定义`,
  },
}

function emojiSelected(emoji) {
  editor.value.doc.replaceRange(emoji.native, editor.value.doc.getCursor())
}
</script>

<template>
  <DropdownMenu :open="props.isOpen" @update:open="props.updateOpen">
    <DropdownMenuTrigger
      class="flex items-center p-2 px-4 hover:bg-gray-2 dark:hover:bg-stone-9"
      :class="{
        'bg-gray-2': props.isOpen,
        'dark:bg-stone-9': props.isOpen,
      }"
      @click="props.clickTrigger()"
      @mouseenter="props.openDropdown()"
    >
      Emoji 😀
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <Picker :data="emojiIndex" set="apple" :i18n="emojiI18n" :per-line="10" :color="null" title="Emoji键盘" emoji="grinning" @select="emojiSelected" />
    </DropdownMenuContent>
  </DropdownMenu>

  <AboutDialog
    :visible="aboutDialogVisible"
    @close="aboutDialogVisible = false"
  />
</template>
