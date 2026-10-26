-- 현재 접속한 사용자와 데이터베이스 확인
select current_user, current_database();

-- table 생성
create table test(
	msg varchar(50)
);


insert into test(msg) values ('Everyone, Good Luck!');

select * from test;