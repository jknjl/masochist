---
tags: red.hat git updates
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.2.4](/wiki/Git_1.5.2.4) on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) from the tarball.

For notes on upgrading to 1.5.2.4 from a local clone of the central [Git](/wiki/Git) repository, see "[Upgrading to Git 1.5.2.4 on Mac OS X Tiger](/wiki/Upgrading_to_Git_1.5.2.4_on_Mac_OS_X_Tiger)".

# Downloading

    wget http://kernel.org/pub/software/scm/git/git-1.5.2.4.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-1.5.2.4.tar.bz2.sign

Before I could verify the signature I had to do some set-up of [GPG](/wiki/GPG).

First, make `gpg` a setuid binary as described [here](http://www.gnupg.org/documentation/faqs.html#q6.1) so as to silence warnings about insecure virtual memory:

    sudo chmod u+s /usr/bin/gpg

Then import the necessary public key by copying it from <http://www.kernel.org/signature.html> and pasting it into a file called `kernel-key` (attempts to obtain the key from the public keyserver timed out). Then importing the public key into the local key ring:

    gpg --import kernel-key

Output:

    gpg: key 517D0F0E: public key "Linux Kernel Archives Verification Key <ftpadmin@kernel.org>" imported
    gpg: Total number processed: 1
    gpg:               imported: 1

And finally verifying the downloaded tarball:

    gpg --verify git-1.5.2.4.tar.bz2.sign git-1.5.2.4.tar.bz2

Output:

    gpg: Signature made Thu 12 Jul 2007 03:42:19 PM CDT using DSA key ID 517D0F0E
    gpg: Good signature from "Linux Kernel Archives Verification Key <ftpadmin@kernel.org>"
    gpg: checking the trustdb
    gpg: no ultimately trusted keys found
    gpg: WARNING: This key is not certified with a trusted signature!
    gpg:          There is no indication that the signature belongs to the owner.
    Primary key fingerprint: C75D C40A 11D7 AF88 9981  ED5B C86B A06A 517D 0F0E

Note that although I don't have a trust path to the kernel key set up (ie. I can't verify that key really belongs to the Linux Kernel Archives) I can at least rest assured that the downloaded [Git](/wiki/Git) archive was signed by the key which I downloaded from <http://www.kernel.org/signature.html> minutes before. As the page notes:

&lt;blockquote &gt;This signature does not guarantee that the Linux Kernel Archives master site itself has not been compromised. However, if we suffer an intrusion we will revoke the key and post information here as quickly as possible.&lt;/blockquote&gt;

A quick search of the [Wayback Machine](/wiki/Wayback_Machine) indicates that the same key has been on that page since at least 2001 (see <http://web.archive.org/web/20010604144322/http://www.kernel.org/signature.html>), so confidence that the key is legitimate can be fairly high.

# Building

    # extract
    tar xjvf git-1.5.2.4.tar.bz2
    cd git-1.5.2.4

    # build
    make prefix=/usr/local all

    # text
    make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install

    # get man pages
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.2.4.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.2.4.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.2.4.tar.bz2.sign git-manpages-1.5.2.4.tar.bz2

    # install
    cd /usr/local/man/
    sudo tar xjvf full_path_to_manpages_archive/git-manpages-1.5.2.4.tar.bz2

# See also

-   Original installation notes: [Installing Git 1.5.2.3 on Red Hat Enterprise Linux](/wiki/Installing_Git_1.5.2.3_on_Red_Hat_Enterprise_Linux)
