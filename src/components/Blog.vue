<template>
    <div class="blog-entries">
        <LeavingForSH />
        <div class="separator"></div>
        <MindMapDI />
        <div class="separator"></div>
        <OldPuzzleNewGame />
        <div class="separator"></div>
        <BringBackOldProject />
        <div class="separator"></div>
        <MyFavoriteBooks2019 />
        <div class="separator"></div>
        <StoryBehindEatles />
        <div class="separator"></div>
        <GetAllSubsetsOfOptionSet />
        <div class="separator"></div>
        <NotesOnUnixEnv />
    </div>
</template>

<script>
import NotesOnUnixEnv from '../contents/notes-on-unix-env';
import GetAllSubsetsOfOptionSet from '../contents/get-all-subsets-of-optionset';
import StoryBehindEatles from '../contents/story-behind-eatles';
import MyFavoriteBooks2019 from '../contents/my-favorite-books-2019';
import BringBackOldProject from '../contents/bring-back-old-project';
import OldPuzzleNewGame from '../contents/old-puzzle-new-game';
import MindMapDI from '../contents/mind-map-dependency-injection';
import LeavingForSH from '../contents/leaving-for-shanghai';

export default {
    name: 'Blog',
    components: {
        NotesOnUnixEnv,
        GetAllSubsetsOfOptionSet,
        StoryBehindEatles,
        MyFavoriteBooks2019,
        BringBackOldProject,
        OldPuzzleNewGame,
        MindMapDI,
        LeavingForSH,
    }
}
</script>

<style scoped>
.blog-entries {
    width: 95%;
    display: flex;
    flex-direction: column;
}
.separator {
    height: 1px;
    margin: 10px 0 10px 0;
    background-color: #ccc;
}
</style>