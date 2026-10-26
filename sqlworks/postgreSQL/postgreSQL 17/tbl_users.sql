
-- users 테이블 생성
create table users(
	id  serial primary key,
	username  varchar(50) not null unique,
	password  varchar(255) not null,
	email  varchar(100) not null,
	role  varchar(20) not null default 'user',
	created_at  timestamptz default now()
);

-- 회원 추가
insert into users(username, password, email) 
values ('user1', 'u1111', 'user1@users.com');

-- 커밋
commit;

select * from users;
