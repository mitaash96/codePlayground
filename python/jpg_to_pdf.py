from PIL import Image
import os
from fpdf import FPDF

def convert_images_to_pdf(folder_path, output_path):
    image_list = []
    for filename in os.listdir(folder_path):
        if filename.endswith(".jpg"):
            image_list.append(filename)

    if not image_list:
        print("No JPG files found in the folder.")
        return

    pdf = FPDF()

    for image in image_list:
        image_path = os.path.join(folder_path, image)
        img = Image.open(image_path)
        if img.mode != "RGB":
            img = img.convert("RGB")
        pdf.add_page()
        pdf.image(image_path, 0, 0, pdf.w, pdf.h)

    pdf.output(output_path, "F")
    print("PDF created successfully!")

# Example usage
folder_path = r"C:\Users\paulm\Downloads\Gratuity Undertaking, PF & Pension\signed_docs"
output_path = "signed_separation_2300414.pdf"
output_path = os.path.join(folder_path, output_path)
convert_images_to_pdf(folder_path, output_path)
