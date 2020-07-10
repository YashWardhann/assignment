# Add Comment

Add comment to an image

**URL**: `/api/comment`

**Method**: `POST`

**PARAMS**: `image_id` (Public ID of the image), `comment` (Comment by user)

**Auth Required**: `NO`

**Permission Required**: `None`

**Sample Payload**:
```json
{
    "image_id": "PUBLIC_IMG_ID", 
    "comment": "YOUR_COMMENT"
}
```
**NOTE**: Public image ID is available from /api/images


## Success Response

**Condition**: Comment added

**Code**: `200 OK`

**Content**: 

```json
{
    "status": 200,
    "message": "Comment has been added",
    "data": {
        "_id": "5eef60ec1d65d624a4e0bd57",
        "image_id": "g6pbmq5oppz1fx4nh4vq",
        "comment": "TEST COMMENT",
        "timestamp": "2020-06-21T13:30:20.284Z",
        "__v": 0
    }
}
```

## Error Response

**Condition**: Comment not provided

**Code**: `400 Bad Request`

**Content**: 

```json
{
    "status": 400,
    "message": "Comment not provided!"
}
```
#### OR 
**Condition**: Image not found

**Code**: `400 Bad Request`

**Content**: 
```json
{
    "status": 400,
    "message": "No images found"
}
```
