<template>
    <div class="miscellaneous">
        <section>
            <h2>printf</h2>
            <p>
                Most of the time coding in Swift and Xcode, also know a little about JavaScript,
                Python, and command line.
            </p>
        </section>
        <section>
            <h2>itools</h2>
            <ul>
                <li><p>iMac(Retina 4k, 21.5-inch, Late 2015)</p></li>
                <li><p>MacBook Pro(13-inch, 2019, Two Thunderbolt 3 ports)</p></li>
                <li><p>Surface Pro(borrowed from a friend)</p></li>
                <li><p>HHKB Professional 2(PD-KB400WN)</p></li>
                <li><p><router-link to="/tools">Here</router-link> is a list of production tools on my Mac.</p></li>
            </ul>
        </section>
        <section>
            <h2>datetime</h2>
            <p>My spare time is mostly spend on reading <router-link to="books">books</router-link>,
                watching <router-link to="/films">films</router-link> and <router-link to="/shows">shows</router-link>,
                playing <router-link to="/games">video games</router-link>, learning English and Japanese.</p>
        </section>
    </div>
</template>

<style scoped>
.miscellaneous {
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