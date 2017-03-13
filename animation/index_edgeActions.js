/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${pinmixtootip}", "mouseover", function(sym, e) {
         tooltip.show('Capacity ranges from 0.5-50 tons/hr.<br/>Pellet Diameters ranging from 0.5-5mm');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pinmixtootip}", "mouseout", function(sym, e) {
         tooltip.hide(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pinmixtootipCopy}", "mouseover", function(sym, e) {
         tooltip.show('Water or Aqueous (OMRI)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pinmixtootipCopy}", "mouseout", function(sym, e) {
         tooltip.hide(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pinmixtootipCopy2}", "mouseover", function(sym, e) {
         tooltip.show('Ag Grade (1-5mm dia.) <br/> Turf Grade (0.5-1mm dia.)');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pinmixtootipCopy2}", "mouseout", function(sym, e) {
         tooltip.hide(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "click", function(sym, e) {
         window.open("mailto:cvaughan@marsmineral.com", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'pellets'
   (function(symbolName) {   
   
   })("pellets");
   //Edge symbol end:'pellets'

   //=========================================================
   
   //Edge symbol: 'pelletstest'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("pelletstest");
   //Edge symbol end:'pelletstest'

   //=========================================================
   
   //Edge symbol: 'pelletsmotion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("pelletsmotion");
   //Edge symbol end:'pelletsmotion'

   //=========================================================
   
   //Edge symbol: 'pelletsmotion2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("pelletsmotion2");
   //Edge symbol end:'pelletsmotion2'

   //=========================================================
   
   //Edge symbol: 'pelletsmotion3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("pelletsmotion3");
   //Edge symbol end:'pelletsmotion3'

   //=========================================================
   
   //Edge symbol: 'arrow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("arrow");
   //Edge symbol end:'arrow'

   //=========================================================
   
   //Edge symbol: 'pinmixtootip'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${pinmixertooltip}", "mouseover", function(sym, e) {
         sym.$("test").show();

      });
      //Edge binding end

   })("pinmixtootip");
   //Edge symbol end:'pinmixtootip'

   //=========================================================
   
   //Edge symbol: 'truckload'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         
         clearTimeout(eventTimer);  //clear timeout
         
         var eventTimer=window.setTimeout(function(){sym.play();},4000);// 4 second delay then play

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("truckload");
   //Edge symbol end:'truckload'

   //=========================================================
   
   //Edge symbol: 'manureflow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2101, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("manureflow");
   //Edge symbol end:'manureflow'

   //=========================================================
   
   //Edge symbol: 'pellet1'
   (function(symbolName) {   
   
   })("pellet1");
   //Edge symbol end:'pellet1'

   //=========================================================
   
   //Edge symbol: 'arrow6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("arrow6");
   //Edge symbol end:'arrow6'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-338773876");