insert into users(
    isAdmin,
    firstName,
    lastName,
    email,
    passHash
) values (
    true,
    $1,
    $2,
    $3,
    $4
)
returning userId, isAdmin, email, firstName, lastName;