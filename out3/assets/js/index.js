var selectItem = 'KOR';
var array = ['ENG', 'KOR', 'SPAN'];
var orderItem = function () {
  orderArray(selectItem);
  array.forEach(function (item) {
    var isActive = item === selectItem ? ' active' : '';
    var appendItem =
      '<li class="' +
      item +
      isActive +
      '" onclick=  clickEvent(' +
      "'" +
      item +
      "'" +
      ') >' +
      item +
      '</li>';
    $('.language-menu').append(appendItem);
  });
};

var orderArray = function (selectItem) {
  var findIndex = array.indexOf(selectItem);
  array.splice(findIndex, 1);
  array.unshift(selectItem);
};

var targetClickEvent = function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
};

var clickEvent = function (item) {
  $('.language-menu' + ' li').removeClass('active');
  $(item).addClass('active');
  selectItem = item;
  $('.language-menu').children().remove();
  this.orderItem(selectItem);
};
