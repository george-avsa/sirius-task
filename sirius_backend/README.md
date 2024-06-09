### API

Authorization and registration path is `api/auth`

 - Authorization `/auth`. Post request, body `{email: string, password: string}`  
 - Registration `/registation`. Method and body same.  
 - Logout `logout`. Post without body, resetting cookie  
 - New refresh token `login/access-token`. Post without body.  

### Schemas and DB

Used Prisma to generate schemas, as a DB was used PostgreSQL.

### Running locally

1. Clone repo  
2. Install dependencies  
3. Configure `env` file (only 2 variables `DATABASE_URL` and `JWT_SECRET`)  
4. Push prisma schemas to DB  
5. Run using `npm start`