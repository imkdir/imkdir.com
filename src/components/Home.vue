<template>
    <article>
        <section>
            <h2>whois</h2>
            <p>Welcome to my web site, my name is Tung CHENG, I've been an iOS developer since 2016,
                graduated from Qingdao University in 2015, major in Computer Science and Engineering.
                After my first job as an iOS developer at nonda for two and a half years in Shanghai,
                I quited the job and moved back to my hometown to work as a freelancer. During this time,
                I enrolled my own Apple Developer Program and delivered my first app to the App Store
                while doing a contractor job with friends. You can view my timeline <router-link to="/timeline">here</router-link>.
            </p>
        </section>
        <section>
            <h2>contact</h2>
            <p>
                E-Mail: <a href="mailto:objectivecheng@gmail.com">objectivecheng@gmail.com</a><br>
                Tweet: <a href="https://twitter.com/imkdir">@imkdir</a>
            </p>
        </section>
    </article>
</template>

<style scoped>
article {
  text-align: justify;
}

p {
  font-size: 18px;
  font-weight: 500;
  color: slategray;
}

a {
  color: dimgray;
  font-weight: bold;
  text-decoration: none;
}

section h2 {
  text-align: left;
}
</style>