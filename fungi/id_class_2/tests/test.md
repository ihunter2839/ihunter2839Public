<style>
    img {
        max-width: 100vw;
        max-height: 50vh;
    }

    div.couplet_text {
        padding: .5rem;
        border: 1px solid black;
    }

    div.couplet_text:hover {
        background-color: grey;
    }

    div.couplet_note {
        display: none;
    }

</style>

<script>

    var sections; 

    var answer_key = {
        'k1-c1': 'a',
        'k2-c1': 'b',
        'k2-c2': 'b',
        'k2-c3': 'b',
        'k2-c4': 'b',
        'k2-c5': 'b',
        'k2-c6': 'b',
        'k2-c7': 'b',
        'k2-c10': 'b',
        'k2-c11': 'b',
        'k2-c12': 'b',
        'k2-c13': 'b',
        'k3-c1': 'b',
        'k3-c2': 'b',
        'k3-c3': 'b',
        'k3-c7': 'a',
        'k3-c8': 'a',
        'k3-c9': 'b',
        'k3-c13': 'b',
        'k3-c14': 'b'
    }

    // update the content that is currently visible on the page
    function updateContent() {
        // get the current hash fragment
        let href_split = window.location.href.split("#");
        let hash;
        if (href_split.length > 1) {
            hash = window.location.href.split('#')[1];
        } else {
            hash = 'intro';
        }

        // split the hash fragment into components
        let key, couplet;
        [key, couplet] = hash.split("-");

        sections.forEach(
            function(currentValue) {
                if ( currentValue.id === hash || currentValue.id === key) {
                    currentValue.style.display = 'block';
                } else {
                    currentValue.style.display = 'None';
                }
            }
        );
    }

    // check whether a user has selected the correct couplet
    function checkAnswer(elem) {
        let key, choice;
        [key, choice] = elem.id.split("_");
        console.log(key);
        console.log(choice);

        if (answer_key[key] === choice) {
            elem.style.backgroundColor = 'green';
        } else {
            elem.style.backgroundColor = 'red';
        }
    }

    function toggleNote(elem) {
        // elem is the note hide / show button, not the note itself
        let key, el;
        [key, el] = elem.id.split("_");
        console.log(key);
        console.log(el);

        // get the note text element
        let note_text = document.getElementById([key,"note"].join("_"));
        console.log(note_text);

        // note is currently hidden, need to show
        if (note_text.style.display === '') {
            note_text.style.display = 'block';
            elem.innerText = 'Hide notes';
        } else {
            console.log('setting display');
            note_text.style.display = '';
            elem.innerText = 'Show notes';
        }
    }

    function toggleTOC() {
        let toc = document.getElementById('toc');
        let toc_button = document.getElementById('toc_button');

        if (toc.style.display === 'block') {
            toc.style.display = 'None';
            toc_button.innerText = 'Show table of contents';
        } else {
            toc.style.display = 'block';
            toc_button.innerText = 'Hide table of contents';
        }
    }

    // add event listener to hide page content when hash fragment of url changes
    window.addEventListener(
        "hashchange", 
        updateContent,
        false
    );

    function addAnswerEventListeners() {
        var couplets = document.querySelectorAll('.couplet_text');

        couplets.forEach(
            function(currentValue) {
                currentValue.onclick = () => checkAnswer(currentValue);
            }
        );
    }

    function addNoteEventListeners() {
        var notes = document.querySelectorAll('.couplet_note_button');

        notes.forEach(
            function(currentValue) {
                currentValue.onclick = () => toggleNote(currentValue);
            }
        );
    }

    // things to do on page load
    window.addEventListener(
        "load",
        function () {
            //update the sections variable
            sections = document.querySelectorAll('section');
            // hide any content that shouldn't be visible at current url
            updateContent();
            // add onclick listeners to couplet buttons
            addAnswerEventListeners();
            // add onclick listeners to couplet note buttons
            addNoteEventListeners();
        },
    );

</script>

<nav id="toc">

