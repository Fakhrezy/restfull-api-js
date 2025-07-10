# REST API Project - User Management

Proyek REST API sederhana untuk manajemen user dengan dukungan MySQL dan MongoDB menggunakan Node.js dan Express.js.

## Instalasi

1. Clone repository ini
2. Install dependencies:

   ```bash
   npm install
   ```

3. Pastikan MySQL dan MongoDB sudah terinstall dan berjalan di sistem Anda

4. Konfigurasi koneksi database di folder `config/`:
   - `mysqlConfig.js` - untuk konfigurasi MySQL
   - `mongoConfig.js` - untuk konfigurasi MongoDB

## ▶ Menjalankan Server

```bash
node rest-api/server.js
```

Server akan berjalan di `http://localhost:3000`

## 🛠 API Endpoints

### MySQL Endpoints

- `GET /api/users/mysql-show` - Ambil semua user dari MySQL
- `POST /api/users/mysql-add` - Tambah user baru ke MySQL
- `PUT /api/users/mysql-edit/:id` - Update user di MySQL
- `DELETE /api/users/mysql-delete/:id` - Hapus user dari MySQL

### MongoDB Endpoints

- `GET /api/users/mongo-show` - Ambil semua user dari MongoDB
- `POST /api/users/mongo-add` - Tambah user baru ke MongoDB
- `PUT /api/users/mongo-edit/:id` - Update user di MongoDB
- `DELETE /api/users/mongo-delete/:id` - Hapus user dari MongoDB

## Testing dengan Postman

### 1. GET - Mengambil Semua User

#### MySQL

```
Method: GET
URL: http://localhost:3000/api/users/mysql-show
Headers:
  Content-Type: application/json
```

**contoh response:**

```json
[
	{
		"id": 1,
		"name": "nama",
		"email": "email@mail.com",
		"age": 25,
		"createdAt": "2024-01-01T00:00:00.000Z",
		"updatedAt": "2024-01-01T00:00:00.000Z"
	}
]
```

#### MongoDB

```
Method: GET
URL: http://localhost:3000/api/users/mongo-show
Headers:
  Content-Type: application/json
```

**Response:**

```json
[
	{
		"_id": "60d0fe4f5311236168a109ca",
		"name": "nama",
		"email": "email@mail.com",
		"age": 28,
		"__v": 0
	}
]
```

### 2. POST - Menambah User Baru

#### MySQL

```
Method: POST
URL: http://localhost:3000/api/users/mysql-add
Headers:
  Content-Type: application/json
```

**Body (raw JSON):**

```json
{
	"name": "name",
	"email": "email@mail.com",
	"age": 30
}
```



#### MongoDB

```
Method: POST
URL: http://localhost:3000/api/users/mongo-add
Headers:
  Content-Type: application/json
```

**Body (raw JSON):**

```json
{
	"name": "nama",
	"email": "email@mail.com",
	"age": 32
}
```

### 3. PUT - Update User

#### MySQL

```
Method: PUT
URL: http://localhost:3000/api/users/mysql-edit/1
Headers:
  Content-Type: application/json
```

**Body (raw JSON):**

```json
{
	"name": "nama Updated",
	"email": "email.updated@mail.com",
	"age": 26
}
```


#### MongoDB

```
Method: PUT
URL: http://localhost:3000/api/users/mongo-edit/60d0fe4f5311236168a109ca
Headers:
  Content-Type: application/json
```

**Body (raw JSON):**

```json
{
	"name": "nama Updated",
	"email": "email.updated@mail.com",
	"age": 29
}
```

### 4. DELETE - Hapus User

#### MySQL

```
Method: DELETE
URL: http://localhost:3000/api/users/mysql-delete/1
Headers:
  Content-Type: application/json
```

**Response:**

```json
{
	"message": "User deleted successfully"
}
```

#### MongoDB

```
Method: DELETE
URL: http://localhost:3000/api/users/mongo-delete/60d0fe4f5311236168a109ca
Headers:
  Content-Type: application/json
```

**Response:**

```json
{
	"message": "User deleted successfully"
}
```

## Struktur Database

### MySQL Table (users)

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  age INT NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME
);
```

### MongoDB Collection (users)

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  age: Number (required),
  __v: Number
}
```

## Catatan

1. **Port Default**: Server berjalan di port 3000
2. **Content-Type**: Selalu gunakan `application/json` untuk header
3. **ID Format**:
   - MySQL menggunakan ID numerik (1, 2, 3, ...)
   - MongoDB menggunakan ObjectId (24 karakter hex)
4. **Error Handling**: API akan mengembalikan status code yang sesuai:
   - 200: Success
   - 201: Created
   - 404: Not Found
   - 500: Internal Server Error

## 🔧 Collection Postman

Untuk memudahkan testing, bisa membuat collection di Postman dengan struktur folder:

```
REST API - User Management
├── MySQL
│   ├── GET All Users (MySQL)
│   ├── POST Add User (MySQL)
│   ├── PUT Update User (MySQL)
│   └── DELETE User (MySQL)
└── MongoDB
    ├── GET All Users (MongoDB)
    ├── POST Add User (MongoDB)
    ├── PUT Update User (MongoDB)
    └── DELETE User (MongoDB)
```

Pastikan untuk menyimpan environment variable di Postman:

- `base_url`: `http://localhost:3000`

Sehingga URL bisa ditulis sebagai: `{{base_url}}/api/users/mysql-show`
