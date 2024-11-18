create schema finance;


/*create table finance.transaction_strictness_type(
    id serial primary key,
    name text not null ,
    description text
);
comment on table finance.transaction_strictness_type is 'Типы строгости транзакций';
insert into finance.transaction_strictness_type (name, description)
values  ('Обычная', 'Обычная'),
        ('Важная', null),
        ('Необязательная', null);*/


create table finance.transaction_frequency (
    id serial primary key,
    name text not null,
    full_name text not null
);
comment on table finance.transaction_frequency is 'Частота транзакций';
insert into finance.transaction_frequency (name, full_name)
values  ('Разовая', 'Разовая'),
        ('Ежедневная', 'Периодическая (Ежедневная)'),
        ('Еженедельная', 'Периодическая (Еженедельная)'),
        ('Ежемесячная', 'Периодическая (Ежемесячная)'),
        ('Ежегодная', 'Периодическая (Ежегодная)');


create table finance.card
(
    id   serial primary key,
    short_name text not null,
    name text not null,
    full_name text not null
);
comment on table finance.card is 'Карты';
insert into finance.card (short_name, name, full_name)
values  ('Т-7173', 'ТБанк ...7173', 'ТБанк ...7173 MasterCard'),
        ('Т-1955', 'ТБанк ...1955', 'ТБанк ...1955 МИР');


create table finance.agent (
    id serial primary key,
    name text not null,
    is_person boolean not null
);
comment on table finance.agent is 'Контрагенты';
insert into finance.agent (name, is_person)
values  ('Я', true);


create table finance.category (
    id serial primary key,
    name text not null,
    color text not null default '#000000'
);
comment on table finance.category is 'Категории';


create table finance.tag (
    id serial primary key,
    name text not null,
    color text not null default '#000000'
);
comment on table finance.tag is 'Теги';
insert into finance.tag (name)
values  ('Путешествия'),
        ('Работа'),
        ('Семья'),
        ('Одежда'),
        ('Животные'),
        ('Транспорт'),
        ('Отдых'),
        ('Продукты'),
        ('Бытовая техника'),
        ('Автомобиль'),
        ('Здоровье'),
        ('Еда'),
        ('Супермаркет'),
        ('Кафе'),
        ('Ресторан'),
        ('Коммунальные услуги'),
        ('Мебель'),
        ('Развлечения'),
        ('Долг'),
        ('Кредит'),
        ('Зарплата'),
        ('Другое'),
        ('Жилье'),
        ('Обувь'),
        ('Ювелирные изделия'),
        ('Спорттовары'),
        ('Ремонт'),
        ('Красота'),
        ('Недвижимость'),
        ('Спорт');


create table finance.transaction (
    id serial primary key,
    short_description text not null,
    description text not null,
    value float not null,
    date timestamp not null default now(),
--     transaction_strictness_type_id int not null references finance.transaction_strictness_type(id),
    transaction_frequency_id int not null references finance.transaction_frequency(id),
    card_id int not null references finance.card(id),
    agent_id int not null references finance.agent(id),
    category_id int not null references finance.category(id)
);
comment on table finance.transaction is 'Транзакции';


create table finance.transaction_2_tag (
    transaction_id int not null references finance.transaction(id),
    tag_id int not null references finance.tag(id),
    constraint transaction_2_tag_unq unique (transaction_id, tag_id)
);
comment on table finance.transaction_2_tag is 'Теги транзакций';
