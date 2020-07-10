# Show Images

Displays the images in the cloud

**URL**: `/api/images`

**Method**: `GET`

**PARAMS**: `limit` (Number of images per page), `page` (Current page)

**Auth Required**: `NO`

**Permission Required**: `None`


## Success Response

**Condition**: Images found

**Code**: `200 OK`

**Content**: 

```json
{
    "status": 200,
    "images": [
        {
            "_id": "5eef2a7579e4d909809b70a8",
            "public_id": "h5tqsh6175ocvsprznoz",
            "url": "http://res.cloudinary.com/dpqw4iptt/image/upload/v1592732275/h5tqsh6175ocvsprznoz.png",
            "caption": "!!!!",
            "timestamp": "2020-06-21T09:37:55.000Z",
            "bytes": 609690,
            "__v": 0
        },
        {
            "_id": "5eef2ad3be63c539005be9d6",
            "public_id": "i6mbceclcsbxgckattnu",
            "url": "http://res.cloudinary.com/dpqw4iptt/image/upload/v1592732369/i6mbceclcsbxgckattnu.png",
            "caption": "!!!!",
            "timestamp": "2020-06-21T09:39:29.000Z",
            "bytes": 609690,
            "__v": 0
        }
    ],
    "currentPage": 3,
    "totalPages": 5
}
```

## Error Response

**Condition**: No images found (No images in database/Page number exceeded total pages)

**Code**: `404`

**Content**: 

```json
{
    "status": 404,
    "message": "No images found!"
}
```
