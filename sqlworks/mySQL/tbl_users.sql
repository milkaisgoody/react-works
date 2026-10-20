-- users 테이블
create table users(
	id	int  auto_increment primary key,
    username	varchar(30)	not null unique,
    password	varchar(255) not null,
    email	varchar(100) not null,
    role	varchar(20) not null default 'user',  -- user, admin
    created_at	timestamp default current_timestamp
);

-- 회원 추가
insert into users(username, password, email)
values ('user1', 'u1111', 'user1@test.com'); 

-- 회원 검색
select * from users;