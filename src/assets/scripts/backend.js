import { initSwiper } from './sliders.js';

$(function() {
    showMore();
    filterFestMonth();
    filterFestDate();
    subscribe();
    faq();
    reviews();
    filterYears();
    filtersChange();
});

function showMore() {
    $(document).on('click', '[data-type=show_more_click]', function(e) {
        e.preventDefault();

        let container = $(this).parents('[data-type=main_container]'),
            itemsContainer = container.find('[data-type=items-container]'),
            url = $(this).attr('data-url'),
            pagenav = container.find('[data-type=pagenav_block]'),
            data = null,
            path = window.location.pathname.split('/');

        if (path[1] == 'catalog' || path[1] == 'recipes') {
            data = JSON.parse(container.find('[data-type=show_more_click]').attr('data-filter'));
        } else {
            data = {
                ajax: true,
            }
        }

        if (url !== undefined) {
            pagenav.remove();
            $.ajax({
                type: 'POST',
                url: url,
                dataType: 'html',
                data: data,
                success: function (data) {
                    let itemsResponse = $(data).find('[data-type=item]'),
                        pagenavResponse = $(data).find('[data-type=pagenav_block]');

                    itemsContainer.append(itemsResponse);
                    itemsContainer.after(pagenavResponse);
                }
            })
        }
    });
}

function filtersChange() {
  $('[data-type=change-filter]').on('select2:select', function() {
    let thisObj = $(this),
      container = thisObj.parents('[data-type=container]'),
      itemsContainer = container.find('[data-type=items-container'),
      getData = container.find('[data-type=change-filter'),
      pagenavBlock = container.find('[data-type=pagenav_block'),
      data = {
        ajax: true,
      };

      getData.each(function () {
        data[$(this).attr('data-field')] = $(this).val();
      });

    $.ajax({
      type: 'get',
      url: window.location.pathname,
      dataType: 'html',
      data: data,
      success: function(r) {
        let itemsResponse = $(r).find('[data-type=items-container]').children(),
          pagenavResponse = $(r).find('[data-type=pagenav_block]');

        itemsContainer.empty();
        itemsContainer.append(itemsResponse);
        pagenavBlock.remove();

        if (pagenavResponse) {
          itemsContainer.after(pagenavResponse);
        }
      }
    });
  });
}

function filterFestMonth() {
    $(document).on('click', '[data-type=select-month]', function () {
      let container = $(this).parents('[data-type=fest-foto-container]'),
        month = $(this).attr('data-month'),
        itemsContainer = container.find('[data-type=items-container]'),
        dateSelect = container.find('[data-type=date-filter-select]');

      itemsContainer.empty();
      dateSelect.empty();

      $.ajax({
        type: 'post',
        url: window.location.pathname,
        dataType: 'html',
        data: {
          monthRequest: month,
        },
        success: function(data) {
          let dateSelectResponse = $(data).find('[data-type=date-filter-select]').children(),
            itemsContainerResponse = $(data).find('[data-type=items-container]').children();

          dateSelect.append(dateSelectResponse);
          itemsContainer.append(itemsContainerResponse);

          dateSelect.each(function () {
            $(this).val($(this).find('[selected]').val()).trigger('change');
          });

          initSwiper();
        }
      });
    });
  }

  function filterFestDate() {
    $('[data-type=date-filter-select]').on('select2:select', function() {
      let container = $(this).parents('[data-type=fest-foto-container]'),
        month = container.find('[data-type=select-month].active').attr('data-month'),
        itemsContainer = container.find('[data-type=items-container]'),
        dateVal = $(this).val();

      console.log(month);

      itemsContainer.empty();

      $.ajax({
        type: 'post',
        url: window.location.pathname,
        dataType: 'html',
        data: {
          monthRequest: month,
          dateRequest: dateVal,
        },
        success: function(data) {
          let itemsContainerResponse = $(data).find('[data-type=items-container]').children();

          itemsContainer.append(itemsContainerResponse);

          initSwiper();
        }
      });
    });
  }

function reviews() {
  $(document).on('submit', '[data-type=review-form]', function (e) {
    e.preventDefault();
    let email = $('[data-attr=email]').val();
    let theme = $('[data-attr=theme]').val();
    let name = $('[data-attr=name]').val();
    console.log(email);

    $.ajax({
      type: 'POST',
      url: '/local/templates/main/include/ajax/side/review.php',
      data: {
        email: email,
        theme: theme,
        name: name
      },
      dataType: 'html',
      success: function (data) {
        console.log(data);
      }
    })
  });
}
function faq() {
  $(document).on('submit', '[data-type=faq-form]', function (e) {
    e.preventDefault();

    let email = $('[data-attr=email]').val();
    let theme = $('[data-attr=theme]').val();
    console.log(email);

    $.ajax({
      type: 'POST',
      url: '/local/templates/main/include/ajax/side/faq.php',
      data: {
        email: email,
        theme: theme
      },
      dataType: 'html',
      success: function (data) {
        console.log(data);
      }
    })
  });
}

function subscribe() {
  $(document).on('submit', '[data-type=subscribe]', function (e) {
    e.preventDefault();
    let email = $('[data-type=mail]').val();

    $.ajax({
      type: 'POST',
      url: '/local/templates/main/include/ajax/side/subscribe.php',
      data: {
        email: email
      },
      dataType: 'html',
      success: function (data) {
        console.log(data);
      }
    })
  });
}

function filterYears() {
  $(document).on('click', '[data-type=filter-item]', function (e) {
    e.preventDefault();
    let year = $(this).attr('data-text'),
      container = $('[data-type=items_block]').parents(),
      itemsContainer = $('[data-type=items_block]'),
      pagenav = container.find('[data-type=pagenav_block]');
    $('[data-type=filter-item]').removeClass('active');
    $(this).addClass('active');

    console.log(year);
    $.ajax({
      type: 'POST',
      data: {
        ajax: true,
        year: year
      },
      dataType: 'html',
      success: function (data) {
        pagenav.remove();

        let pagenavResponse = $(data).find('[data-type=pagenav_block]'),
          itemsResponse = $(data).find('[data-type=item]');

        itemsContainer.html(itemsResponse);
        itemsContainer.after(pagenavResponse);

        console.log(pagenavResponse);

      }
    })
  });
  $(document).on('click', '[data-type=reset]', function (e) {
    e.preventDefault();
    $('[data-type=filter-item]')[0].click();
  });
}
