create schema systemDB;
use systemDB;


create table civilregistry(
id bigint not null,
    primary key(id)
);
select * from civilregistry;

create table userProfile (
    id bigint NOT null,
    userpassword varchar(50) not null,
    userName varchar(30),
    age int,
    weight int,
    bloodtype char(4),
    address varchar(255),
    city varchar(30),
    region varchar(30),
    primary key (id),
    foreign key (id) references civilregistry(id)
);
select * from userProfile;
create table authority(
email varchar(100),
    authpassword varchar(50) not null,
authName varchar(30),
    address varchar(266),
    city varchar(30),
    region varchar(30),
    workinghours_start time,
    workinghours_close time,
    donationtimeFrom time,
    donationtimeTo time,
    tax char(9),
    primary key(tax)

);

insert into authority values("gg@gmail.com","123456789","gh-hosp","agamy", "alex" , "bitash","05:00","12:00","07:00", "10:00","234444444");


select * from authority;

CREATE TABLE bagsNumber (
    tax char(9),
    Aplus_needed INT,
    Aplus_exist INT,
    Aminus_needed INT,
    Aminus_exist INT,
    Bplus_needed INT,
    Bplus_exist INT,
    Bminus_needed INT,
    Bminus_exist INT,
    ABplus_needed INT,
    ABplus_exist INT,
    ABminus_needed INT,
    ABminus_exist INT,
    Oplus_needed INT,
    Oplus_exist INT,
    Ominus_needed INT,
    Ominus_exist INT
);

select * from bagsNumber;

alter table bagsNumber
    ADD constraint FK_1 FOREIGN KEY (tax) references authority (tax) on update cascade on delete cascade;