- [Intro](#intro)
- [Key to Major Groups of Fleshly Fungi](#k1-c1)
    - [Couplet 1](#k1-c1)
- [Visual Key](#vk)
- [Key to the Boletaceae](#k2-c1)
    - [Couplet 1](#k2-c1)
    - [Couplet 2](#k2-c2)
    - [Couplet 3](#k2-c3)
    - [Couplet 4](#k2-c4)
    - [Couplet 5](#k2-c5)
    - [Couplet 6](#k2-c6)
    - [Couplet 7](#k2-c7)
    - [Couplet 10](#k2-c10)
    - [Couplet 11](#k2-c11)
    - [Couplet 12](#k2-c12)
    - [Couplet 13](#k2-c13)
- [Key to Boletus](#k3-c1)
    - [Couplet 1](#k3-c1)
    - [Couplet 2](#k3-c2)
    - [Couplet 3](#k3-c3)
    - [Couplet 7](#k3-c7)
    - [Couplet 8](#k3-c8)
    - [Couplet 9](#k3-c9)
    - [Couplet 13](#k3-c13)
    - [Couplet 14](#k3-c14)

</nav>


<button id="toc_button" onclick="toggleTOC()">
    
    Hide Table of Contents

</button>

<section id="intro" href="#intro">

# Bulbous Boletes

I found these two mushrooms mixed in oak and manzanita duff - I love their shades of red! 

![Mushrooms in wild](media/mushroom_wild.jpg)

And here it is back at home

![Mushroom on desk](media/mushroom.JPG)

## About this Page

This is a (slightly) interactive version of the keys presented in *Mushrooms Demystified* by David Arora, and page numbers in the text refer to the **second edition** of the book. 

<a href="#k1-c1">

Next

</a>

</section>

<section id ="k1" href="#k1">

## Keys to the Major Groups of Fleshy Fungi pg. 52

</section>

<section id="k1-c1" href="#k1-c1">

### Couplet 1 

<div id="k1-c1_a" class="couplet_text">

    Option 1 -
        Spores produced on mother cells called basidia
            AND
        Fruiting body variously shaped
        -> Go to Basidiomycotina, pg. 57

</div>

<div id="k1-c1_b" class="couplet_text">

    Option 2 -
        Spores produced inside mother cells called asci
            AND
        Fruiting body variously shaped
        -> Go to Ascomycotina, pg. 782

</div>

<button id="k1-c1_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k1-c1_note" class="couplet_note">

In the guide for Mushroom 1, we glanced over this couplet and moved directly into the visual key. Let's do the same thing here, and move to the visual key for the **Boletes**.

</div>

<a href="#intro">

Back

</a>

<a href="#vk">

Next

</a>

</section>

<section id="vk" href="#vk">

## Basidiomycetes Visual Key pg. 52

### Boletes
    Fruiting body with cap and stalk, fleshy (not tough or woody)
        AND
    Underside of cap with spongy, often separable layer of tube or pores
        AND
    Stalk more or less central
        AND
    Usually on ground but occasionally on wood
    -> Go to Boletes, pg. 488

The first thing that should be apparent with this mushroom is that it doesn't have gills; instead, the underside of the cap is covered with layer of vertically arranged tubes.

![Bolete tubes](media/tubes.JPG)

A quick note on the usage of the word **bolete**. 

- **Boletaceae** is the name of the *familiy* of mushrooms that have tubes on the underside of their caps.
- The Boletaceae family contains a number of *genera*, one of which is named ***Boletus***
- The common term *"bolete"* is applicable to **all the mushrooms in the family Boletaceae**, not just those in the genus *Boletus*
- Example: *Suillus luteus*, or the Slippery Jack, is not part of the genus *Boletus*, but is still commonly called a "bolete" 

With that out of the way, let's proceed to the key for Boletes.

<a href="#k1-c1">

Back

</a>

<a href="#k2-c1">

Next

</a>

</section>

<section id ="k2" href="#k2">

## Key to the Boletaceae pg. 489

</section>

<section id="k2-c1" href="#k2-c1">

### Couplet 1

<div id="k2-c1_a" class="couplet_text">

    Option 1 -
        Fruiting body often appearing aborted or misshapen and often buried or partially buried in the humus
            AND
        Tubes at least somewhat disoriented (i.e. not necessarilly arranged vertically)
            AND
        Spore print unobtainable
            AND
        Not common
        -> Go to Gastroboletus pg. 544

</div>

<div id="k2-c1_b" class="couplet_text">

    Option 2 - 
        Not as above
            AND
        Tubes vertically arranged
            AND
        Spore print usually obtainable
            AND
        Usually found above the ground when mature
        -> Go to Couplet 2

</div>

<button id="k2-c1_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c1_note" class="couplet_note">

The fruiting body on our mushroom is very well formed, with a substaintial and fleshy cap. Additionally, the tubes are oriented in a consistenly vertical arrangement, so option 2 seems like the best fit. Proceed to couplet 2.

</div>

<a href="#vk">

Back

</a>

<a href="#k2-c2">

Next

</a>

</section>

<section id="k2-c2" href="#k2-c2">

### Couplet 2

<div id="k2-c2_a" class="couplet_text">

    Option 1 -
        Cap and stalk shaggy or coarsely scaly, the scales gray to brown or black
            AND
        Pores whitish becoming gray or black in age
            AND
        Veil present when young
            AND
        Spore print dark brown to black
            AND
        Spores shiny, warty, or reticulate
            AND
        Found in eastern North America and Southwest
        -> Go to Strobilomyces, pg. 543

</div>

<div id="k2-c2_b" class="couplet_text">

    Option 2 - 
        Not as above
        -> Go to Couplet 3

</div>

<button id="k2-c2_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c2_note" class="couplet_note">

Our mushroom doesn't have a shaggy stalk or cap, and the pores (or tubes) are yellow to red in color. Option 2 seems like the better fit, proceed to couplet 3.

</div>

<a href="#k2-c1">

Back

</a>

<a href="#k2-c3">

Next

</a>

</section>

<section id="k2-c3" href="#k2-c3">

### Couplet 3

<div id="k2-c3_a" class="couplet_text">

    Option 1 - 
        Stalk roughened by smalled tufted hairs or scales (scabers) which are usually gray to dark brown or black by maturity (but differently colored or remaining pallid in a few species)
            AND
        Stalk not glandular-dotted and typically not reticulare
            AND
        Pores rarely yellow
        -> Go to Leccinum, pg. 536

</div>

<div id="k2-c3_b" class="couplet_text">

    Option 2 - 
        Not as above
            AND
        Stalk typically without scabers 
        -> Go to Couplet 4

</div>

<button id="k2-c3_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c3_note" class="couplet_note">

I am not familiar with what scabers look like, so let's get a comparison of our mushroom with a typical member of *Leccinum* genus. On the left is our mystery mushroom, and on the right is *Leccinum aurantiacum*, with its distinctive black scabers.

![An example of scabers](media/scabers.JPG)

Our mushroom doesn't seem to have scabers, and our pores are *very* yellow, so option 2 seems to be the best choice. Proceed to couplet 4.

</div>

<a href="#k2-c2">

Back

</a>

<a href="#k2-c4">

Next

</a>

</section>

<section id="k2-c4" href="#k2-c4">

### Couplet 4

<div id="k2-c4_a" class="couplet_text">

    Option 1 - 
        Bright, yellow, dry, cottony-powdery or cobwebby veil present when young, usually leaving cottony remnants on cap and / or stalk 
            AND
        Pores and flesh usually blueing (sometimes slowly) when bruised
        -> Go to Pulveroboletus

</div>

<div id="k2-c4_b" class="couplet_text">

    Option 2 -
        Veil absent, or if present then not as above 
        -> Go to Couplet 5

</div>

<button id="k2-c4_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c4_note" class="couplet_note">

Our mushroom does not seem to have any remnants of a bright yellow, cottony veil - *Pulveroboletus ravenelii* looks something like the image below before the veil breaks.

![Example of Pulveroboletus](media/pulveroboletus.jpg)

Lets choose option 2 and proceed to couplet 5.

</div>

<a href="#k2-c3">

Back

</a>

<a href="#k2-c5">

Next

</a>

</section>

<section id="k2-c5" href="#k2-c5">

### Couplet 5

<div id="k2-c5_a" class="couplet_text">

    Option 1 -
        Veil present when young, sometimes forming a ring (annulus) on stalk, at other times clinging to the margin of cap, and in still other cases disappearing in age
        -> Go to Couplet 9

</div>

<div id="k2-c5_b" class="couplet_text">

    Option 2 -
        Veil absent (check young speciments if unsure), but cap sometimes fringed with sterile tissue
        -> Go to Couplet 6

</div>

<button id="k2-c5_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c5_note" class="couplet_note">

This couplet is tricky, since I didn't collect any young specimens that would still have an intact veil. I'll try to make an educated guess, and if the key leads to a dead end, this will be a good place to circle back to.

I don't see any remnants of a veil on the cap or on the stipe of the mushroom. Looking closely at the margin of the cap, you can see a thin ring of tissue - this sounds similar to what is described by "fringed with sterile tissue".

![An example of the sterile tissue ring?](media/sterile_tissue.JPG)

Let's proceed with couplet 6.

</div>

<a href="#k2-c4">

Back

</a>

<a href="#k2-c6">

Next

</a>

</section>

<section id="k2-c6" href="#k2-c6">

### Couplet 6

<div id="k2-c6_a" class="couplet_text">

    Option 1 - 
        Stalk with grandular dots or smears at least when mature (the dots often slightly resinous to the touch)
            AND
        Stalk usually more or less equal or at least not markedly bulbous
            AND
        Cap often (but not always) viscid
            AND
        Spore print olive to brown or dull cinnamon
        -> Go to Suillus, pg. 491

</div>

<div id="k2-c6_b" class="couplet_text">

    Option 2 - 
        Stalk not grandular dotted (or very rarely so, but then with much darker spores)
        -> Go to Couplet 7

</div>

<button id="k2-c6_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c6_note" class="couplet_note">

Our mushroom does have some markings on it stipe, but they seem more linear or reticulare and don't feel resinous at all. Compare our mushroom on the left with *Suillus pungens* with its characteristic granular dotted stipe on the right. 

![Stipe markings](media/stalk.JPG)

I think option 2 is a better fit here - let's proceed to couplet 7.

</div>

<a href="#k2-c5">

Back

</a>

<a href="#k2-c7">

Next

</a>

</section>

<section id="k2-c7" href="#k2-c7">

### Couplet 7

<div id="k2-c7_a" class="couplet_text">

    Option 1 -
        Pores often radially elongated, sinous, arranged in rows, and / or veined
            AND
        Taste of cap not peppery
        -> Go to Couplet 8

</div>

<div id="k2-c7_b" class="couplet_text">

    Option 2 -
        Pores not as above, or if so then peppery
        -> Go to Couplet 10

</div>

<button id="k2-c7_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c7_note" class="couplet_note">

Once again, it helps to see a species with elongated pores so we can compare it to our mushroom. On the left is our mushroom, and on the right is *Suillus cavipes* with its radially elongated and radially arranged pores.

![Suillus cavipes](media/pores.JPG)

I think option 2 is a better fit, so we can proceed to couplet 10.

</div>

<a href="#k2-c6">

Back

</a>

<a href="#k2-c10">

Next

</a>

</section>

<section id="k2-c10" href="#k2-c10">

### Couplet 10

<div id="k2-c10_a" class="couplet_text">

    Option 1 - 
        Cap viscid to very slimy when moist
            AND
        Stalk grandular-dotted or if not then stalk typically white to yellow and not reticulate
            AND
        Associated with conifers
        -> Go to Suillus, pg. 491

</div>

<div id="k2-c10_b" class="couplet_text">

    Option 2 - 
        Not with above features
        -> Go to Couplet 11

</div>

<button id="k2-c10_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c10_note" class="couplet_note">

The cap of our mushroom is certainly not viscid - even when wetted, the cap remains relatively coarse and does not become slippery. Additionally, our stipe does not have grandular dots, is not white, and shows some reticulate (netted or meshed) markings. Let's proceed to couplet 11.

</div>

<a href="#k2-c7">

Back

</a>

<a href="#k2-c11">

Next

</a>

</section>

<section id="k2-c11" href="#k2-c11">

### Couplet 2

<div id="k2-c11_a" class="couplet_text">

    Option 1 - 
        Spore print flesh-colored to pinkish-brown, reddish-brown, vinaceous, or chocolate-brown
            AND
        Pores typically white to pinkish, vinaceous, gray, or brown but not red and only rarely yellow
            AND
        Common in eastern North America but rather infrequent in the West
        -> Go to Tylopilus, pg. 532

</div>

<div id="k2-c11_b" class="couplet_text">

    Option 2 - 
        Not as above
            AND
        Spore print yellow to yellow-brown, olive-brown, olive, brown, or more rarely cinnamon-brown; pores white, yellow, olive, red, orange, or sometimes gray or brown
        -> Go to Couplet 12

</div>

<button id="k2-c11_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c11_note" class="couplet_note">

Well, let's see what our spore print looks like. If you need help with spore prints, you can find a more thorough description in the key for [Mushroom 1](/fungi/id_class_1/mushroom_1/mushroom_1.html).

![Spore print](media/spores.JPG)

Given the yellow to olive spores and our yellow to red pores, option 2 is the natural choice. Proceed to couplet 12.

</div>

<a href="#k2-c10">

Back

</a>

<a href="#k2-c12">

Next

</a>

</section>

<section id="k2-c12" href="#k2-c12">

### Couplet 12

<div id="k2-c12_a" class="couplet_text">

    Option 1 - 
        Spore print pale yellow to yellow
            AND
        Stalk often hollow or partially hollow at maturity (especially near base)
            AND
        Common in eastern North America, rare in the West
        -> Go to Gyroporus pg. 510

</div>

<div id="k2-c12_b" class="couplet_text">


    Option 2 - 
        Spore print olive-brown to olive or brown, or occasionally yellow-brown or cinnamon-brown
            AND
        Stalk not normally hollow
            AND
        Common and widespread
        -> Go to Couplet 13

</div>

<button id="k2-c12_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c12_note" class="couplet_note">

It is hard for me to say whether or spore print is yellow or olive... but what I can say for certain is the the stipe was *not* hollow at any point. 

![Cross section of stipe](media/cross_stipe.JPG)

Let's proceed with couplet 13.

</div>

<a href="#k2-c11">

Back

</a>

<a href="#k2-c13">

Next

</a>

</section>

<section id="k2-c13" href="#k2-c13">

### Couplet 13

<div id="k2-c13_a" class="couplet_text">

    Option 1 - 
        Spores ornamented with ridges, grooves, pits, etc
            AND
        Stalk usually relatively long (7cm or more) and slender and coarsely reticulate or conspicuously lined with jagged ridges for most of its length
            AND
        Pores yellow to greenish-yellow, not usually blueing when bruised
            AND
        Typically terrestrial
            AND
        Found in eastern North America and the Southwest
        -> Go to Boletellus and Austroboletus, pg. 508

</div>

<div id="k2-c13_b" class="couplet_text">

    Option 2 - 
        Not with above combination of features
            AND
        Spores typically smooth
            AND
        Widespread
        -> Go to Boletus, pg. 511

</div>

<button id="k2-c13_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k2-c13_note" class="couplet_note">

I don't have a microscope, so we will have to pass over the microscopic characteristics for now. However, our mushroom certainly blues when bruised - I used the end of a pen to bruise this cross section and let it sit for about 30 seconds. 

![Blueing after bruising](media/blueing.JPG)

Let's proceed to the key for *Boletus*.

</div>

<a href="#k2-c12">

Back

</a>

<a href="#k3-c1">

Next

</a>

</section>

<section id ="k3" href="#k3">

## Key to Boletus pg. 512

</section>

<section id="k3-c1" href="#k3-c1">

### Couplet 1

<div id="k3-c1_a" class="couplet_text">

    Option 1 -
        Growing on earthballs (Scleroderma species)
            AND
        Fruiting body small to medium-sized, usually rather soft
            AND
        Especially common in southern latitudes
        -> Boletus parasiticus

</div>

<div id="k3-c1_b" class="couplet_text">

    Option 2 -
        Growing on ground or wood, not on earthballs
        -> Go to Couplet 2

</div>

<button id="k3-c1_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k3-c1_note" class="couplet_note">

Our mushroom was quite clearly growing from the ground and not from an earthball - here's a picture of one in case, like me, you've never seen one!

![Earthball](media/earthball.jpg)

Let's proceed to couplet 2.

</div>

<a href="#k2-c13">

Back

</a>

<a href="#k3-c2">

Next

</a>

</section>

<section id="k3-c2" href="#k3-c2">

### Couplet 2

<div id="k3-c2_a" class="couplet_text">

    Option 1 - 
        Taste distinctly acrid (peppery) when a small piece of cap is chewed
            AND
        Fruiting body typically rather small, with bright yellow mycelium at base 
        -> Go to Boletus piperatus & others, pg. 517

</div>

<div id="k3-c2_b" class="couplet_text">

    Option 2 - 
        Not as above (but taste may be bitter or sour)
        -> Go to Couplet 3

</div>

<button id="k3-c2_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k3-c2_note" class="couplet_note">

The taste of the cap of our mushroom was extremely mild, without any sort of peppery or bitter tones. Additionally, there wasn't any sort of yellow mycelium growing from the tapered tip of the stipe. Let's proceed to couplet 3.

</div>

<a href="#k3-c1">

Back

</a>

<a href="#k3-c3">

Next

</a>

</section>

<section id="k3-c3" href="#k3-c3">

### Couplet 3

<div id="k3-c3_a" class="couplet_text">

    Option 1 -
        Growing on or near wood or in sawdust (especially coniferous)
        -> Go to Couplet 4

</div>

<div id="k3-c3_b" class="couplet_text">

    Option 2 -
        Growing on ground 
        -> Go to Couplet 7

</div>

<button id="k3-c3_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k3-c3_note" class="couplet_note">

Our mushroom was growing from the ground the duff of oak and manzanita leaves, so option 2 seems to be a better fit. Let's proceed to couplet 7. 

</div>

<a href="#k3-c2">

Back

</a>

<a href="#k3-c7">

Next

</a>

</section>

<section id="k3-c7" href="#k3-c7">

### Couplet 

<div id="k3-c7_a" class="couplet_text">

    Option 1 -
        Found in western North America (Rocky Mountains, Southwest, and westward)
        -> Go to Couplet 8

</div>

<div id="k3-c7_b" class="couplet_text">

    Option 2 -
        Found in eastern North America (east of the Rockies, also southern Arizona)
        -> Go to Couplet 42

</div>

<button id="k3-c7_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k3-c7_note" class="couplet_note">

Given that this is a remote mushroom class, I suppose I *could* have been out mushrooming east of the Rockies, but given the pandemic circumstances, I promise you I didn't. We can proceed to couplet 8.

</div>

<a href="#k3-c3">

Back

</a>

<a href="#k3-c8">

Next

</a>

</section>

<section id="k3-c8" href="#k3-c8">

### Couplet 8

<div id="k3-c8_a" class="couplet_text">

    Option 1 -
        Pore surface red, pink, vinaceous, or orange when fresh (but may be yellowish or dingier in age, or in one case yellow when young becoming red in age)
            AND
        Pore surface and flesh usually turning blue or blue-black when bruised or cut
        -> Go to Couplet 9

</div>

<div id="k3-c8_b" class="couplet_text">

    Option 2 - 
        Pore surface yellow to olive, brown, white, etc, but not red or orange
            AND
        Pore surface may or may not turn blue when bruised

</div>

<button id="k3-c8_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k3-c8_note" class="couplet_note">

The pores of our mushroom definitely have an red to orange tint, so option 1 is the clear choice. Proceed to couplet 9.

</div>

<a href="#k3-c7">

Back

</a>

<a href="#k3-c9">

Next

</a>

</section>

<section id="k3-c9" href="#k3-c9">

### Couplet 9

<div id="k3-c9_a" class="couplet_text">

    Option 1 - 
        Stalk distinctly reticulate (netted), at least over upper portion
        -> Go to Couplet 10

</div>

<div id="k3-c9_b" class="couplet_text">

    Option 2 -
        Stalk not reticulate, or only very slightly so from decurrent tube walls
        -> Go to Couplet 13

</div>

<button id="k3-c9_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k3-c9_note" class="couplet_note">

To get an idea of what a reticulate stalk would look like, let's look at prime candidate - *Boletus satanis*, or Satan's bolete (an apt name!). The mesh like pattern at the base of the stipe is highlighted.

![Boletus Satanis](media/boletus_satanis.jpg)

While our mushroom seems to have some degree of reticulation on the stipe, I wouldn't say it is *distinctive*. Let's choose option 2 and proceed to couplet 13. 

</div>

<a href="#k3-c8">

Back

</a>

<a href="#k3-c13">

Next

</a>

</section>

<section id="k3-c13" href="#k3-c13">

### Couplet 13

<div id="k3-c13_a" class="couplet_text">

    Option 1 -
        Cap intensely yellow, quite large
            AND
        Rare
        -> Go to Boletus orovillus, pg. 526

</div>

<div id="k3-c13_b" class="couplet_text">

    Option 2 -
        Not as above
            AND
        Common
        -> Go to Couplet 14

</div>

<button id="k3-c13_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k3-c13_note" class="couplet_note">

Our cap is pinkish red in color, so option 2 is a better fit. Proceed to couplet 14.

</div>

<a href="#k3-c9">

Back

</a>

<a href="#k3-c14">

Next

</a>

</section>

<section id="k3-c14" href="#k3-c14">

### Couplet 

<div id="k3-c14_a" class="couplet_text">

    Option 1 - 
        Flesh changing to blue slowly or not at all when mushroom is cut open
            AND
        Cap usually areolate in age
            AND
        Not common
        -> Go to Boletus mendocinensis, pg. 519

</div>

<div id="k3-c14_b" class="couplet_text">

    Option 2 - 
        Flesh blueing quickly when cut
            AND
        Cap not normally areolate
        -> Go to Boletus erythropus, pg. 526

</div>

<button id="k3-c14_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k3-c14_note" class="couplet_note">

I wasn't sure what areolate meant, so I had to look it up - effectively, it describes a mushroom that has more color towards its center than at its margins. I don't feel like our mushroom exhibits this trait, and it certainly blued quickly, so option 2 seems to be our best bet. We have a species!

## *Boletus erythropus* and others pg. 526
### *Boletus amygdalinus*, now *Suillellus amygdalinus*

This poisonous bolete was very interesting to key out! It was such a pretty specimen with firm and fresh tissue, and the colors of the pores and stipe were quite impressive - at least, I thought so until I cut the cross section of the cap!

![Cross section of cap](media/cross_section.JPG)

</div>

<a href="#k3-c13">

Back

</a>

</section>


<!-- <section id="k3-c" href="#k3-c">

### Couplet 

<div id="k3-c_a" class="couplet_text">



</div>

<div id="k3-c_b" class="couplet_text">



</div>

<button id="k3-c_note-button" class="couplet_note_button">

Show Notes

</button>

<div id="k3-c_note" class="couplet_note">



</div>

<a href="#k3-c">

Back

</a>

<a href="#k3-c">

Next

</a>

</section>
 -->
