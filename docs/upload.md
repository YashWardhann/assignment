# Upload Image

Uploads an Image to the cloudinary cloud

**URL**: `/api/upload`

**Method**: `POST`

**Method**: `image` (Image file), `caption` (Caption entered by user)

**Auth Required**: `NO`

**Permission Required**: `None`

**Sample Payload**: 

```json
{
    "image": "YOUR_IMAGE.jpg",
    "caption": "YOUR_CAPTION"
}
```

## Success Response

**Condition**: Video uploaded to cloud

**Code**: `200 OK`

**Content**: 

```json
{
    "status": 200,
    "message": "Image has been uploaded!",
    "error": {
        "_id": "5eef60251d65d624a4e0bd56",
        "public_id": "u4awuyogbeyzmwnntfkm",
        "url": "http://res.cloudinary.com/dpqw4iptt/image/upload/v1592746018/u4awuyogbeyzmwnntfkm.png",
        "caption": "TEST CAPTION",
        "timestamp": "2020-06-21T13:26:58.000Z",
        "bytes": 609690,
        "__v": 0
    }
}
```

## Error Response

**Condition**: Image not found

**Code**: `400 Bad Request`

**Content**: 

```json
{
    "status": 400,
    "message": "Image resource not found."
}
```
#### OR 
**Condition**: Caption not found

**Code**: `400 Bad Request`

**Content**: 
```json
{
    "status": 404,
    "message": "An error has occured",
    "error": "Caption is required"
}
```
