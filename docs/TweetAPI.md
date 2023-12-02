# Tweet API


- [Get Tweet](#get-tweet)
- [Get Tweet By ID](#get-tweet-by-id)
- [Create Tweet](#create-tweet)
- [Update Tweet](#update-tweet)
- [Delete Tweet](#delete-tweet)

## `Get Tweet`

*URL*:
GET `BASE_URL/v1/tweet`

*HEADERS*

```JSON
{
  "Authorization": "Bearer $token"
}
```
*Example Response*

```JSON
{
"status": 200,
  "message": "Success get tweet data",
  "data": [
    {
      "id": "e88dd985-e788-41ff-b24b-13d79bc51300",
      "createdAt": "2023-11-12T10:12:45.323Z",
      "updatedAt": "2023-11-17T08:12:20.446Z",
      "isUpdated": false,
      "content": "waikwok",
      "postedBy": {
        "id": "e91e0adc-e3de-449f-970d-de0b44b28299",
        "email": "haris1922.hmh@gmail.com",
        "raw_user_meta_data": {
          "iss": "https://accounts.google.com",
          "sub": "105688319108169713833",
          "name": "Haris mauladi, 12",
          "email": "haris1922.hmh@gmail.com",
          "picture": "https://lh3.googleusercontent.com/a/ACg8ocIpIpoZ6Sa_MqD6nm1fFYKxIEpLyxmzlHlS5t7esbiZ9Xo=s96-c",
          "full_name": "Haris mauladi, 12",
          "user_name": "harismauladi",
          "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocIpIpoZ6Sa_MqD6nm1fFYKxIEpLyxmzlHlS5t7esbiZ9Xo=s96-c",
          "provider_id": "105688319108169713833",
          "email_verified": true,
          "phone_verified": false,
          "preferred_username": "harismauladi"
        }
      },
      "commentBy": [],
      "likesBy": [
        {
          "id": "fb668db7-e4f5-4dd3-ae00-003456692f9a",
          "createdAt": "2023-10-28T14:52:36.000Z",
          "user": {
            "id": "e91e0adc-e3de-449f-970d-de0b44b28299",
            "email": "haris1922.hmh@gmail.com",
            "raw_user_meta_data": {
              "iss": "https://accounts.google.com",
              "sub": "105688319108169713833",
              "name": "Haris mauladi, 12",
              "email": "haris1922.hmh@gmail.com",
              "picture": "https://lh3.googleusercontent.com/a/ACg8ocIpIpoZ6Sa_MqD6nm1fFYKxIEpLyxmzlHlS5t7esbiZ9Xo=s96-c",
              "full_name": "Haris mauladi, 12",
              "user_name": "harismauladi",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocIpIpoZ6Sa_MqD6nm1fFYKxIEpLyxmzlHlS5t7esbiZ9Xo=s96-c",
              "provider_id": "105688319108169713833",
              "email_verified": true,
              "phone_verified": false,
              "preferred_username": "harismauladi"
            }
          }
        },
        {
          "id": "e4dca538-6ffe-4b86-a50d-b7558f77e095",
          "createdAt": "2023-11-01T14:17:14.147Z",
          "user": {
            "id": "7a9ea8a4-484f-4920-b808-0ebe26b5b6aa",
            "email": "haris123.hmh@gmail.com",
            "raw_user_meta_data": {
              "iss": "https://accounts.google.com",
              "sub": "108132092967444739061",
              "name": "Haris M",
              "email": "haris123.hmh@gmail.com",
              "picture": "https://lh3.googleusercontent.com/a/ACg8ocILGbkCPbsFEViTnFI9D0kWS0Jn8Ly_jI-oWo8EMzCm2Q=s96-c",
              "full_name": "Haris M",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocILGbkCPbsFEViTnFI9D0kWS0Jn8Ly_jI-oWo8EMzCm2Q=s96-c",
              "provider_id": "108132092967444739061",
              "email_verified": true,
              "phone_verified": false
            }
          }
        },
        {
          "id": "be3ad0bb-bbf7-483c-bfa8-33d52a37f673",
          "createdAt": "2023-11-19T03:35:35.234Z",
          "user": {
            "id": "3fb4cef6-67dc-4cee-b0dd-dcd81575bd41",
            "email": "milyasa2468@gmail.com",
            "raw_user_meta_data": {}
          }
        }
      ],
      "retweetBy": [],
      "shareBy": []
    }]
}
```

## `Get Tweet By ID`

*URL*:
GET `BASE_URL/v1/tweet/:id`

*HEADERS*

```JSON
{
  "Authorization": "Bearer $token"
}
```

*REQUEST PARAMS*

| Field        | Type      | Info                                                      |
| ------------ | ----------|---------------------------------------------------------- |
| `id`         | Required  | TweetID                                                   |



*Example Response*

```JSON
{
  "status": 200,
  "message": "Success get detail tweet",
  "data": {
    "id": "8d2875b3-fc48-458d-a612-092ee8aff0a4",
    "createdAt": "1970-01-01T00:00:00.000Z",
    "updatedAt": "2023-11-19T03:28:58.521Z",
    "isUpdated": true,
    "content": "kamu disana",
    "postedBy": {
      "id": "7a9ea8a4-484f-4920-b808-0ebe26b5b6aa",
      "email": "haris123.hmh@gmail.com",
      "raw_user_meta_data": {
        "iss": "https://accounts.google.com",
        "sub": "108132092967444739061",
        "name": "Haris M",
        "email": "haris123.hmh@gmail.com",
        "picture": "https://lh3.googleusercontent.com/a/ACg8ocILGbkCPbsFEViTnFI9D0kWS0Jn8Ly_jI-oWo8EMzCm2Q=s96-c",
        "full_name": "Haris M",
        "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocILGbkCPbsFEViTnFI9D0kWS0Jn8Ly_jI-oWo8EMzCm2Q=s96-c",
        "provider_id": "108132092967444739061",
        "email_verified": true,
        "phone_verified": false
      }
    },
    "commentBy": [
      {
        "id": "1ff187f8-0e20-4a74-91da-1840d14be7fa",
        "createdAt": "2023-11-19T02:03:03.878Z",
        "content": "test comment",
        "user": {
          "id": "e91e0adc-e3de-449f-970d-de0b44b28299",
          "email": "haris1922.hmh@gmail.com",
          "raw_user_meta_data": {
            "iss": "https://accounts.google.com",
            "sub": "105688319108169713833",
            "name": "Haris mauladi, 12",
            "email": "haris1922.hmh@gmail.com",
            "picture": "https://lh3.googleusercontent.com/a/ACg8ocIpIpoZ6Sa_MqD6nm1fFYKxIEpLyxmzlHlS5t7esbiZ9Xo=s96-c",
            "full_name": "Haris mauladi, 12",
            "user_name": "harismauladi",
            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocIpIpoZ6Sa_MqD6nm1fFYKxIEpLyxmzlHlS5t7esbiZ9Xo=s96-c",
            "provider_id": "105688319108169713833",
            "email_verified": true,
            "phone_verified": false,
            "preferred_username": "harismauladi"
          }
        }
      }
    ],
    "likesBy": [
      {
        "id": "6b82ab72-9fb1-4da8-8f84-a05190c149f7",
        "createdAt": "2023-11-19T02:00:50.348Z",
        "user": {
          "id": "e91e0adc-e3de-449f-970d-de0b44b28299",
          "email": "haris1922.hmh@gmail.com",
          "raw_user_meta_data": {
            "iss": "https://accounts.google.com",
            "sub": "105688319108169713833",
            "name": "Haris mauladi, 12",
            "email": "haris1922.hmh@gmail.com",
            "picture": "https://lh3.googleusercontent.com/a/ACg8ocIpIpoZ6Sa_MqD6nm1fFYKxIEpLyxmzlHlS5t7esbiZ9Xo=s96-c",
            "full_name": "Haris mauladi, 12",
            "user_name": "harismauladi",
            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocIpIpoZ6Sa_MqD6nm1fFYKxIEpLyxmzlHlS5t7esbiZ9Xo=s96-c",
            "provider_id": "105688319108169713833",
            "email_verified": true,
            "phone_verified": false,
            "preferred_username": "harismauladi"
          }
        }
      }
    ],
    "retweetBy": [],
    "shareBy": []
  }
}
```
## `Create Tweet`

*URL*:
POST `BASE_URL/v1/tweet`

*HEADERS*

```JSON
{
  "Authorization": "Bearer $token"
}
```

*REQUEST BODY*

| Field        | Type      | Info                                                      |
| ------------ | ----------|---------------------------------------------------------- |
| `id`         | Required  | UserID                                                    |
| `content`    | Required  | Tweet Content (input user)                                |


*Example Response*

json
{ status: 201, message: 'Success create new tweet' }

## `Update Tweet`

*URL*:
PUT `BASE_URL/v1/tweet`

*HEADERS*

```JSON
{
  "Authorization": "Bearer $token"
}
```

*REQUEST BODY*

| Field        | Type      | Info                                                      |
| ------------ | ----------|---------------------------------------------------------- |
| `id`         | Required  | TweetID                                                   |
| `content`    | Required  | Tweet Content (input user)                                |


*Example Response*

```JSON
{ status: 200, message: 'Success update data tweet' }
```
## `Delete Tweet`

*URL*:
DELETE `BASE_URL/v1/tweet`

*HEADERS*

```JSON
{
  "Authorization": "Bearer $token"
}
```

*REQUEST BODY*

| Field        | Type      | Info                                                      |
| ------------ | ----------|---------------------------------------------------------- |
| `id`         | Required  | TweetID                                                   |



*Example Response*

```JSON
{ status: 200, message: 'Success delete tweet' }
```
