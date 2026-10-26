-- jsuser 계정 생성
create user jsuser with password 'pwjs';

-- db 생성 및 권한 부여
create database jsdb owner jsuser;

