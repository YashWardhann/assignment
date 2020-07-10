# Get Integer

Gets the user's current integer  

**URL**: `/api/current`

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

**Code**: `200`

**Content**: 

```json
{
    "integer": 10001,
    "_id": "5f087272515b870017705f4e",
    "api_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "__v": 0
}
```