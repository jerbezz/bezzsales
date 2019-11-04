insert into company (
    company_name,
    user_id
) values (
    $1,
    $2
);

update users 
set company_id = $2
where user_id = $2;

select user_id, is_admin, email, first_name, last_name, company_id from users
where user_id = $2