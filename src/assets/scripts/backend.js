$(function() {
    showMore();
    changeFilterCatalog();
    changeFilterRecipes();
    contactForm();
});

function showMore() {
    $(document).on('click', '[data-type=show_more_click]', function(e) {
        e.preventDefault();

        let container = $(this).parents('[data-type=main_container]'),
            itemsContainer = container.find('[data-type=items_block]'),
            url = $(this).attr('data-url'),
            pagenav = container.find('[data-type=pagenav_block]');
        
        if (url !== undefined) {
            $.ajax({
                type: 'POST',
                url: url,
                dataType: 'html',
                data: {
                    ajax: true
                },
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
    let kind = null,
        flavors = null;

    $(document).on('change', '[data-type=change_filter_catalog]', function() {
        let container = $(this).parents(['data-type=catalog_container']),
            itemsBlock = container.find('[data-type=items_block]'),
            filterBlock = container.find('[data-type=catalog_filter_block]'),
            pagenavBlock = container.find('[data-type=pagenav_block]'),
            filterSelects = container.find('[data-type=change_filter_catalog]'),
            filterOptions = container.find('[data-type=change_filter_catalog] option'),
            selectKind = container.find('[data-type-title=kind]'),
            selectFlavors = container.find('[data-type-title=flavors]');
            
        if ($(this).attr('data-type-title') == 'kind') {
            kind = $(this).val();
        }
        
        if ($(this).attr('data-type-title') == 'flavors') {
            flavors = $(this).val();
        }
        
        let data = {
            kind: kind,
            flavors: flavors,
            ajax: true,
        };

        $.ajax({
            type: 'post',
            url: '/catalog/',
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
                itemsBlock.after(pagenavResponse);

                filterSelects.each(function () {
                    // $(this).val($(this).find('[selected]').val()).trigger('change');
                });
            }
        });
    });
}

function changeFilterRecipes() {
    let type = null,
        products = null,
        time = null;

    $('.select-main').on('select2:select', function() {
        let container = $(this).parents(['data-type=container_recipes']),
            appendItems = container.find('[data-type=append_items]'),
            itemsBlock = container.find('[data-type=items_block]'),
            filterSelects = container.find('[data-type=change_filter_recipes]'),
            filterOptions = container.find('[data-type=change_filter_recipes] option'),
            typeBlockSelect = container.find('[data-title-type=type]'),
            productsBlockSelect = container.find('[data-title-type=products]'),
            timeBlockSelect = container.find('[data-title-type=time]'),
            pagenavBlock = container.find('[data-type=pagenav_block]');
            
        if ($(this).attr('data-title-type') == 'type') {
            type = $(this).val();
        }
        
        if ($(this).attr('data-title-type') == 'products') {
            products = $(this).val();
        }
        
        if ($(this).attr('data-title-type') == 'time') {
            time = $(this).val();
        }

        let data = {
            type: type,
            products: products,
            time: time,
            ajax: true,
        };

        $.ajax({
            type: 'post',
            url: '/recipes/',
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
                itemsBlock.after(pagenavResponse);
                
                filterSelects.each(function () {
                    $(this).val($(this).find('[selected]').val()).trigger('change');
                });
            }
        });
    });
}

function contactForm() {
    $('[data-type=contact_form]').on('submit', function(e) {
        e.preventDefault();
        
        let form = $(this),
            data = {
                name: form.find("input[name='name']").val(),
                mail: form.find("input[name='email']").val(),
                phone: form.find("input[name='phone']").val(),
                text: form.find("textarea[name='question']").val(),
                type: form.attr('data-type-title'),
            };
        
        $.ajax({
            type: 'post',
            url: '/local/templates/main/include/ajax/contact/contact.php',
            dataType: 'json',
            data: data,
            success: function(data) {
                
            }
        });
    });
}