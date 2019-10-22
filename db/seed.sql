create table company (
    company_id serial primary key,
    company_name varchar(255)
);

create table users (
    user_id serial primary key,
    is_admin boolean,
    email text,
    pass_hash text,
    first_name varchar(50),
    last_name varchar(50),
    company_id integer references company(company_id)
);

create table stores (
    store_id serial primary key,
    company_id integer references company(company_id),
    store_name varchar(100)
);

create table sales_items (
    item_number serial primary key,
    store_id integer references stores(store_id),
    item_name varchar(50),
    item_desc varchar(50),
    item_price integer
);

create table customers (
    customer_number serial primary key,
    store_id integer references stores(store_id),
    cust_name varchar(75),
    cust_address text,
    cust_state varchar(2),
    cust_zip numeric(5)
);

create table purchases (
    purchase_number serial primary key,
    store_id integer references stores(store_id),
    vendor varchar(55),
    amount integer,
    item_desc varchar(55),
    purchase_date date
);

create table sales (
    sales_number serial primary key,
    store_id integer references stores(store_id),
    item_number integer references sales_items(item_number),
    sale_date date
);