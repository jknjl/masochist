---
tags: memcached
cache_breaker: 1
---

Start up a server on the localhost listening to some arbitrary port:

    memcached -l 127.0.0.1 -p 12345 -m 64 -vv

The `-m 64` switch is really just there for explicitness, seeing as [memcached](/wiki/memcached) defaults to using 64MB of memory by default anyway.

`-vv` turns on verbose logging so that we can see what's happening.

If the `-p` switch is omitted [memcached](/wiki/memcached) will use the default port of 11211.

Now from another console login via telnet:

    telnet localhost 12345

We can issue `get` commands:

    get greeting
    END

So nothing was found. Now let's store something:

    set greeting 1 0 11
    Hello world
    STORED

That means, "use key `greeting`, use `1` as flag (arbitrary metadata), use `0` as the expiry (ie. never expire), and expect the value to be 11 bytes long".

Now we can get the value back out:

    get greeting
    VALUE greeting 1 11
    Hello world
    END

And we're done:

    quit

# Other commands

    stats
    stats items
    stats slabs
    delete
    replace
    add

For a full list, see <http://lzone.de/articles/memcached.htm>