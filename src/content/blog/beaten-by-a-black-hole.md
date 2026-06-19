---
title: "Beaten by a Black Hole"
description: "Someone's cartoon black hole shader out-upvoted my planet on Reddit. So I turned that envy into a sleep system, a swarm of jellyfish, and a much tougher cuberact-library v1.1.0."
date: 2026-06-16
tags: ["cuberact", "godot", "devlog", "crope2d"]
---

So I published cuberact-library, and let me tell you, quite the ride. Sorting out all the "super fun" stuff around it. Documentation, the website, YouTube, Reddit, and a few other places. Quite the grind.

Then of course I kept going back to Reddit to check how many upvotes I had, and I was pretty happy. Then I released the planet, and the Reddit upvotes were noticeably better. Man, I'm good! But then it came. Someone posted a demo of their shader that renders a black hole in a cartoon style, and I just watched, a little sad, as it pulled many times more upvotes than my planet. And such a simple thing compared to the planet. One shader.

## Envy as Fuel

I showed my wife my planet video and then the black hole shader, and even she said the black hole was nicer... Shit! Don't get me wrong, the shader really was gorgeous and I wish the author every success. I was just jealous that he beat me on upvotes hands down. For me envy is a positive trait. It pushes me to work on myself, to be just as good and ideally even better. We can both succeed!

So, to work. I have to make examples for my rope that are as eye-candy as possible. Ones that stomp that black hole shader into the ground at first glance :-) And while I'm at it, I'll push the rope itself toward even greater perfection.

## The Sleep System

So I got to it. First the rope and the things it was missing. That thing is the sleep system. A rope is a complex physics object, and real games, the scrolling kind, can have dozens or even hundreds of ropes scattered across a level, while the player only sees a small slice of it. The problem is I can't compute every rope in the whole level every frame. That would kill the performance of anything.

I thought each rope could have an AABB (bounding box), and when it's off camera, I'd just drop it from the computation. But that has a fundamental problem: if I set a rope swinging and pan the camera away while it's swung to the right, the rope freezes mid-swing. Come back a minute later and it resumes from that same rightward swing, while the player expects it to have finished swinging and to just be hanging there. So I need to know the rope has stabilized, and only then can I switch it off. And that is what a sleep system is. Every physics engine has one, so I'll have one too.

Even off camera I let the rope swing itself out (or whatever else it is doing), and it detects on its own that it has stopped moving and can fall asleep. The rope sends a message to the engine, the engine checks whether the rope is off camera, and if so it switches it off completely. Or it lets it sleep, which also costs a little performance, but far less than a live, colliding rope.

Writing a sleep system is not as trivial as it might seem at first. A rope can have several rigid bodies attached. It may or may not have gravity or wind, or completely custom forces written by the developer. It can gain and lose segments (grappling hook). It is just not trivial. Automatic waking is even worse. But I won't dissect it all here. I just shipped it! And it works. Beautifully!

## Jellyfish, and a Lot of Grass

So now just the examples, ones so gorgeous they would steal the upvotes on Reddit. So I came up with jellyfish. Each jellyfish would have tentacles, which would be ropes that collide with everything around them, and I made it. And I saw that it was good... :-D And I also saw that the rope is written so well that I could keep adding more, that I had performance to spare. And so grass was born under the jellyfish. Lots of grass... lots and lots of grass. And what if that grass collided with a stray jellyfish? Hmmm... let me try. And it worked. And the performance was still good. I was pleasantly surprised myself at how well the rope performs. And so a dreamy example was born that rips the black hole shader to shreds.

<img src="/images/cuberact-library-examples/e01-jellyfish.jpg" alt="The jellyfish scene - bioluminescent bells with rope tentacles drifting over a seagrass meadow" style="border-radius: 8px;" />

And while I was at it, I made a few more examples that are eye-candy but mainly test the rope in almost extreme conditions. Thanks to that I verified a lot of things and also fixed quite a few. So the rope is now a lot more rock-solid, military-grade. I'll be reaping the benefits once I finally start properly making the best game ever, the one I have in my head.

<div class="not-prose grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
  <img src="/images/cuberact-library-examples/e02-plug_the_wires.png" alt="Plug the Wires - colored cables dragged into matching sockets" class="rounded-lg border border-surface-600 w-full" loading="lazy" />
  <img src="/images/cuberact-library-examples/e03-kite.jpg" alt="Kite - a figure flying a kite with fluttering ribbon tails" class="rounded-lg border border-surface-600 w-full" loading="lazy" />
  <img src="/images/cuberact-library-examples/e04-growing_sunflowers.png" alt="Growing Sunflowers - rope stems leaning toward the sun" class="rounded-lg border border-surface-600 w-full" loading="lazy" />
  <img src="/images/cuberact-library-examples/e05-firefly_meadow.jpg" alt="Firefly Meadow - fireflies on glowing tethers at night" class="rounded-lg border border-surface-600 w-full" loading="lazy" />
  <img src="/images/cuberact-library-examples/e17-grand_curtain.png" alt="Grand Curtain - a theater curtain of rope strands revealing the logo" class="rounded-lg border border-surface-600 w-full" loading="lazy" />
</div>

## Shipping It All Again

I published the original rope to the world, so I should do the same for this new version... so docs, website, YouTube, Reddit (tremble!), blog. Phew phew. It's no joke.

And I still have to upload the extension to the new Godot asset store, and I haven't even seen how that is done yet. Hopefully it will be as polished and well-documented as the Godot team usually manages. Wish me luck.

---

Want to see it all in motion? Here's the v1.1.0 showcase:

<div style="position: relative; width: 100%; padding-bottom: 56.25%; margin: 1.5em 0;">
  <iframe src="https://www.youtube.com/embed/QlQIzzPvY84" title="CRope2D showcase - cuberact-library v1.1.0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 6px;"></iframe>
</div>
