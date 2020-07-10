# Add account

Creates a new account . 

**URL**: `/api/auth`

**Method**: `POST`

**Auth Required**: `NO`

**Sample Payload**:
```json
{
    "email": "sample@gmail.com",
    "password": "sample_password"
}

```

## Success Response

**Condition**: New account created

**Code**: `201 Created`

**Content**: 

```json
{
    "status": 201,
    "data": {
        "_id": "5f087272515b870017705f4d",
        "email": "test_account@gmail.com",
        "password": "$2b$10$yH5TtjRhcufi66pYmUm7d.BfZsIUITJ1mYO4JgnQkTDC/SVucPAB6",
        "api_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGVzdF9hY2NvdW50QGdtYWlsLmNvbSIsImlhdCI6MTU5NDM4OTEwNn0.sR_67iAfSgKJKzhCTsehSuyqpr7qxCvEhjRk48OOPzc",
        "__v": 0
    }
}
```

## Error Response

**Condition**: Email already exists

**Code**: `400 Bad Request`

**Content**: 

```json
{
    "status": 400,
    "message": "Email already exists."
}
```
