-- Select para categorías y subcategorías
select 
	cat.id_category,
	cat.name,
	scat.name
from category cat inner join subcategory scat
	on cat.id_category = scat.id_category
order by cat.id_category;

-- Select para filtros y filter_options
select
	fl.id_filter,
	fl.is_generic,
	fl.filter_name,
	fl.filter_type,
	flop.option_value
from filter fl full join filter_option flop
	on fl.id_filter = flop.id_filter
order by fl.id_filter;