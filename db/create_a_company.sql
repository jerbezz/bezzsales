insert into company (
    company_name,
    user_id
) values (
    $1,
    $2
);

update users
set company_id = company.company_id
from company
where company.user_id = $2