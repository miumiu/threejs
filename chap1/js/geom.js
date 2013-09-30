  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>d3/src/geom/geom.js at master · mbostock/d3 · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="C3/D93sllrFTrj7vQw1QsvTQLuYN0xNMYbPvYuz4bHY=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-ffb8984c1babeebaf9d91df108adc49a39069e87.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-b3c5d44b0875b82e4470d01d4974d49e981a6a03.css" media="screen" rel="stylesheet" type="text/css" />
    


        <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-d61440caec5d2210a2242b084cdb2bc6597e00b7.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-089ad85d7bd16439d94518cf478e48592191e07d.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/mbostock/d3/blob/183060d40ffce8a8bd233feeedd80f84d4707642/src/geom/geom.js'>
    <meta property="og:title" content="d3"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mbostock/d3"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="d3 - A JavaScript visualization library for HTML and SVG."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="mbostock/d3"/>

    <meta name="description" content="d3 - A JavaScript visualization library for HTML and SVG." />

  <link href="https://github.com/mbostock/d3/commits/master.atom" rel="alternate" title="Recent Commits to d3:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public env-production  ">
    <div id="wrapper">

      

      

      


        <div class="header header-logged-out">
          <div class="container clearfix">

            <a class="header-logo-wordmark" href="https://github.com/">
              <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659561" />
              <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659561" />
            </a>

              
<ul class="top-nav">
    <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
  <li class="search"><a href="https://github.com/search">Search</a></li>
  <li class="features"><a href="https://github.com/features">Features</a></li>
    <li class="blog"><a href="https://github.com/blog">Blog</a></li>
