create table company (
    companyId serial,
    companyName varchar(255)
)

create table user (
    userId serial,
    isAdmin boolean,
    email text,
    passHash text,
    firstName varchar(50),
    lastname varchar(50),
    companyId int references company(companyId)
)

create table stores (
    storeId serial,
    companyId int references company(companyId),
    storeName varchar(100)
)

create table salesItems (
    itemNumber serial,
    storeId int references stores(storeId),
    itemName varchar(50),
    itemDesc varchar(50),
    itemPrice int
)

create table customers (
    customerNumber serial,
    storeId int references stores(storeId),
    custName text(75),
    custAddress text,
    custState varchar(2),
    custZip int(5)
)

create table purchases (
    purchaseNumber serial,
    storeId int references stores(storeId),
    vendor varchar(55),
    amount int,
    itemDesc varchar(55)
)

create table sales (
    salesNumber serial,
    storeId int references stores(storeId),
    itemNumber int references salesItems(itemNubmer)
)