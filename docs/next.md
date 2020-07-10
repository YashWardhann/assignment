# Get Next Integer

Gets the user's next integer  

**URL**: `/api/next`

**Method**: `GET`

**Auth Required**: `YES`

**Sample Header**:
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
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
        "integer": 10002,
        "_id": "5f087272515b870017705f4e",
        "api_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        "__v": 0
    }
}
```