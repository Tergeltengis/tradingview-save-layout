### 1. Save Chart Layout

**POST** `/1.1/charts`

Saves a new chart layout provided in the request body.

#### Request Headers

| Key          | Value                               |
| ------------ | ----------------------------------- |
| Content-Type | `application/x-www-form-urlencoded` |

#### Request Body

| Field     | Type     | Description                                             |
| --------- | -------- | ------------------------------------------------------- |
| `name`    | `string` | Name of the chart layout.                               |
| `content` | `string` | JSON string of chart layout configuration and metadata. |

---

### 2. Get Chart Layout

**GET** `/1.1/charts`

Retrieves a saved chart layout based on query parameters.

#### Query Parameters

| Parameter | Type     | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| `chart`   | `number` | _(Optional)_ The unique ID of the chart layout.  |
| `client`  | `string` | _(Optional)_ The client ID (used for filtering). |
| `user`    | `string` | _(Optional)_ The user ID (used for filtering).   |
