<template>
    <article>
        <h2>You Shall Be Released</h2>
        <p>Recently I picked up a project I left behind a few months ago. I read the code; the structure isn't much clear -- it separates the files based on the Model-View-Controller roles, while I switched to the structure which group files based on their domain roles and expresses each domain's functionality via components. Other than that, it looks decent to me.</p>
        <p>The reason I dropped the project? Perhaps I dig it too long and can't find the focus, so I shifted to another project for a breath of fresh.</p>
        <p>Never mind that now, I want an app where I can write down notes like plain text, with some custom syntax if necessary, and view it with a customizable user interface. At that time, I was learning Japanese, so I start with the vocabulary list and kanji card deck features in mind.</p>
        <p>For the reading part, I add an appearance customize page, as for the writing part, I add a document editor module, use newlines with some tokens to parse the plain text to a document in memory, and save each instance as a JSON file in local storage.</p>
        <p>If I ever doubted that was too complex, I don't think it is now, for I picked up the idea very quickly. And this time I want to finish it as soon as possible.</p>
        <p>First, now dark mode has come out, implementing it is a piece of cake.</p>
        <p>Second is the fun part -- code refactoring, I certainly got better at naming.</p>
        <p>Third, add customization where users can define the action when they tap a row or card; change the way to favorite a document from swiping to the right to touch a star-shaped button; share a record as Markdown file instead of plain JSON. This time I am the user who dogfoods, also the coder who then fixed it.</p>
        <p>Last but not least, I include a set of examples with a User Manual in the bundle and load it on the first install.</p>
        <p>With a few screenshots, a few words of description, I launched it on the App Store.</p>
    </article>
</template>

<script>
    export default {
        name: "bring-back-old-project"
    }
</script>

<style scoped>
    article p {
        text-align: justify;
    }
</style>