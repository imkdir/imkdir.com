<template>
    <article>
        <p class="q">What's your name?</p>
        <p class="a">My Chinese name is 程东; the English name is Tung CHENG.</p>
        <p class="q">How long have you been working as an iOS Engineer?</p>
        <p class="a">Three and a half years now.</p>
        <p class="q">What's your last job?</p>
        <p class="a">My last job is at nonda — a company designated in making IoT products, primarily Car related smart devices. It's my first job, and I work in a small team as a junior with two other senior iOS engineers. The software department consists of about twenty people. We have three Apps on the App Store, but the one we mainly focus on is ZUS, an App that connects all the Car related products made by nonda.</p>
        <p class="q">What had you been doing at your last job?</p>
        <p class="a">The App later went through a complete redesign. As I was working on the UI and prototype, other team members were busy researching architecture and designing the domain model. At first, we divide the task based on one's specialty; one(a.k.a me) work on UI, other on the domain model, and another on researching technique solutions. Later they taught me the tricks and let me handle the whole task until I was the one who maintained the entire project.</p>
        <p class="q">Why you leave the company?</p>
        <p class="a">I thought you'd never ask. I think the reason I resigned after two and a half years is a personal one. I'm fortunate to have such a team when I landed my first job. However things happened, the company's culture changed, made us didn't fit in anymore. So my teammates resigned once they got an offer. I decide to go back to my hometown, and I thought it would be cool to be an indie iOS developer.</p>
        <p class="q">How does that go? The indie iOS developer thing.</p>
        <p class="a">Until now, I made two Apps to the App Store; one of them is for calorie tracking; the other is for note-taking. As much as I expected, I can't make money out of it. So I joined friends to do contractor jobs, though it has decent pay, I can't make a career out of it either.</p>
        <p class="q">Where can we contact you?</p>
        <figure>
            <img src="../../statics/image/qr_code_contact.png" width="135" alt="">
        </figure>
    </article>
</template>

<script>
    export default {
        name: "Resume"
    }
</script>

<style scoped>
    article {
        width: 95%;
    }
    article p {
        text-align: justify;
    }
    p.q {
        font-weight: bold;
    }
</style>