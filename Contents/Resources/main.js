;(function() {

  function $( selector, context ) {
    return ( context || document ).querySelector( selector )
  }

  function $$( selector, context ) {
    return ( context || document ).querySelectorAll( selector )
  }

  // Run highlight.js on load
  hljs.initHighlightingOnLoad()

  // Re-highlight code
  window.addEventListener( 'DOMContentLoaded', function() {

    function highlightCode() {
      var blocks = $$( 'pre > code' )
      for( var i = 0; i < blocks.length; i++ ) {
        hljs.highlightBlock( blocks[i] )
      }
    }

    document.body.addEventListener( 'ia-writer-change', highlightCode )

  })

})()
