<template>
    <div class="blog-entries">
        <MyFavoriteBooks2019 />
        <div class="separator"></div>
        <StoryBehindEatles />
        <div class="separator"></div>
        <GetAllSubsetsOfOptionSet />
        <div class="separator"></div>
        <NotesOnUnixEnv />
        <div class="separator"></div>
        <MyFavoriteBooks2018 />
    </div>
</template>

<script>
import MyFavoriteBooks2018 from '../contents/my-favorite-books-2018';
import NotesOnUnixEnv from '../contents/notes-on-unix-env';
import GetAllSubsetsOfOptionSet from '../contents/get-all-subsets-of-optionset';
import StoryBehindEatles from '../contents/story-behind-eatles';
import MyFavoriteBooks2019 from '../contents/my-favorite-books-2019';

export default {
    name: 'Blog',
    components: {
        MyFavoriteBooks2018,
        NotesOnUnixEnv,
        GetAllSubsetsOfOptionSet,
        StoryBehindEatles,
        MyFavoriteBooks2019,
    }
}
</script>

<style scoped>
.blog-entries {
    display: flex;
    flex-direction: column;
}
.separator {
    height: 1px;
    margin: 10px 0 10px 0;
    background-color: #ccc;
}
</style>