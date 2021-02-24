$(function() {
    showMore();
    changeFilterCatalog();
    changeFilterRecipes();
});

function showMore() {
    $(document).on('click', '[data-type=show_more_click]', function(e) {
        e.preventDefault();

        let container = $(this).parents('[data-type=main_container]'),
            itemsContainer = container.find('[data-type=items_block]'),
            url = $(this).attr('data-url'),
            pagenav = container.find('[data-type=pagenav_block]');
            data = null;
            path = window.location.pathname.split('/');

        if (path[1] == 'catalog' || path[1] == 'recipes') {
            data = JSON.parse(container.find('[data-type=show_more_click]').attr('data-filter'));
        } else {
            data = {
                ajax: true,
            }
        }
        
        if (url !== undefined) {
            $.ajax({
                type: 'POST',
                url: url,
                dataType: 'html',
                data: data,
                success: function (data) {
                    pagenav.remove();

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
    kind = null,
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

        catalogFilterAjax(data);
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

        catalogFilterAjax(data);
    });
}

function catalogFilterAjax(data) {
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
    type = null,
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
        
        recipesFilterAjax(data);
    });
}

function recipesFilterAjax(data) {
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