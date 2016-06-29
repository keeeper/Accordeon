(function() {
  var toggleState = function (e) {
    eventsObj.preventDefault(e);
    console.log(e);
    var elem = eventsObj.getTarget(e),
        dataTrigger = elem.getAttribute('data-trigger');
    if (dataTrigger) {
      elem.classList.toggle('is-hidden');
      elem.classList.toggle('active');
    }
  }

  eventsObj.addEvent(document, 'click', toggleState);
})();
