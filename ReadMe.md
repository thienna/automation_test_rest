# Ví dụ kiểm thử tự động sử dụng CodeCept và REST helper

Ứng dụng ví dụ được viết bằng [Sanic framework](https://github.com/huge-success/sanic)
quản lý việc thêm, tìm kiếm, đổi password của user

## Cài đặt

Clone repo này và sau đó chạy file main.py để dựng REST server thử nghiệm lắng nghe ở cổng 8000

```shell
$ git clone https://github.com/TechMaster/automation_test_rest.git
$ cd automation_test_rest
$ source venv/bin/activate
$ pip install -r requirements.txt
$ python main.py
```
Thử mở browser rồi truy cập vào http://localhost:8000/users xem danh sách users trả về

## Kiểm thử

Tạo mới một màn hình hay tab terminal, cài đặt phần mềm cần thiết cho CodeCept chạy
```shell
$ cd automation_test_rest\test
$ npm install
```

Giờ thì chạy lệnh để kiểm thử, đảm bảo bạn đang ở thư mục automation_test_rest\test
```shell
$ npx codeceptjs run --verbose
```

## Cấu hình
Toàn bộ phần unit test chỉ cần module codecept
```json
  "devDependencies": {
    "codeceptjs": "^2.3.5"
  },
```

Hãy để ý đến file cấu hình codecept.conf.js, phần helpers chỉ cần REST và ghi rõ endpoint là đủ, không cần các helper khác vì chúng ta tập trung kiểm thử REST
```json
exports.config = {
  tests: './*_test.js',
  helpers: {
    REST: {
      endpoint: 'http://localhost:8000'
   }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'webtest'  
}
```

### Các file test để ở đâu?

1. Các file kiểm thử luôn có đuôi _test.js. Quy ước được định ở thuộc tính test trong file codecept.conf.js
```json
tests: './*_test.js',
```

2. Chúng ta nên đánh số thứ tự chạy bằng số 01, 02, 03





