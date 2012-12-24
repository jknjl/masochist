---
tags: rspec tiger updates
cache_breaker: 1
---

I haven't done any [Rails](/wiki/Rails) development for a while and so haven't touched [RSpec](/wiki/RSpec) since my last upgrade (see, "[Upgrading to RSpec 1.0.5 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.5_on_Mac_OS_X_Tiger)"). This is therefore an upgrade from [RSpec 1.0.5](/wiki/RSpec_1.0.5) to [RSpec 1.0.8](/wiki/RSpec_1.0.8).

# Installation

    $ sudo gem install rspec
    Password:
    Successfully installed rspec-1.0.8
    Installing ri documentation for rspec-1.0.8...
    Installing RDoc documentation for rspec-1.0.8...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Indexing RI docs for ParseTree version 2.0.2.
    Indexing RI docs for RubyInline version 3.6.3.
    Indexing RI docs for ZenTest version 3.6.1.
    Indexing RI docs for actionmailer version 1.3.4.
    Indexing RI docs for actionpack version 1.13.4.
    Indexing RI docs for actionwebservice version 1.2.4.
    Indexing RI docs for activerecord version 1.15.3.
    Indexing RI docs for activesupport version 1.4.2.
    Indexing RI docs for cmdparse version 2.0.2.
    Indexing RI docs for dhaka version 2.2.1.
    Indexing RI docs for diff-lcs version 1.1.2.
    Indexing RI docs for fastri version 0.3.0.1.
    Indexing RI docs for haml version 1.7.0.
    Indexing RI docs for heckle version 1.4.1.
    Indexing RI docs for hoe version 1.3.0.
    Indexing RI docs for hpricot version 0.5.
    Indexing RI docs for meta_project version 0.4.15.
    Indexing RI docs for model_security_generator version 0.0.9.
    Indexing RI docs for rake version 0.7.3.
    Indexing RI docs for rcodetools version 0.5.0.0.
    Indexing RI docs for rcov version 0.8.0.2.
    Indexing RI docs for rspec version 1.0.8.
    Indexing RI docs for ruby-debug version 0.9.3.
    Indexing RI docs for ruby-debug-base version 0.9.3.
    Indexing RI docs for ruby-prof version 0.5.2.
    Indexing RI docs for ruby2ruby version 1.1.6.
    Indexing RI docs for rubyforge version 0.4.4.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for spec_ui version 0.2.3.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for syntax version 1.0.0.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for webgen version 0.4.4.
    Building index.
    Indexed:
    * 13336 methods
    * 2784 classes/modules
    Needed 1.33855 seconds

# Updating the [TextMate](/wiki/TextMate) bundle

