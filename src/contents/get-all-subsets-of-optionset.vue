<template>
    <article>
        <h2>Get All Possible Subsets of OptionSet</h2>
        <figure>
            <img src="../assets/image/ubficd-01.png" width=400 alt="">
        </figure>
        <p>P.S.If you work with Core Data and have an attribute stores an OptionSet's rawValue, use this line to build an NSPredicate for querying.</p>
        <p class="code">NSPredicate( format: "(%K >> %i) & 1 == 1", #keyPath(optionSetAttr), bitToQuery)</p>
    </article>
</template>

<style scoped>
    article p {
        text-align: justify;
    }
    figure img {
        width: 100%;
    }
    p.code {
        font-family: monospace;
    }
</style>