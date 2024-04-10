# Use case EZGasStation

# Use case: authenticate user
- *Informal description*: user logs in account name password
- *Actor(s) involved*: premium user
- *Precondition*: premium user has an account  
- *Post condition*: (must distinguish cases of successful login and failed login)

- Scenarios
    - Nominal: au1
    - Variants: au4
    - Excepetions: au2 (wrong pwd), au3 (wrong username), au5 (forgot pwd), au6 (blocked account), au7 (premium user but fees not paid)

## au1
- Preconditions: user has an account, normal user
- Post conditions: user is authenticated as user (will be able to use service with ads)

- Steps
    1. User enters account name and pwd (actor)
    2. Looks for account name and pwd, <span style="color:green">matche ok</span> (system)
    3. User is authenticated as normal user (system)

## au2
- Preconditions: user has an account, premium user
- Post conditions: user is authenticated as user (will be able to use service without ads)

| Steps | Actor | System |
|-------|-------|--------|
| 1 |User enters account name and pwd | | 
| 2 | | Looks for account name and pwd, <span style="color:red">no matches for pwd</span> | 
| 3 | | Ask pwd again | 
| 4 | User enters pwd again | |
| 5 | | No matches. Ask again | 
| 6 |User enters pwd again | |


# Use case: sign up
- *Informal description*: user defines account
- *Actor(s) involved*: user
- *Precondition*: User has no account
- *Post condition*: 

- Scenarios
    - Nominal: su1
    - Variants: su2
    - Excepetions: su3 (account name already exists), su4 (pwd rule not satisfied), su4 (email check failed)


# Use case: Report price (write price)
- *Informal description*: user insert price of fuel of a gas station
- *Actor(s) involved*: user
- *Precondition*: User has no account
- *Post condition*: new price for gas station added

- Scenarios
    - Nominal: rp1
    - Variants: rp2
    - Excepetions: 

## rp1
- Preconditions: user is authenticated
- Post conditions: new price for gas station added

| Steps | Actor | System |
|-------|-------|--------|
|1|||
|2|||
|3|||
|4|||
|5|||
