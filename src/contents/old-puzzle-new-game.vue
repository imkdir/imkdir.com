<template>
    <article>
        <h2>Once Upon a Puzzle</h2>
        <p>Once while I was online looking for a job, a company's job application form requires one to solve a puzzle before one can submit, the question states:</p>
        <p><em>Only the white block is movable, in the left, right, up, and down direction. Give the shortest sequence of steps to go from A to B.</em></p>
        <figure>
            <img src="../../statics/image/puzzle-ab.png" width="256" alt="">
        </figure>
        <p>So I made an app for me to try out this puzzle.</p>
        <video width="250" controls>
            <source src="../../statics/video/puzzle-app.mp4" type="video/mp4">
        </video>
        <p>Now fast forward, three years later, I still don't know the answer, but yesterday I came across this project while I was cleaning up my repositories. I cloned it and decided to have a look, why not?
            Within half an hour, I finished refactoring and some UI refinements, as this is 1.1, not 2.0. Surprisingly I learned a lot during this cleanup:</p>
        <ul>
            <li>Upgrading from swift 2 to 5 for such a small code base only needs less than a minute.</li>
            <li>Refactoring reduces a lot of code, cloc shows code lines went from 346 down to 157. The program becomes more straightforward, as comment line count went down too.</li>
            <li>Without any 3rd party framework dependencies, from iOS to Catalyst is just two checkboxes away.</li>
            <li>Avoid assigning cgColor to layer properties; they don't support dark mode at all.</li>
            <li>If you go with Storyboard, <em>Embed in View</em> is your friend, it makes Auto Layout dead simple.</li>
            <li>Even in Storyboard, watch out for violating the DRY principle. When there are many copies of @IBDesignable views, and most of them have the same style, move the appearance setup into source code.</li>
            <li>Global constant (let alone variable!) is problematic. You can do better.</li>
            <li>Every crash on force unwrapped nil is an opportunity to change the function's return type to Optional and apply guard against its assignment.</li>
        </ul>
        <p>I created this project on October 10, 2016, while I was looking for a job, three days later, I got my first job; thus, this toy project always has a special meaning to me.</p>
    </article>
</template>
<script>
    export default {
        name: "old-puzzle-new-game"
    }
</script>

<style scoped>
    article p, ul {
        text-align: justify;
    }
</style>