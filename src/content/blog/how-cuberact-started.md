---
title: "How Cuberact Started"
description: "From C64 to Godot — how a lifelong dream of making games turned into a rope physics engine, a GDExtension library, and a plan for a game."
date: 2026-03-10
tags: ["cuberact", "godot", "devlog"]
---

Hi, I'm a guy who decided to fulfill his dream and make a game. A game so fantastic that people will talk about it for decades, no, centuries, no, millennia... well, maybe I should set more realistic goals. But only maybe.

I've been programming since I was 12. Started on the C64 (BASIC), moved to Amiga (AMOS, Assembler), then PC (Pascal, C, Java, Kotlin, C++). As for operating systems, no surprises — from Windows through Linux to macOS, where I currently reside. Programming has been paying the bills for years, but I've always been building complex systems for others. I always wanted to make games. But you know how it goes — it's a risky business and a family needs to eat.

## Finding the Engine

One day I stumbled upon Godot Engine. I turned up my nose. It was very young back then and didn't look like something worth investing your time into. But recently the urge came back. I told myself this is the last chance to make something of my own — a game so beautiful that... Well, you know.

Writing everything from scratch, without an engine, is no longer the way. I've done that several times in the past and you just burn out and give up. So I went to see what's out there.

**Unreal Engine.** I want the best, so why not. Install, launch, and I'm literally staring. A million knobs and buttons, an empty scene, and my computer starts spinning up the fans. After a while I shut it down. Unreal is definitely top-tier, but absolutely not for me and my humble, simple, tiny game THAT WILL TAKE OVER THE WORLD.

**Unity.** Things got even worse. User-unfriendly installation, slow to launch even on my souped-up rig (MacBook M1 Max 64GB). And what really got me — you can't increase the font size in the Unity editor UI. As a decrepit old man, I can't see those tiny things anymore. Unity is out too.

**Godot.** I dig through my memory — wasn't there some Godot thing? Heh, probably dead by now. Let me check. And look at that — it's alive and thriving. Install — click, click. Launch — blink — and it's running. I do the first tutorial and everything is clear and intuitive. Wow. I read tons of material, keep learning. And everything confirms that this is where I want to be. Over the years, Godot has matured a lot and the community is fantastic. Godot itself is a beautiful piece of software — no cruft, no layers of Jurassic code buried under more layers. The whole philosophy behind Godot is exactly right.

## The Road to Rope

I have my engine. Now I just need that dream game. And for that I need physics. Lots of physics. My game will be a 2D thing, but built on real physics, and the central element will be rope.

I rush to the Asset Store, search and find a few options — but I'm not happy with any of them. I need a system robust enough to build an entire game around. So I tell myself: build your own, it'll be fun. You love this stuff anyway.

I dive in. Suddenly I have two jobs — one at the corporation and one at night. Writing GDScript like my life depends on it. Godot guides me beautifully and I'm more and more convinced I made the right choice.

Until the first stumble. I hit a performance wall in GDScript. Well, that's it folks, I thought, as I kept optimizing in vain. I discovered the COW pattern and that Godot's `Packed*` structures use it — and that thing can really cook your CPU. I tuned the GDScript as far as it would go, but as you might guess, it wasn't far enough.

Back to the docs and forums. I found there are two paths — C# and the ultimate C++.

First I tried **C#** and rewrote my implementation. About a 5x speedup. Borderline acceptable. But the development workflow became clunky — Godot editor alongside JetBrains Rider, weird build process, and many dark alleys, because C# in Godot is still just another "scripting" language.

So why not go straight to **C++**? The promised performance should be even better by a factor. Another round of learning and setting things up. Eventually I tamed the beast. Or rather — the Godot team had already laid it out on a silver platter, but you still need to bend it a little, and for that you need to understand how they designed it. And they designed it brilliantly. So now I have full C++ wired through their very well-designed GDExtension system. Hold on to your hats, now I just need to write it :-D

## Rope Physics

The rope chapter began — finding the right way to do it well. My daily bread became reading papers by smarter people — various theses, articles, deep dives into the subject. My head full of Verlet integration, XPBD, and other particle-based systems.

All that was left was to pick the best approach and integrate it with Godot Engine's built-in physics. It was a thorny road. In many places I had to trade speed for accuracy. The systems fight each other — one enforces constraints between points, another violates them because of collisions, and a third one messes everything up by applying forces to rigid bodies. It's a bit of a Gordian knot. There's always a trade-off. But I think I pulled it off in the end. At least for the needs of my future game, it should be enough. I expect more improvements down the line as I hit limitations I don't know about yet.

## Cuberact Library

That future game will definitely need more systems than just rope. And thanks to GDExtension, I now have all the speed in the world. So I created a GDExtension named simply cuberact-library — over time it will grow with new systems that my game needs and that are performance-critical.

The rope (CRope2D) is done — until the game proves otherwise — and I figured I could share it with the community. At the same time, I don't want to give away all competitive advantage by going fully open-source. After some thought, I came up with this: anyone can try it and use it freely, no restrictions. Play with it all you want. Only when you want to publish a commercial game, say on Steam, you buy a cuberact-library license for a small fee. By that point you'll already know it's worth it, because it proved itself during the development of your game.

## What's Next?

And that's the end of the story. We're at now. And I'm off to work on the game. Wish me luck.

---

Watch the evolution of CRope2D — from the very first prototype to what it is today:

<div style="position: relative; width: 100%; padding-bottom: 56.25%; margin: 1.5em 0;">
  <iframe src="https://www.youtube.com/embed/geAj2Lzszkc" title="CRope2D Evolution" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 6px;"></iframe>
</div>

Here's a glimpse of CRope2D in action — a few of the 14 example scenes included in the library:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 1.5em 0;">
  <img src="/images/blog/e11-playground.png" alt="Playground — sandbox with multiple ropes and obstacles" style="border-radius: 6px;" />
  <img src="/images/blog/e12-grappling_hook.png" alt="Grappling Hook — shoot, retract, and cut rope" style="border-radius: 6px;" />
  <img src="/images/blog/e13-stress_test.png" alt="Stress Test — hundreds of ropes" style="border-radius: 6px;" />
  <img src="/images/blog/e14-boulder_network.png" alt="Boulder Network — zero-gravity boulders connected by ropes" style="border-radius: 6px;" />
</div>

Grab cuberact-library and try it yourself:
- [X / Twitter — news and updates](https://x.com/cuberact)
- [GitHub — examples, docs, releases](https://github.com/cuberact/godot-cuberact-library)
- [itch.io — download page](https://cuberact.itch.io/cuberact-library)
- [YouTube — devlogs and demos](https://www.youtube.com/@Cuberact)