</ul>


            <div class="header-actions">
                <a class="button primary" href="https://github.com/signup">Sign up for free</a>
              <a class="button" href="https://github.com/login?return_to=%2Fmbostock%2Fd3%2Fblob%2Fmaster%2Fsrc%2Fgeom%2Fgeom.js">Sign in</a>
            </div>

          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fmbostock%2Fd3" class="minibutton js-toggler-target star-button entice tooltipped leftwards" title="You must be signed in to use this feature" rel="nofollow"><span class="mini-icon mini-icon-star"></span>Star</a><a class="social-count js-social-count" href="/mbostock/d3/stargazers">12,133</a>
    </li>
    <li>
      <a href="/login?return_to=%2Fmbostock%2Fd3" class="minibutton js-toggler-target fork-button entice tooltipped leftwards"  title="You must be signed in to fork a repository" rel="nofollow"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/mbostock/d3/network" class="social-count">1,974</a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/mbostock" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">mbostock</span>
                  </a></span> /
                <strong><a href="/mbostock/d3" class="js-current-repository">d3</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/mbostock/d3" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/mbostock/d3/network" highlight="repo_network">Network</a></li>
    <li><a href="/mbostock/d3/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>35</span></a></li>

      <li><a href="/mbostock/d3/issues" highlight="repo_issues">Issues <span class='counter'>129</span></a></li>

      <li><a href="/mbostock/d3/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/mbostock/d3/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/mbostock/d3/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">125</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-filter="branches" class="js-select-menu-tab selected">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list js-filter-tab js-filter-branches css-truncate" data-filterable-for="commitish-filter-field" data-filterable-type="substring">



              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/adopt/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="adopt" rel="nofollow" title="adopt">adopt</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-axis-tick-class/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-axis-tick-class" rel="nofollow" title="fix-axis-tick-class">fix-axis-tick-class</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-centroid/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-centroid" rel="nofollow" title="fix-centroid">fix-centroid</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-greatarc-target/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-greatarc-target" rel="nofollow" title="fix-greatarc-target">fix-greatarc-target</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-nest-rollup/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-nest-rollup" rel="nofollow" title="fix-nest-rollup">fix-nest-rollup</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/gh-pages/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/master/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/minor-graticule/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="minor-graticule" rel="nofollow" title="minor-graticule">minor-graticule</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list js-filter-tab js-filter-tags css-truncate" data-filterable-for="commitish-filter-field" data-filterable-type="substring" style="display:none;">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.5/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.5" rel="nofollow" title="v3.0.5">v3.0.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.4/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.4" rel="nofollow" title="v3.0.4">v3.0.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.3" rel="nofollow" title="v3.0.3">v3.0.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.2" rel="nofollow" title="v3.0.2">v3.0.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.1" rel="nofollow" title="v3.0.1">v3.0.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.0" rel="nofollow" title="v3.0.0">v3.0.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.10.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.3" rel="nofollow" title="v2.10.3">v2.10.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.10.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.2" rel="nofollow" title="v2.10.2">v2.10.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.10.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.1" rel="nofollow" title="v2.10.1">v2.10.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.10.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.0" rel="nofollow" title="v2.10.0">v2.10.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.7/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.7" rel="nofollow" title="v2.9.7">v2.9.7</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.6/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.6" rel="nofollow" title="v2.9.6">v2.9.6</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.5/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.5" rel="nofollow" title="v2.9.5">v2.9.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.4/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.4" rel="nofollow" title="v2.9.4">v2.9.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.3" rel="nofollow" title="v2.9.3">v2.9.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.2" rel="nofollow" title="v2.9.2">v2.9.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.1" rel="nofollow" title="v2.9.1">v2.9.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.0" rel="nofollow" title="v2.9.0">v2.9.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.8.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.8.1" rel="nofollow" title="v2.8.1">v2.8.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.8.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.8.0" rel="nofollow" title="v2.8.0">v2.8.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.5/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.5" rel="nofollow" title="v2.7.5">v2.7.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.4/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.4" rel="nofollow" title="v2.7.4">v2.7.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.3" rel="nofollow" title="v2.7.3">v2.7.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.2" rel="nofollow" title="v2.7.2">v2.7.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.1" rel="nofollow" title="v2.7.1">v2.7.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.0" rel="nofollow" title="v2.7.0">v2.7.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.6.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.6.1" rel="nofollow" title="v2.6.1">v2.6.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.6.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.6.0" rel="nofollow" title="v2.6.0">v2.6.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.5.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5.2" rel="nofollow" title="v2.5.2">v2.5.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.5.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5.1" rel="nofollow" title="v2.5.1">v2.5.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.5.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5.0" rel="nofollow" title="v2.5.0">v2.5.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.6/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.6" rel="nofollow" title="v2.4.6">v2.4.6</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.5/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.5" rel="nofollow" title="v2.4.5">v2.4.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.4/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.4" rel="nofollow" title="v2.4.4">v2.4.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.3" rel="nofollow" title="v2.4.3">v2.4.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.2" rel="nofollow" title="v2.4.2">v2.4.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.1" rel="nofollow" title="v2.4.1">v2.4.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.0" rel="nofollow" title="v2.4.0">v2.4.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.4/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.4" rel="nofollow" title="v2.3.4">v2.3.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.3" rel="nofollow" title="v2.3.3">v2.3.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.2" rel="nofollow" title="v2.3.2">v2.3.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.1" rel="nofollow" title="v2.3.1">v2.3.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.0" rel="nofollow" title="v2.3.0">v2.3.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.2.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.1" rel="nofollow" title="v2.2.1">v2.2.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.2.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.0" rel="nofollow" title="v2.2.0">v2.2.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.1.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.3" rel="nofollow" title="v2.1.3">v2.1.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.1.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.2" rel="nofollow" title="v2.1.2">v2.1.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.1.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.1" rel="nofollow" title="v2.1.1">v2.1.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.1.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.0" rel="nofollow" title="v2.1.0">v2.1.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.4/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.4" rel="nofollow" title="v2.0.4">v2.0.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.3" rel="nofollow" title="v2.0.3">v2.0.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.2" rel="nofollow" title="v2.0.2">v2.0.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.1" rel="nofollow" title="v2.0.1">v2.0.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.0" rel="nofollow" title="v2.0.0">v2.0.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.7/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.7" rel="nofollow" title="v1.29.7">v1.29.7</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.6/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.6" rel="nofollow" title="v1.29.6">v1.29.6</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.5/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.5" rel="nofollow" title="v1.29.5">v1.29.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.4/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.4" rel="nofollow" title="v1.29.4">v1.29.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.3" rel="nofollow" title="v1.29.3">v1.29.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.2" rel="nofollow" title="v1.29.2">v1.29.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.1" rel="nofollow" title="v1.29.1">v1.29.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.0" rel="nofollow" title="v1.29.0">v1.29.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.28.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.28.1" rel="nofollow" title="v1.28.1">v1.28.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.28.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.28.0" rel="nofollow" title="v1.28.0">v1.28.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.27.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.27.2" rel="nofollow" title="v1.27.2">v1.27.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.27.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.27.1" rel="nofollow" title="v1.27.1">v1.27.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.27.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.27.0" rel="nofollow" title="v1.27.0">v1.27.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.26.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.26.0" rel="nofollow" title="v1.26.0">v1.26.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.25.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.25.0" rel="nofollow" title="v1.25.0">v1.25.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.24.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.24.1" rel="nofollow" title="v1.24.1">v1.24.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.24.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.24.0" rel="nofollow" title="v1.24.0">v1.24.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.23.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.23.0" rel="nofollow" title="v1.23.0">v1.23.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.22.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.22.1" rel="nofollow" title="v1.22.1">v1.22.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.22.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.22.0" rel="nofollow" title="v1.22.0">v1.22.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.21.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.21.0" rel="nofollow" title="v1.21.0">v1.21.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.20.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.3" rel="nofollow" title="v1.20.3">v1.20.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.20.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.2" rel="nofollow" title="v1.20.2">v1.20.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.20.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.1" rel="nofollow" title="v1.20.1">v1.20.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.20.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.0" rel="nofollow" title="v1.20.0">v1.20.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.19.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.19.1" rel="nofollow" title="v1.19.1">v1.19.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.19.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.19.0" rel="nofollow" title="v1.19.0">v1.19.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.18.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.18.0" rel="nofollow" title="v1.18.0">v1.18.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.17.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.17.1" rel="nofollow" title="v1.17.1">v1.17.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.17.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.17.0" rel="nofollow" title="v1.17.0">v1.17.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.16.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.16.0" rel="nofollow" title="v1.16.0">v1.16.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.15.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.15.1" rel="nofollow" title="v1.15.1">v1.15.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.15.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.15.0" rel="nofollow" title="v1.15.0">v1.15.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.14.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.14.2" rel="nofollow" title="v1.14.2">v1.14.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.14.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.14.1" rel="nofollow" title="v1.14.1">v1.14.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.14.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.14.0" rel="nofollow" title="v1.14.0">v1.14.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.4/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.4" rel="nofollow" title="v1.13.4">v1.13.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.3" rel="nofollow" title="v1.13.3">v1.13.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.2" rel="nofollow" title="v1.13.2">v1.13.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.1" rel="nofollow" title="v1.13.1">v1.13.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.0" rel="nofollow" title="v1.13.0">v1.13.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.12.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.12.0" rel="nofollow" title="v1.12.0">v1.12.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.11.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.11.1" rel="nofollow" title="v1.11.1">v1.11.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.11.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.11.0" rel="nofollow" title="v1.11.0">v1.11.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.10.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.10.1" rel="nofollow" title="v1.10.1">v1.10.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.10.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.10.0" rel="nofollow" title="v1.10.0">v1.10.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.9.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.9.1" rel="nofollow" title="v1.9.1">v1.9.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.9.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.9.0" rel="nofollow" title="v1.9.0">v1.9.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.5/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.5" rel="nofollow" title="v1.8.5">v1.8.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.4/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.4" rel="nofollow" title="v1.8.4">v1.8.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.3" rel="nofollow" title="v1.8.3">v1.8.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.2" rel="nofollow" title="v1.8.2">v1.8.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.1" rel="nofollow" title="v1.8.1">v1.8.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.0" rel="nofollow" title="v1.8.0">v1.8.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.7.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.7.0" rel="nofollow" title="v1.7.0">v1.7.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.6.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.6.1" rel="nofollow" title="v1.6.1">v1.6.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.6.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.6.0" rel="nofollow" title="v1.6.0">v1.6.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.5.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.3" rel="nofollow" title="v1.5.3">v1.5.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.5.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.2" rel="nofollow" title="v1.5.2">v1.5.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.5.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.1" rel="nofollow" title="v1.5.1">v1.5.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.5.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.0" rel="nofollow" title="v1.5.0">v1.5.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.4.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.4.0" rel="nofollow" title="v1.4.0">v1.4.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.3.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.3.0" rel="nofollow" title="v1.3.0">v1.3.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.2.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2.1" rel="nofollow" title="v1.2.1">v1.2.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.2.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2.0" rel="nofollow" title="v1.2.0">v1.2.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.1.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.0" rel="nofollow" title="v1.1.0">v1.1.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.0.3/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.3" rel="nofollow" title="v1.0.3">v1.0.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.0.2/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.2" rel="nofollow" title="v1.0.2">v1.0.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.0.1/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.1" rel="nofollow" title="v1.0.1">v1.0.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.0.0/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0" rel="nofollow" title="v1.0.0">v1.0.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/semver/src/geom/geom.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="semver" rel="nofollow" title="semver">semver</a>

              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/mbostock/d3" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/mbostock/d3/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/mbostock/d3/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">8</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:a097a28ef5b10ce879f6d9b296838262 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:a097a28ef5b10ce879f6d9b296838262 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">d3</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3/tree/master/src" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">src</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3/tree/master/src/geom" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">geom</span></a></span> / <strong class="final-path">geom.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="src/geom/geom.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/mbostock/d3/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/mbostock" rel="author">mbostock</a></span>
    <time class="js-relative-date" datetime="2010-11-07T13:49:59-08:00" title="2010-11-07 13:49:59">November 07, 2010</time>
    <div class="commit-title">
        <a href="/mbostock/d3/commit/a502859902d4be84e0a07a5efbdc67d35133acea" class="message">Add d3.geom module.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mbostock">mbostock</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/mbostock/d3/blob/183060d40ffce8a8bd233feeedd80f84d4707642/src/geom/geom.js" data-title="d3/src/geom/geom.js at master · mbostock/d3 · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>2 lines (1 sloc)</span>
                <span>0.014 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/mbostock/d3/raw/master/src/geom/geom.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/mbostock/d3/blame/master/src/geom/geom.js" class="button minibutton ">Blame</a>
                  <a href="/mbostock/d3/commits/master/src/geom/geom.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="nx">d3</span><span class="p">.</span><span class="nx">geom</span> <span class="o">=</span> <span class="p">{};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.09328s from fe18.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.09353' data-host='fe18'></span>
    
  </body>
</html>

