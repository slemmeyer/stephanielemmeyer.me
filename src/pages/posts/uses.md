---
title: "/uses"
date: "2025-06-09"
description: "A /uses page listing tools & software I regularly use."
image: "/images/preview-profile.png"
author: "Stephanie Lemmeyer"
modifiedDate: "2025-06-09"
layout: "../../layouts/BlogPost.astro"
---

This /uses page is inspired by [slashpages.net](https://slashpages.net/) and [uses.tech](https://uses.tech/).

I like to see what people use for their tasks/projects, so why not share what I use as well?

Disclaimer:All opinions stated are of my own, and do not reflect the views of any of my past or present employers. I received no financial compensation for any of the products/services I list here.

## Hardware
- **MacBook Pro (14 inch, 11/2023, M3 Pro Chip)** - Yes, that M series chip really does make all the difference.
- **iPhone 16 Pro Max** - My first smartphone was an iPhone 3G back in the day and I've stuck with them ever since. (I did try one of the Galaxy model phones ages ago, but it was a supplement to my main iPhone.) I use it as a normal phone but the primary use is for mobile games as well as music streaming when I'm out and about.

## Browser
- **Firefox** - I keep flipping around browsers only end up back with Firefox. There's always _something_ that leads me back -- currently, this something is the [Multi-Account Containers extension](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/), which really should be a baked-in feature in the browser, and which other browsers should emulate. 
- **Brave** - This is a backup for when sites can't play well with Gecko and a Chromium engine is needed.

## Password Manager
- **Bitwarden (free tier)**

## 2FA/Authentication
- **Ente Auth**

## Notes
- **Joplin** - I mainly use this as a scratchpad or just a dump for any text I find interesting.
- **Sublime Text** - More for temporary notes than text editing in my case.

## AIs/LLMs
- **ChatGPT** - It's just too dang useful. I can use it for pratically _everything_ -- brainstorming roadmaps, discussing Jungian psychoanalysis, drawing pictures of platypus-blowfish hybrids, and more. The flagship models have made vast improvements over analyzing, generating, and iterating code over the past year, and this is now my first choice when I have a tech question I want to chew over. It's also been a great help for music production, of all things -- it's analyzed spectograms and has given some good suggestions on how to equalize tracks.
- **Claude** - It was pretty great, once upon a time. But in my view, the models have stagnated and I don't see anything that will change the momentum. I was never too impressed with its creative writing capabilities, and while it did do some impressive tricks with code it also had an equally strong tendency to get "lost in the sauce". I haven't tried Claude 4, so maybe it's improved in these respects and I don't know it, but since Claude isn't multimodal (at least not to the degree ChatGPT is) my use case with it is severely limited, so I don't feel inclined to try it again.

As an aside, I go back and forth on trying out Gemini as I see many people swear by it (for coding, but I've seen one person say it does creative writing even better than Claude), but I've yet to commit to a real deep dive.

## IDE
- **Windsurf** - This is now my daily IDE. I tried it when they started offering GPT 4.1 (and after the pricing adjustment), and turned out to suit me quite well. Honestly, the main factor is that it just has a bit more polish than Cursor. I've found that Cascade handles context well, regardless of whether or not I reference explicit files or directories. I'm pretty happy with it and I'll stick with it for a while.
- **Cursor** - Primarily used with Sonnet 3.5/3.7. Good in a lot of cases, but I disliked how the UI is a little jank and it had way more of a tendency to get lost in the sauce (see also: Claude). I had to adjust too much of my workflow to work around its limitations, and I never got much traction out of the rules feature. It wasn't bad by any means; I think it just didn't suit me as well as Windsurf has. I may go back to it at some point in the future.
- **VSCodium/VSCode** - I used these before I tried the AI-powered IDEs.

## IaC
- **Pulumi IaC** - It's great! I love that I can make abstractions that fits my needs instead of having to make it fit within the limitations of HCL. It suits modern development/deployment pipelines out-of-the-box, and the state management and encryption are great. This is now my first choice for my personal projects.
- **Terraform/OpenTofu** - It's still the industry standard. It still works great as long as you resist the urge to go full-DRY and don't try to backdoor code in via `locals`. The future of this tool is going to be interesting since Terraform and OpenTofu are starting to get some big divergences, plus a major developer for Terraform is now with the OpenTofu project.

## Config Management
None at the moment. The ones that are still alive all have some pretty big caveats that prevent me from really feeling even just one or two. It would be nice if more attention were paid to this space. Or perhaps I should try writing my own....

## Platform/Infrastructure
- **Vultr** - Good selection of services & fairly affordable. Also probably offers the most affordable managed Kubernetes solution if you're insane. I appreciate that they let me use their services when I signed up with a Proton Mail address; most other hosts locked me out and wanted me to do a good kid dance first.
- **GitLab Pages/GitHub Pages, Vercel** - I've used these for static sites (like this one!) and for stateless/minimal state, low traffic projects.
The Big Boys (aka **AWS, Azure, GCP**) - My work history has primarily been in AWS so  

## Containers
- **OrbStack**

## CLI Tools
Other than the CLI tools for the above services (e.g., Pulumi's toolset, AWS CLI), I use the following:
### Security
- **prowler, trivy, trufflehog, gitleaks** - I've yet to pick one, but none of them fall short in a way to make me drop any one of them.
### Misc
- **repomix** - This has come to be indispensible for me. It packages the repo into a single
- **ffmpeg** - It's for video processing, but I mainly use it for audio conversion.
- **imagemagick** - like the above, but for images.

## Audio
- **Logic Pro X** - I'm already in deep in the Mac ecosystem, why not. If you're working on a machine with a M series chip, you can use the stem splitter, which has given me the best results out of the various ones I've tried.
- **Audacity** - For other editing/conversion tasks I can't do in Logic.

## Image Editing/Design
- **Pixelmator Pro** - The only software I miss from Windows that I can't use on Mac is Paint.NET. I tried checking out some alternatives, but none of them were really suitable for even my infrequent use case. I tried out Pixelmator Pro, and it's got everything I want. The only thing Paint.NET has over this is that Pixelmator is paid software...but I think this is more intended to be a Photoshop competitor anyway. On that note, it succeeds.
- **Canva** - I've used this for editing as well; I'm only on the free tier so I don't quite have access to all the fun fonts and toys....