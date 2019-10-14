create table company (
    companyId serial primary key,
    companyName varchar(255)
);

create table users (
    userId serial primary key,
    isAdmin boolean,
    email text,
    passHash text,
    firstName varchar(50),
    lastname varchar(50),
    companyId integer references company(companyId)
);

create table stores (
    storeId serial primary key,
    companyId integer references company(companyId),
    storeName varchar(100)
);

create table salesItems (
    itemNumber serial primary key,
    storeId integer references stores(storeId),
    itemName varchar(50),
    itemDesc varchar(50),
    itemPrice integer
);

create table customers (
    customerNumber serial primary key,
    storeId integer references stores(storeId),
    custName varchar(75),
    custAddress text,
    custState varchar(2),
    custZip numeric(5)
);

create table purchases (
    purchaseNumber serial primary key,
    storeId integer references stores(storeId),
    vendor varchar(55),
    amount integer,
    itemDesc varchar(55),
    purchaseDate date
);

create table sales (
    salesNumber serial primary key,
    storeId integer references stores(storeId),
    itemNumber integer references salesItems(itemNumber),
    saleDate date
);