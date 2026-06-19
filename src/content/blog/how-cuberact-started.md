---
title: "How Cuberact Started"
description: "From C64 to Godot - how a lifelong dream of making games turned into a rope physics engine, a GDExtension library, and a plan for a game."
date: 2026-03-10
tags: ["cuberact", "godot", "devlog"]
---

Hi, I'm a guy who decided to fulfill his dream and make a game. A game so fantastic that people will talk about it for decades, no, centuries, no, millennia... well, maybe I should set more realistic goals. But only maybe.

I've been programming since I was 12. Started on the C64 (BASIC), moved to Amiga (AMOS, Assembler), then PC (Pascal, C, Java, Kotlin, C++). As for operating systems, no surprises - from Windows through Linux to macOS, where I currently reside. Programming has been paying the bills for years, but I've always been building complex systems for others. I always wanted to make games. But you know how it goes - it's a risky business and a family needs to eat.

## Finding the Engine

One day I stumbled upon Godot Engine. I turned up my nose. It was very young back then and didn't look like something worth investing your time into. But recently the urge came back. I told myself this is the last chance to make something of my own - a game so beautiful that... Well, you know.

Writing everything from scratch, without an engine, is no longer the way. I've done that several times in the past and you just burn out and give up. So I went to see what's out there.

**Unreal Engine.** I want the best, so why not. Install, launch, and I'm literally staring. A million knobs and buttons, an empty scene, and my computer starts spinning up the fans. After a while I shut it down. Unreal is definitely top-tier, but absolutely not for me and my humble, simple, tiny game THAT WILL TAKE OVER THE WORLD.

**Unity.** Things got even worse. User-unfriendly installation, slow to launch even on my souped-up rig (MacBook M1 Max 64GB). And what really got me - you can't increase the font size in the Unity editor UI. As a decrepit old man, I can't see those tiny things anymore. Unity is out too.

**Godot.** I dig through my memory - wasn't there some Godot thing? Heh, probably dead by now. Let me check. And look at that - it's alive and thriving. Install - click, click. Launch - blink - and it's running. I do the first tutorial and everything is clear and intuitive. Wow. I read tons of material, keep learning. And everything confirms that this is where I want to be. Over the years, Godot has matured a lot and the community is fantastic. Godot itself is a beautiful piece of software - no cruft, no layers of Jurassic code buried under more layers. The whole philosophy behind Godot is exactly right.

## The Road to Rope

I have my engine. Now I just need that dream game. And for that I need physics. Lots of physics. My game will be a 2D thing, but built on real physics, and the central element will be rope.

I rush to the Asset Store, search and find a few options - but I'm not happy with any of them. I need a system robust enough to build an entire game around. So I tell myself: build your own, it'll be fun. You love this stuff anyway.

I dive in. Suddenly I have two jobs - one at the corporation and one at night. Writing GDScript like my life depends on it. Godot guides me beautifully and I'm more and more convinced I made the right choice.

Until the first stumble. I hit a performance wall in GDScript. Well, that's it folks, I thought, as I kept optimizing in vain. I discovered the COW pattern and that Godot's `Packed*` structures use it - and that thing can really cook your CPU. I tuned the GDScript as far as it would go, but as you might guess, it wasn't far enough.

Back to the docs and forums. I found there are two paths - C# and the ultimate C++.

First I tried **C#** and rewrote my implementation. About a 5x speedup. Borderline acceptable. But the development workflow became clunky - Godot editor alongside JetBrains Rider, weird build process, and many dark alleys, because C# in Godot is still just another "scripting" language.

So why not go straight to **C++**? The promised performance should be even better by a factor. Another round of learning and setting things up. Eventually I tamed the beast. Or rather - the Godot team had already laid it out on a silver platter, but you still need to bend it a little, and for that you need to understand how they designed it. And they designed it brilliantly. So now I have full C++ wired through their very well-designed GDExtension system. Hold on to your hats, now I just need to write it :-D

## Rope Physics

The rope chapter began - finding the right way to do it well. My daily bread became reading papers by smarter people - various theses, articles, deep dives into the subject. My head full of Verlet integration, XPBD, and other particle-based systems.

All that was left was to pick the best approach and integrate it with Godot Engine's built-in physics. It was a thorny road. In many places I had to trade speed for accuracy. The systems fight each other - one enforces constraints between points, another violates them because of collisions, and a third one messes everything up by applying forces to rigid bodies. It's a bit of a Gordian knot. There's always a trade-off. But I think I pulled it off in the end. At least for the needs of my future game, it should be enough. I expect more improvements down the line as I hit limitations I don't know about yet.

## Cuberact Library

That future game will definitely need more systems than just rope. And thanks to GDExtension, I now have all the speed in the world. So I created a GDExtension named simply cuberact-library - over time it will grow with new systems that my game needs and that are performance-critical.

The rope (CRope2D) is done - until the game proves otherwise - and I figured I could share it with the community. At the same time, I don't want to give away all competitive advantage by going fully open-source. After some thought, I came up with this: anyone can try it and use it freely, no restrictions. Play with it all you want. Only when you want to publish a commercial game, say on Steam, you buy a cuberact-library license for a small fee. By that point you'll already know it's worth it, because it proved itself during the development of your game.

## What's Next?

And that's the end of the story. We're at now. And I'm off to work on the game. Wish me luck.

---

Watch the evolution of CRope2D - from the very first prototype to what it is today:

<div style="position: relative; width: 100%; padding-bottom: 56.25%; margin: 1.5em 0;">
  <iframe src="https://www.youtube.com/embed/geAj2Lzszkc" title="CRope2D Evolution" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 6px;"></iframe>
</div>

Here's a glimpse of CRope2D in action - a few of the 14 example scenes included in the library:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 1.5em 0;">
  <img src="/images/blog/e11-playground.png" alt="Playground - sandbox with multiple ropes and obstacles" style="border-radius: 6px;" />
  <img src="/images/blog/e12-grappling_hook.png" alt="Grappling Hook - shoot, retract, and cut rope" style="border-radius: 6px;" />
  <img src="/images/blog/e13-stress_test.png" alt="Stress Test - hundreds of ropes" style="border-radius: 6px;" />
  <img src="/images/blog/e14-boulder_network.png" alt="Boulder Network - zero-gravity boulders connected by ropes" style="border-radius: 6px;" />
</div>

Grab cuberact-library and try it yourself:

<div class="not-prose flex flex-wrap gap-3 my-6">
  <a href="https://github.com/cuberact/godot-cuberact-library" class="inline-flex items-center gap-2 px-4 py-2 rounded text-sm transition bg-brand-blue text-white hover:brightness-110">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
    GitHub
  </a>
  <a href="https://cuberact.itch.io/cuberact-library" class="inline-flex items-center gap-2 px-4 py-2 rounded text-sm transition bg-surface-800 border border-surface-600 text-gray-300 hover:border-brand-blue-light hover:text-white">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"/></svg>
    itch.io
  </a>
  <a href="https://www.youtube.com/@Cuberact" class="inline-flex items-center gap-2 px-4 py-2 rounded text-sm transition bg-surface-800 border border-surface-600 text-gray-300 hover:border-brand-blue-light hover:text-white">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    YouTube
  </a>
  <a href="https://x.com/cuberact" class="inline-flex items-center gap-2 px-4 py-2 rounded text-sm transition bg-surface-800 border border-surface-600 text-gray-300 hover:border-brand-blue-light hover:text-white">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    X / Twitter
  </a>
</div>
