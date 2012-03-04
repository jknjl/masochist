---
title: Your branch is ahead of 'origin/master' by 1 commit
tags: git
cache_breaker: 1
---

I noticed that some of my [Git](/wiki/Git) repos give me nice status messages like "Your branch is ahead of 'origin/master' by 1 commit" whenever I do a `git status` while others do not.

I think it's because some of them weren't originally clones and had their "remote" configuration set up manually, but not completely in the way that you get when you run `git clone` with a recent version of Git. Whatever the cause was, here's the fix.

Here's a section of the `.git/config` file for a clone which does display the additional status information:

    [remote "origin"]
    	url = git://github.com/rentzsch/mogenerator.git
    	fetch = +refs/heads/*:refs/remotes/origin/*
    [branch "master"]
    	remote = origin
    	merge = refs/heads/master

And here's the equivalent config for a repo which doesn't show the status information:

    [remote "origin"]
    	url = git://github.com/rentzsch/mogenerator.git
    	fetch = +refs/heads/*:refs/remotes/origin/*

The fix? Add the required info using `git config`:

    $ git config branch.master.remote origin
    $ git config branch.master.merge refs/heads/master