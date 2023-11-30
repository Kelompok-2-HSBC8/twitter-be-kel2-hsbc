# User API


- [Get User](#get-user)
- [Get User By Id](#get-user-by-id)

## `Get User`

*URL*:
GET `BASE_URL/v1/user`

*HEADERS*

json
{
  "Authorization": "Bearer $token"
}

*Example Response*

json
{
  "status": 200,
  "message": "Success",
  "data": [
    {
      "instance_id": "00000000-0000-0000-0000-000000000000",
      "id": "7a9ea8a4-484f-4920-b808-0ebe26b5b6aa",
      "aud": "authenticated",
      "role": "authenticated",
      "email": "haris123.hmh@gmail.com",
      "encrypted_password": "",
      "email_confirmed_at": "2023-10-21T12:42:58.890Z",
      "invited_at": null,
      "confirmation_token": "",
      "confirmation_sent_at": null,
      "recovery_token": "",
      "recovery_sent_at": null,
      "email_change_token_new": "",
      "email_change": "",
      "email_change_sent_at": null,
      "last_sign_in_at": "2023-11-27T13:55:18.288Z",
      "raw_app_meta_data": {
        "provider": "google",
        "providers": [
          "google"
        ]
      },
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
      },
      "is_super_admin": null,
      "created_at": "2023-10-21T12:42:58.884Z",
      "updated_at": "2023-11-27T13:55:18.290Z",
      "phone": null,
      "phone_confirmed_at": null,
      "phone_change": "",
      "phone_change_token": "",
      "phone_change_sent_at": null,
      "confirmed_at": "2023-10-21T12:42:58.890Z",
      "email_change_token_current": "",
      "email_change_confirm_status": 0,
      "banned_until": null,
      "reauthentication_token": "",
      "reauthentication_sent_at": null,
      "is_sso_user": false,
      "deleted_at": null
    }]
}

## `Get User By ID`

*URL*:
GET `BASE_URL/v1/user/:id`

*HEADERS*

json
{
  "Authorization": "Bearer $token"
}


*REQUEST PARAMS*

| Field        | Type      | Info                                                      |
| ------------ | ----------|---------------------------------------------------------- |
| `id`         | Required  | UserID                                                   |



*Example Response*

json
{
  "status": 200,
  "message": "Success",
  "data": {
    "status": 200,
    "message": "Success",
    "data": {
      "instance_id": "00000000-0000-0000-0000-000000000000",
      "id": "e91e0adc-e3de-449f-970d-de0b44b28299",
      "aud": "authenticated",
      "role": "authenticated",
      "email": "haris1922.hmh@gmail.com",
      "encrypted_password": "$2a$10$hJl3nJuizJAlXgMhUw7TwOa3qPHw93vrEnAtGtqqjV0/zQlfbiOSO",
      "email_confirmed_at": "2023-10-21T07:13:40.302Z",
      "invited_at": null,
      "confirmation_token": "",
      "confirmation_sent_at": "2023-10-21T07:13:16.394Z",
      "recovery_token": "",
      "recovery_sent_at": null,
      "email_change_token_new": "",
      "email_change": "",
      "email_change_sent_at": null,
      "last_sign_in_at": "2023-11-28T13:52:01.807Z",
      "raw_app_meta_data": {
        "provider": "email",
        "providers": [
          "email",
          "github",
          "google"
        ]
      }
    }
  }
}