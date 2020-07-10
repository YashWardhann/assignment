# Reset Integer

Resets the user's current integer  

**URL**: `/api/current`

**Method**: `PUT`

**Auth Required**: `YES`

**Sample Header**:
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}

```

**Sample Payload**:
```json
{
    "current": 0
}

```

## Success Response

**Condition**: 

**Code**: `201 Created`

**Content**: 

```json
{
    "status": 201,
    "data": {
        "integer": 0,
        "_id": "5f087272515b870017705f4e",
        "api_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGVzdF9hY2NvdW50QGdtYWlsLmNvbSIsImlhdCI6MTU5NDM4OTEwNn0.sR_67iAfSgKJKzhCTsehSuyqpr7qxCvEhjRk48OOPzc",
        "__v": 0
    }
}
```
