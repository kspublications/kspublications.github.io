(function () {
  $('.book-link').click(function (e) {
    $('#modal .modal-body').html(
      $('#view_' + e.currentTarget.href.split('#')[1])[0]
        .outerHTML
        .replace('display: none', '')
    );
    $('#modal').modal();
  });
})();
