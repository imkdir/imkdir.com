<template>
    <article>
        <h2>Notes on UNIX Programming Environment</h2>
        <p>I took notes during reading UNIX Programming Environment and UNIX Power Tools; the content of the records covers several topics. It is kind of messy, so I decide to review the material and pick up where I most often used in practice.</p>
        <h4>Create a background process</h4>
        <pre><code>wc ch* > wc.out &</code></pre>
        <h4>Fix the previous command</h4>
        <pre><code>^type^correct</code></pre>
        <h4>Mistakes in typing</h4>
        <ul>
            <li>line kill <span>ctrl-u</span></li>
            <li>backspace <span>ctrl-h</span></li>
            <li>move to beginning <span>ctrl-a</span></li>
            <li>delete after <span>ctrl-d</span></li>
        </ul>
        <h4>Repeat the last command</h4>
        <pre><code>!!</code></pre>
        <h4>Philosophy</h4>
        <p>When a more complicated structure is needed, it can easily be built on top of the simple scheme,
            creating simplicity from complexity, is harder to achieve.</p>
        <p>Strategy: start with the bare minimum that does something useful, then add features and options (only) if the need arises.</p>
        <p>Indeed, there are too many features that we can add to this program. It's better to make a stripped-down version, then let it evolve as experience dictates. That way, the features are the ones that people really want, not the ones we thought they would want.</p>
        <p>The question of whether to write a new program or to add features to an old one...a program should only do one basic job -- if it does too many things, it gets bigger, slower, harder to maintain, and harder to use. Indeed, the features often lie unused because people can't remember the options anyway.</p>
        <p>It's worth watching for opportunities to build on someone else's labor instead of doing it yourself -- it's a cheap way to be more productive.</p>
        <p>In the early stages of writing a program, it's tempting to skimp on error handling, since it is a diversion from the main task. And once the program "works," it's hard to be enthusiastic about going back to put in the checks that convert a private program into one that works regardless of what happens.</p>
        <p>But for real, production programs, you can't afford to ignore errors.</p>
    </article>
</template>

<style scoped>
    article p {
        text-align: justify;
    }
    ul {
        list-style: none;
    }
    span {
        background-color: black;
        color: white;
        font-family: monospace;
    }
</style>