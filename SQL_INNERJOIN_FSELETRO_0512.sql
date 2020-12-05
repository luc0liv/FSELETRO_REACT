use fullstackeletro;

create table produto_categoria (
id_prod_cat int not null auto_increment,
id_produt int,
id_cat int,
primary key(id_prod_cat)
);

alter table produto_categoria add foreign key (idprodut) references produtos(idprodut);
alter table produto_categoria add foreign key (id_cat) references categorias(id_cat);

select * from produtos
inner join produto_categoria on produtos.idprodut = produto_categoria.idprodut
inner join categorias on categorias.id_cat = produto_categoria.id_cat;