My local bundle was following the tip of the trunk and had quite a few local changes, but I understand that these have been integrated now and so I decided to blow away my local working copy and start with a fresh checkout:

    $ cd /Users/wincent/Library/Application\ Support/TextMate/Bundles
    $ rm -rf RSpec.tmbundle
    $ svn co svn://rubyforge.org/var/svn/rspec/tags/CURRENT/RSpec.tmbundle
    A    RSpec.tmbundle/Commands
    A    RSpec.tmbundle/Commands/Run Focussed Specification.tmCommand
    A    RSpec.tmbundle/Commands/Run Specifications in selected files or directories.tmCommand
    A    RSpec.tmbundle/Commands/Run Specifications - Normal.tmCommand
    A    RSpec.tmbundle/Commands/Alternate File.tmCommand
    A    RSpec.tmbundle/Snippets
    A    RSpec.tmbundle/Snippets/should_be_a_kind_of.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_predicate.tmSnippet
    A    RSpec.tmbundle/Snippets/should eql.tmSnippet
    A    RSpec.tmbundle/Snippets/should_satisfy.tmSnippet
    A    RSpec.tmbundle/Snippets/should_receive_with_no_args.tmSnippet
    A    RSpec.tmbundle/Snippets/should_be.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_equal.tmSnippet
    A    RSpec.tmbundle/Snippets/exactly.tmSnippet
    A    RSpec.tmbundle/Snippets/should_match.tmSnippet
    A    RSpec.tmbundle/Snippets/at_most_once.tmSnippet
    A    RSpec.tmbundle/Snippets/twice.tmSnippet
    A    RSpec.tmbundle/Snippets/should_have_at_least.tmSnippet
    A    RSpec.tmbundle/Snippets/should_raise.tmSnippet
    A    RSpec.tmbundle/Snippets/Set Controller for Spec.tmSnippet
    A    RSpec.tmbundle/Snippets/should_throw.tmSnippet
    A    RSpec.tmbundle/Snippets/teardown.tmSnippet
    A    RSpec.tmbundle/Snippets/any_number_of_times.tmSnippet
    A    RSpec.tmbundle/Snippets/once.tmSnippet
    A    RSpec.tmbundle/Snippets/should_have_at_most.tmSnippet
    A    RSpec.tmbundle/Snippets/at_least_twice.tmSnippet
    A    RSpec.tmbundle/Snippets/should ==.tmSnippet
    A    RSpec.tmbundle/Snippets/should =~.tmSnippet
    A    RSpec.tmbundle/Snippets/response_should_not_be_success.tmSnippet
    A    RSpec.tmbundle/Snippets/controller_context_RESTful.tmSnippet
    A    RSpec.tmbundle/Snippets/should_receive.tmSnippet
    A    RSpec.tmbundle/Snippets/at_least_once.tmSnippet
    A    RSpec.tmbundle/Snippets/setup.tmSnippet
    A    RSpec.tmbundle/Snippets/should_include.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_be_redirect.tmSnippet
    A    RSpec.tmbundle/Snippets/at_most.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_be_close.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_be_an_instance_of.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_be_a_kind_of.tmSnippet
    A    RSpec.tmbundle/Snippets/should_receive_with_any_args.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_satisfy.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not eql.tmSnippet
    A    RSpec.tmbundle/Snippets/Describe_type.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_be.tmSnippet
    A    RSpec.tmbundle/Snippets/Require spec_helper.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_match.tmSnippet
    A    RSpec.tmbundle/Snippets/should_respond_to.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_throw.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_raise.tmSnippet
    A    RSpec.tmbundle/Snippets/at_most_twice.tmSnippet
    A    RSpec.tmbundle/Snippets/should_receive_with_args.tmSnippet
    A    RSpec.tmbundle/Snippets/Describe_type_string.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not ==.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not =~.tmSnippet
    A    RSpec.tmbundle/Snippets/It.tmSnippet
    A    RSpec.tmbundle/Snippets/should_predicate.tmSnippet
    A    RSpec.tmbundle/Snippets/Custom Matcher.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_receive.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_include.tmSnippet
    A    RSpec.tmbundle/Snippets/should_have_records.tmSnippet
    A    RSpec.tmbundle/Snippets/should_equal.tmSnippet
    A    RSpec.tmbundle/Snippets/controller_context.tmSnippet
    A    RSpec.tmbundle/Snippets/and_yield.tmSnippet
    A    RSpec.tmbundle/Snippets/mock.tmSnippet
    A    RSpec.tmbundle/Snippets/and_return_value.tmSnippet
    A    RSpec.tmbundle/Snippets/should_render.tmSnippet
    A    RSpec.tmbundle/Snippets/should_have.tmSnippet
    A    RSpec.tmbundle/Snippets/should_not_respond_to.tmSnippet
    A    RSpec.tmbundle/Snippets/response_should_be_success.tmSnippet
    A    RSpec.tmbundle/Snippets/and_return_block.tmSnippet
    A    RSpec.tmbundle/Snippets/Describe.tmSnippet
    A    RSpec.tmbundle/Snippets/should_redirect_to.tmSnippet
    A    RSpec.tmbundle/Snippets/should_be_redirect.tmSnippet
    A    RSpec.tmbundle/Snippets/and_throw.tmSnippet
    A    RSpec.tmbundle/Snippets/and_raise.tmSnippet
    A    RSpec.tmbundle/Snippets/should_be_close.tmSnippet
    A    RSpec.tmbundle/Snippets/should_be_an_instance_of.tmSnippet
    A    RSpec.tmbundle/Snippets/at_least.tmSnippet
    A    RSpec.tmbundle/info.plist
    A    RSpec.tmbundle/Support
    A    RSpec.tmbundle/Support/lib
    A    RSpec.tmbundle/Support/lib/text_mate_formatter.rb
    A    RSpec.tmbundle/Support/lib/spec_mate.rb
    A    RSpec.tmbundle/Support/lib/spec
    A    RSpec.tmbundle/Support/lib/spec/mate
    A    RSpec.tmbundle/Support/lib/spec/mate/switch_command.rb
    A    RSpec.tmbundle/Support/spec
    A    RSpec.tmbundle/Support/spec/fixtures
    A    RSpec.tmbundle/Support/spec/fixtures/example_failing_spec.rb
    A    RSpec.tmbundle/Support/spec/fixtures/example_passing_spec.rb
    A    RSpec.tmbundle/Support/spec/spec
    A    RSpec.tmbundle/Support/spec/spec/mate
    A    RSpec.tmbundle/Support/spec/spec/mate/switch_command_spec.rb
    A    RSpec.tmbundle/Support/spec/spec_helper.rb
    A    RSpec.tmbundle/Support/spec/spec_mate_spec.rb
    A    RSpec.tmbundle/Support/spec/vendor
    A    RSpec.tmbundle/Support/spec/vendor/plugins
    A    RSpec.tmbundle/Support/spec/vendor/plugins/rspec
    A    RSpec.tmbundle/Support/spec/vendor/plugins/rspec/lib
    A    RSpec.tmbundle/README
    Checked out revision 2691.