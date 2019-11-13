<template>
    <div class="container">
        <div class="profile">
            <div class="profile-header">
                <h2>Tung CHENG</h2>
                <a href="https://github.com/imkdir" target="_blank"><font-awesome-icon :icon="github" /></a>
                <a href="https://goodreads.com/imkdir" target="_blank"><font-awesome-icon :icon="goodreads" /></a>
                <a href="https://twitter.com/imkdir" target="_blank"><font-awesome-icon :icon="twitter" /></a>
                <a href="https://instagram.com/imkdir" target="_blank"><font-awesome-icon :icon="instagram" /></a>
                <p><a href="tel:+8618616588235">TEL: 18616588235</a></p>
                <p><a href="mailto:objectiveCHENG@gmail.com">E-Mail: objectiveCHENG@gmail.com</a></p>
            </div>
            <h3>Profile</h3>
            <p>Been Coding in Objective-C and Swift for four years, with several projects on the App Store and open-sourced on GitHub. Keen on clean code and modern techniques with board interests in user interface design, programming languages & frameworks.</p>
        </div>
        <div class="experience-list">
            <h3>Experiences</h3>
            <div class="experience">
                <h4>2019 - Current, <em>Freelancer</em></h4>
                <p>During this time, I published two apps on the App Store, which designed and written independently, did a contractor job for jukuner, and other side projects for learning purposes.</p>
            </div>
            <div class="experience">
                <h4>2016 - 2018, <em>nonda iOS Application Engineer</em></h4>
                <p>During that time, I worked as an iOS Engineer on a team with two other members, maintaining and iterating nonda's ZUS project for about two and a half years. I got promoted once because of efficiency and quality at work.</p>
            </div>
        </div>
        <div class="project-list">
            <h3>Projects</h3>
            <div class="project">
                <h4>JukuSmart and Baseus Smart <em>for jukuner</em></h4>
                <ul>
                    <li>Language: Swift 5</li>
                    <li>Architecture: MVC</li>
                    <li>Frameworks: CoreBluetooth, RxSwift, Moya, WCDBSwift</li>
                    <li>UI: Auto Layout, XIB</li>
                    <li>cloc: 160 files, 12322 lines</li>
                </ul>
            </div>
            <div class="project">
                <h4>Eatles</h4>
                <ul>
                    <li>Language: Swift 5</li>
                    <li>Architecture: MVC</li>
                    <li>Frameworks: CoreData, RxSwift, Ariel, NDBKit</li>
                    <li>UI: Auto Layout, XIB</li>
                    <li>cloc: 130 files, 10111 lines</li>
                </ul>
            </div>
            <div class="project">
                <h4>ZUS <em>for nonda</em></h4>
                <ul>
                    <li>Language: Swift 4</li>
                    <li>Architecture: MVC</li>
                    <li>Frameworks: CoreBluetooth, Realm, RxSwift, Moya</li>
                    <li>UI: Auto Layout, XIB</li>
                    <li>cloc: 742 files, 76278 lines</li>
                </ul>
            </div>
        </div>
        <div class="education">
            <h3>Education</h3>
            <p>Qingdao University, Bachelor, Computer Science and Engineering</p>
        </div>
        <div class="skill-list">
            <h3>Skills</h3>
            <ul>
                <li>Good at Auto Layout, familiar with CoreGraphics drawing & animation API.</li>
                <li>Test RESTful API and implement it in iOS with Codable and libraries like Moya.</li>
                <li>Write unit tests against UIKit, familiar with TDD and CI tools like Jenkins.</li>
                <li>Work with Core Data or other frameworks like Realm.</li>
                <li>Familiar with MVVM, MVC architectures, and reactive programming library like RxSwift.</li>
                <li>Familiar with Xcode and other IDEs like AppCode.</li>
                <li>Know JavaScript, HTML&CSS, and Python.</li>
                <li>Use production efficiency skills like Vim, touch typing, and command line.</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { faGithub, faGoodreads, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    export default {
        name: "Resume",
        data() {
            return {
                github: faGithub,
                goodreads: faGoodreads,
                twitter: faTwitter,
                instagram: faInstagram
            }
        },
        components: { FontAwesomeIcon }
    }
</script>

<style scoped>
    .container {
        width: 95%;
    }
    h3, h4, p, ul {
        text-align: left;
    }
    .profile-header p {
        text-align: center;
    }
    .profile-header a {
        text-decoration: none;
        color: dimgrey;
        padding: 0 20px 0 20px;
    }
    h4 {
        color: #2c3e50;
    }
</style>