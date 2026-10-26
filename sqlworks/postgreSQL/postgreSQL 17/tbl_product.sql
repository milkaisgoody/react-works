-- jsdb/jsuser 
-- product 테이블 생성
create table product(
	id	serial primary key,
	product_name  varchar(30) not null,
	price  int not null,
	description	text not null,
	created_at  timestamptz default now()
);

-- 상품 추가
insert into product (product_name, price, description) 
values ('USB 메모리', 20000, '스페이스 테크 128GB 메모리');

-- 커밋
commit;

select * from product;


