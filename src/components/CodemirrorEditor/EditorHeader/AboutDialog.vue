<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([`close`])

const links = [
  { label: `GitHub 仓库`, url: `https://github.com/dahaha-365/md` },
]

function onRedirect(url) {
  window.open(url, `_blank`)
}
</script>

<template>
  <el-dialog
    title="关于"
    class="about__dialog"
    :model-value="props.visible"
    width="520"
    center
    @close="emit('close')"
  >
    <div class="text-center">
      <h3>一款高度简洁的微信 Markdown 编辑器</h3>
      <p>没空写关于，这个编辑器是我自己用的。</p>
    </div>
    <template #footer>
      <el-button
        v-for="link in links"
        :key="link.url"
        type="primary"
        plain
        @click="onRedirect(link.url)"
      >
        {{ link.label }}
      </el-button>
    </template>
  </el-dialog>
</template>
