from PIL import Image, ImageDraw, ImageFont
import os

# Đảm bảo thư mục tồn tại
output_dir = "public/timeline_img"
os.makedirs(output_dir, exist_ok=True)

# Cấu hình chung
width, height = 1200, 800
font_size = 40
small_font_size = 24

# Phần I: Tư tưởng Hồ Chí Minh
img1 = Image.new('RGB', (width, height), color=(20, 128, 128))  # Teal
draw1 = ImageDraw.Draw(img1)

# Gradient effect với hình chữ nhật màu
for i in range(height):
    ratio = i / height
    r = int(20 + (70 * ratio))
    g = int(128 + (20 * ratio))
    b = int(128 + (50 * ratio))
    draw1.line([(0, i), (width, i)], fill=(r, g, b))

# Thêm text
try:
    font = ImageFont.truetype("arial.ttf", font_size)
    small_font = ImageFont.truetype("arial.ttf", small_font_size)
except:
    font = ImageFont.load_default()
    small_font = ImageFont.load_default()

draw1.text((100, 300), "I. Tư tưởng Hồ Chí Minh", fill=(255, 255, 255), font=font)
draw1.text((100, 400), "Đảng trong sạch, Nhà nước của dân", fill=(200, 255, 255), font=small_font)
draw1.ellipse([800, 200, 1050, 450], outline=(255, 255, 255), width=3)
img1.save(os.path.join(output_dir, "intro1.png"))
print("✅ Tạo intro1.png thành công")

# Phần II: Khái niệm tham nhũng
img2 = Image.new('RGB', (width, height), color=(220, 100, 20))  # Orange-Red
draw2 = ImageDraw.Draw(img2)

for i in range(height):
    ratio = i / height
    r = int(220 - (50 * ratio))
    g = int(100 + (30 * ratio))
    b = int(20 + (80 * ratio))
    draw2.line([(0, i), (width, i)], fill=(r, g, b))

draw2.text((100, 300), "II. Tham nhũng theo tư tưởng HCM", fill=(255, 255, 255), font=font)
draw2.text((100, 400), "'Giặc nội xâm' - Lấy của công vào việc tư", fill=(255, 200, 150), font=small_font)
draw2.rectangle([800, 200, 1050, 450], outline=(255, 255, 255), width=3)
img2.save(os.path.join(output_dir, "intro2.png"))
print("✅ Tạo intro2.png thành công")

# Phần III: Nhà nước của dân
img3 = Image.new('RGB', (width, height), color=(34, 139, 34))  # Dark Green
draw3 = ImageDraw.Draw(img3)

for i in range(height):
    ratio = i / height
    r = int(34 + (40 * ratio))
    g = int(139 + (60 * ratio))
    b = int(34 + (100 * ratio))
    draw3.line([(0, i), (width, i)], fill=(r, g, b))

draw3.text((100, 300), "III. Nhà nước của dân, do dân, vì dân", fill=(255, 255, 255), font=font)
draw3.text((100, 400), "Bao nhiêu quyền hạn đều là của dân", fill=(200, 255, 200), font=small_font)
# Vẽ hình người (đơn giản)
draw3.ellipse([850, 200, 950, 300], fill=(255, 255, 255))
draw3.rectangle([870, 310, 930, 450], fill=(255, 255, 255))
img3.save(os.path.join(output_dir, "intro3.png"))
print("✅ Tạo intro3.png thành công")

# Phần IV: Tham nhũng - nguy cơ
img4 = Image.new('RGB', (width, height), color=(200, 40, 80))  # Red-Pink
draw4 = ImageDraw.Draw(img4)

for i in range(height):
    ratio = i / height
    r = int(200 - (80 * ratio))
    g = int(40 + (20 * ratio))
    b = int(80 + (100 * ratio))
    draw4.line([(0, i), (width, i)], fill=(r, g, b))

draw4.text((100, 300), "IV. Tham nhũng - Nguy cơ đe dọa", fill=(255, 255, 255), font=font)
draw4.text((100, 400), "Giặc nội xâm phá hoại từ bên trong", fill=(255, 150, 150), font=small_font)
# Vẽ biểu tượng cảnh báo
draw4.polygon([(900, 220), (950, 350), (850, 350)], outline=(255, 255, 255), width=3)
draw4.text((900, 290), "!", fill=(255, 255, 255), font=font)
img4.save(os.path.join(output_dir, "intro4.png"))
print("✅ Tạo intro4.png thành công")

# Phần V: Yêu cầu cấp bách
img5 = Image.new('RGB', (width, height), color=(100, 40, 140))  # Purple
draw5 = ImageDraw.Draw(img5)

for i in range(height):
    ratio = i / height
    r = int(100 + (60 * ratio))
    g = int(40 + (80 * ratio))
    b = int(140 - (40 * ratio))
    draw5.line([(0, i), (width, i)], fill=(r, g, b))

draw5.text((100, 280), "V. Yêu cầu cấp bách", fill=(255, 255, 255), font=font)
draw5.text((100, 380), "Chỉnh đốn Đảng • Kiểm soát quyền lực", fill=(200, 150, 255), font=small_font)
draw5.text((100, 430), "Phát huy vai trò nhân dân", fill=(200, 150, 255), font=small_font)
# Vẽ các điểm
draw5.ellipse([800, 250, 850, 300], fill=(255, 255, 100))
draw5.ellipse([900, 250, 950, 300], fill=(255, 255, 100))
draw5.ellipse([1000, 250, 1050, 300], fill=(255, 255, 100))
img5.save(os.path.join(output_dir, "intro5.png"))
print("✅ Tạo intro5.png thành công")

print("\n✨ Đã tạo thành công 5 ảnh PNG:")
print("   - intro1.png (I. Tư tưởng Hồ Chí Minh)")
print("   - intro2.png (II. Khái niệm tham nhũng)")
print("   - intro3.png (III. Nhà nước của dân)")
print("   - intro4.png (IV. Tham nhũng - nguy cơ)")
print("   - intro5.png (V. Yêu cầu cấp bách)")
