# 🌐 FinalExam Web Application – SompolC

เว็บแอปนี้ถูกพัฒนาขึ้นเพื่อแสดงข้อมูลส่วนตัว แนวทางการวิจัย และระบบการจัดการรายการอ้างอิง โดยใช้เทคโนโลยี **Docker Compose**, **JavaScript**, และ **PostgreSQL Database**

## 📌 URL โครงสร้างเว็บไซต์

1. **https://FinalExam.Your_domain/**
   - เมนูหลักที่ลิ้งไปยังหน้ารองต่างๆ
   - แสดงชื่อและรหัสนักศึกษา
   - ลิ้งไปยัง GitHub ที่เก็บ Source Code ของ Assignment

2. **https://FinalExam.Your_domain/about**
   - ข้อมูลส่วนตัวนักศึกษา
   - รูปภาพและรายละเอียดชีวประวัติ

3. **https://FinalExam.Your_domain/myresearch**
   - สรุปแนวทางการวิจัย (แสดงแบบ Static)
   - ส่วนท้ายแสดงรายการอ้างอิงตามรูปแบบ IEEE พร้อมลิ้งเปิดอ่านไฟล์ PDF จากฐานข้อมูล

4. **https://FinalExam.Your_domain/reference**
   - ระบบจัดการรายการอ้างอิง:
     - เพิ่ม / แก้ไข / ลบ รายการ
     - รายการประกอบด้วยชื่อเพเปอร์ & ลิ้ง PDF (จาก URL หรือไฟล์ที่ upload)
     - เชื่อมต่อฐานข้อมูล PostgreSQL

## 🛠 เทคโนโลยีที่ใช้

| เทคโนโลยี        | จุดประสงค์                     |
|------------------|--------------------------------|
| Docker Compose   | รัน Web และ PostgreSQL         |
| PostgreSQL DB    | จัดเก็บรายการอ้างอิง           |
| JavaScript/Node  | สร้าง Web App และ API          |
| HTML/CSS         | สร้างหน้า Landing และหน้ารอง   |

## 📁 โครงสร้างโปรเจกต์

