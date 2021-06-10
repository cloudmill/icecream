import { initSwiper } from './sliders.js';

$(function() {
    showMore();
    changeFilterCatalog();
    changeFilterRecipes();
    filterFestMonth();
    filterFestDate();
    subscribe();
    faq();
    reviews();
    filterYears();
});

function showMore() {
    $(document).on('click', '[data-type=show_more_click]', function(e) {
        e.preventDefault();

        let container = $(this).parents('[data-type=main_container]'),
            itemsContainer = container.find('[data-type=items_block]'),
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

function changeFilterCatalog() {
    let kind = null,
      flavors = null,
      data = null,
      container = null,
      itemsBlock = null,
      filterBlock = null,
      pagenavBlock = null,
      filterSelects = null,
      filterOptions = null,
      selectKind = null,
      selectFlavors = null;

    $('[data-type=reset_filters_catalog]').on('click', function () {
        container = $(this).parents(['data-type=catalog_container']),
        itemsBlock = container.find('[data-type=items_block]'),
        filterBlock = container.find('[data-type=catalog_filter_block]'),
        pagenavBlock = container.find('[data-type=pagenav_block]'),
        filterSelects = container.find('[data-type=change_filter_catalog]'),
        filterOptions = container.find('[data-type=change_filter_catalog] option'),
        selectKind = container.find('[data-type-title=kind]'),
        selectFlavors = container.find('[data-type-title=flavors]');

        data = {
            ajax: true,
            kind: '',
            flavors: '',
        }

        catalogFilterAjax(data, filterOptions, itemsBlock, pagenavBlock, selectKind, selectFlavors, filterBlock, filterSelects);
    });

    $('[data-type=change_filter_catalog]').on('select2:select', function() {
        container = $(this).parents(['data-type=catalog_container']),
        itemsBlock = container.find('[data-type=items_block]'),
        filterBlock = container.find('[data-type=catalog_filter_block]'),
        pagenavBlock = container.find('[data-type=pagenav_block]'),
        filterSelects = container.find('[data-type=change_filter_catalog]'),
        filterOptions = container.find('[data-type=change_filter_catalog] option'),
        selectKind = container.find('[data-type-title=kind]'),
        selectFlavors = container.find('[data-type-title=flavors]');

        filterSelects.each(function() {
            if ($(this).attr('data-type-title') == 'kind') {
                kind = $(this).val();
            }

            if ($(this).attr('data-type-title') == 'flavors') {
                flavors = $(this).val();
            }
        });

        data = {
            ajax: true,
            kind: kind,
            flavors: flavors,
        };

        catalogFilterAjax(data, filterOptions, itemsBlock, pagenavBlock, selectKind, selectFlavors, filterBlock, filterSelects);
    });
}

function catalogFilterAjax(data, filterOptions, itemsBlock, pagenavBlock, selectKind, selectFlavors, filterBlock, filterSelects) {
    $.ajax({
        type: 'post',
        url: window.location.pathname,
        dataType: 'html',
        data: data,
        success: function(data) {
            let itemsResponse = $(data).find('[data-type=items_block]'),
                pagenavResponse = $(data).find('[data-type=pagenav_block]'),
                selectKindResponse = $(data).find('[data-type-title=kind] option'),
                selectFlavorsResonse = $(data).find('[data-type-title=flavors] option');

            filterOptions.remove();
            itemsBlock.remove();
            pagenavBlock.remove();
            selectKind.append(selectKindResponse);
            selectFlavors.append(selectFlavorsResonse);
            filterBlock.after(itemsResponse);
            itemsResponse.after(pagenavResponse);

            filterSelects.each(function () {
                $(this).val($(this).find('[selected]').val()).trigger('change');
            });
        }
    });
}

function changeFilterRecipes() {
    let type = null,
      products = null,
      time = null,
      data = null,
      container = null,
      appendItems = null,
      itemsBlock = null,
      filterSelects = null,
      filterOptions = null,
      typeBlockSelect = null,
      productsBlockSelect = null,
      timeBlockSelect = null,
      pagenavBlock = null;

    $('[data-type=reset_filters_recipes]').on('click', function () {
        container = $(this).parents(['data-type=container_recipes']),
        appendItems = container.find('[data-type=append_items]'),
        itemsBlock = container.find('[data-type=items_block]'),
        filterSelects = container.find('[data-type=change_filter_recipes]'),
        filterOptions = container.find('[data-type=change_filter_recipes] option'),
        typeBlockSelect = container.find('[data-title-type=type]'),
        productsBlockSelect = container.find('[data-title-type=products]'),
        timeBlockSelect = container.find('[data-title-type=time]'),
        pagenavBlock = container.find('[data-type=pagenav_block]');

        data = {
            ajax: true,
            type: '',
            products: '',
            time: '',
        }

        recipesFilterAjax(data);
    });

    $('[data-type=change_filter_recipes]').on('select2:select', function() {
        container = $(this).parents(['data-type=container_recipes']),
        appendItems = container.find('[data-type=append_items]'),
        itemsBlock = container.find('[data-type=items_block]'),
        filterSelects = container.find('[data-type=change_filter_recipes]'),
        filterOptions = container.find('[data-type=change_filter_recipes] option'),
        typeBlockSelect = container.find('[data-title-type=type]'),
        productsBlockSelect = container.find('[data-title-type=products]'),
        timeBlockSelect = container.find('[data-title-type=time]'),
        pagenavBlock = container.find('[data-type=pagenav_block]');

        filterSelects.each(function () {
            if ($(this).attr('data-title-type') == 'type') {
                type = $(this).val();
            }

            if ($(this).attr('data-title-type') == 'products') {
                products = $(this).val();
            }

            if ($(this).attr('data-title-type') == 'time') {
                time = $(this).val();
            }
        });

        data = {
            ajax: true,
            type: type,
            products: products,
            time: time,
        };

        recipesFilterAjax(data, filterOptions, itemsBlock, pagenavBlock, typeBlockSelect, productsBlockSelect, timeBlockSelect, appendItems, filterSelects);
    });
}

function recipesFilterAjax(data, filterOptions, itemsBlock, pagenavBlock, typeBlockSelect, productsBlockSelect, timeBlockSelect, appendItems, filterSelects) {
    $.ajax({
        type: 'post',
        url: window.location.pathname,
        dataType: 'html',
        data: data,
        success: function(data) {
            let itemsResponse = $(data).find('[data-type=items_block]'),
                pagenavResponse = $(data).find('[data-type=pagenav_block]'),
                selectTypeResponse = $(data).find('[data-title-type=type] option'),
                selectProductsResponse = $(data).find('[data-title-type=products] option'),
                selectTimeResponse = $(data).find('[data-title-type=time] option');

            filterOptions.remove();
            itemsBlock.remove();
            pagenavBlock.remove();
            typeBlockSelect.append(selectTypeResponse);
            productsBlockSelect.append(selectProductsResponse);
            timeBlockSelect.append(selectTimeResponse);
            appendItems.append(itemsResponse);
            itemsResponse.after(pagenavResponse);

            filterSelects.each(function () {
                $(this).val($(this).find('[selected]').val()).trigger('change');
            });
        }
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
