<template>
  <ParentLayout>
    <!-- 这里组件出不来 -->
    <!-- <Vssue/> -->
  </ParentLayout>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { usePageData } from "@vuepress/client";

import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import 'vssue/dist/vssue.css';


</script>

<style lang="scss">
</style>