<template lang="pug">
a-card(:bordered="false")
  a-list(size="small" :hoverable="true" :bordered="false")
    TransitionGroup(name="list")
      a-list-item(v-for="log of logs" :key="log" :log="log")
        a-space.info(fill :size="10")
          icon-check-circle.success-color.icon-14(v-if="!log.error")
          icon-close-circle.danger-color(v-else)
          .start-time
            | {{ log.startTime }}
          a-popover(
            v-if="log.codeInfo && log.codeTooltip"
            position="tl"
            content-class="code-tooltip"
            :content="log.codeTooltip"
          )
            .file-info {{ log.codeInfo }}
          .file-info(v-else-if="log.codeInfo") {{ log.codeInfo }}
          a-space(v-if="log.message" :size="3")
            | {{ log.message }}
            .total-time(v-if="!log.error")
              | {{ `in ${log.networkTime} ms` }}
          a-tooltip(
            v-if="log.error"
            position="tl"
            content-class="ingest-log-tooltip"
            :content="log.error"
          )
            div {{ log.error }}
</template>

<script lang="ts" name="Log" setup>
  import type { Log } from '@/store/modules/log/types'

  const props = defineProps<{
    logs: Log[]
    types: string[]
  }>()

  const { clearLogs } = useLog()

  const clear = () => {
    clearLogs(props.types)
  }
</script>

<style lang="less" scoped>
  :deep(.arco-list-content) {
    flex-direction: column-reverse;
    display: flex;
  }

  .start-time {
    font-size: 11px;
  }

  .info {
    :deep(.arco-space-item:last-of-type) {
      overflow: hidden;
      > div {
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  :deep(.arco-list-item-main) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :deep(.arco-item-main) {
    width: 100%;
  }

  :deep(.arco-list-small .arco-list-content-wrapper .arco-list-content > .arco-list-item) {
    padding: 4px 12px;
  }
  :deep(.arco-list-item) {
    border-bottom: 1px solid var(--border-color);
  }

  :deep(.arco-list-item:not(:last-child)) {
    border-color: var(--border-color);
  }
  :deep(.arco-list) {
    border-radius: 0;
    font-size: 12px;
    color: var(--main-font-color);
  }

  .total-time {
    background: var(--th-bg-color);
    border-radius: 4px;
    padding: 0 4px;
    min-width: max-content;
  }

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>

<style lang="less">
  .ingest-log-tooltip {
    max-width: 600px;
  }
  .arco-popover-popup-content.code-tooltip {
    font-family: monospace;
    white-space: pre;
  }
</style>
