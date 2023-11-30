# Message API


- [Get Message](#get-message)
- [Send Message](#send-message)

## `Get Message`

*URL*:
GET `BASE_URL/v1/chat`

*HEADERS*

{
  "Authorization": "Bearer $token"
}

*REQUEST BODY*

| Field        | Type      | Info                                                      |
| ------------ | ----------|---------------------------------------------------------- |
| `id`         | Required  | UserID                                                    |

*Example Response*

{
  "status": 200,
  "message": "Success get message data",
  "data": [
    {
      "id": "73e7f7aa-4b4b-46dd-aec4-b100bd7c1f94",
      "createdAt": "2023-11-04T01:41:11.850Z",
      "sender": {
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
      "receiver": {
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
      "chat": [
        {
          "id": "e5bd5d74-7522-4748-9171-a76bc790efae",
          "createdAt": "2023-11-04T01:41:42.605Z",
          "content": "Hola",
          "sender": {
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
          "id": "c5a9a4f4-4256-47fa-aa3c-101c050fd551",
          "createdAt": "2023-11-05T05:55:56.287Z",
          "content": "Alooo",
          "sender": {
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
          "id": "f519eb72-a60a-442b-9c26-e32c5c4e1d05",
          "createdAt": "2023-11-18T05:27:08.891Z",
          "content": "gg gemink  bro",
          "sender": {
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
          "id": "f7cc8cf8-df17-4fb0-8e0b-40ff4874b0f4",
          "createdAt": "2023-11-18T05:28:20.742Z",
          "content": "gg gemink bray",
          "sender": {
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
          "id": "cdbe69da-32bf-4e09-ba27-19b0cc3d7565",
          "createdAt": "2023-11-19T02:12:59.537Z",
          "content": "hola",
          "sender": {
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
          "id": "16f8ba6a-f503-4c7d-9e18-3f17ea64475b",
          "createdAt": "2023-11-19T02:14:26.877Z",
          "content": "halo",
          "sender": {
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
        }
      ]
    }
  ]
}

## `Send Message`

*URL*:
POST `BASE_URL/v1/chat`

*HEADERS*

json
{
  "Authorization": "Bearer $token"
}


*REQUEST BODY*

| Field        | Type      | Info                                                      |
| ------------ | ----------|---------------------------------------------------------- |
| `id`         | Required  | UserID                                                    |
| `messageId`  | Required  | MessageID                                                 |
| `content`    | Required  | Message Content (input user)                              |



*Example Response*

json
{
  "status": 201,
  "message": "Success send message"
}
