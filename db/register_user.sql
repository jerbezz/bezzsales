insert into users(
    is_admin,
    first_name,
    last_name,
    email,
    pass_hash
) values (
    true,
    $1,
    $2,
    $3,
    $4
)
returning user_id, is_admin, email, first_name, last_name, company_id;