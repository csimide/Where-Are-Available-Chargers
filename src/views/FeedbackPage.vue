<!-- 反馈问卷页面 -->

<template>
  <loading-indicator v-if="!isIframeLoaded" />
  <iframe
    v-show="isIframeLoaded"
    :src="config.surveyUrl"
    height="100%"
    width="100%"
    style="border: 0; display: block"
    referrerpolicy="no-referrer"
    @load="isIframeLoaded = true"
  ></iframe>
</template>

<script lang="ts" setup>
import { onBeforeMount, onUnmounted, ref } from 'vue';
import { useAppStore } from '@/store/app';
import config from '@/config';

import { LoadingIndicator } from '@/components/global';

const appStore = useAppStore();

const isIframeLoaded = ref(false);

// 此页面不显示 Footer
onBeforeMount(() => {
  appStore.isFooterVisible = false;
});
onUnmounted(() => {
  appStore.isFooterVisible = true;
});
</script>
