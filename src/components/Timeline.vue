<template>
    <div>
        <div class="timeline-content" v-for="item in list" :key="item.date">
            <TimelineBlock :item="item"/>
        </div>
    </div>
</template>

<script>
import TimelineBlock from "@/components/TimelineBlock";
import TimelineList from '../../statics/data/timeline.json';

export default {
    components: {TimelineBlock},
    data() {
        return {
            list: TimelineList
        }
    },
    component: { TimelineBlock }
}
</script>