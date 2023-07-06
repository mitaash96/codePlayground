from PIL import Image

jpg_files = [
    r"C:\Users\paulm\Downloads\LOA_CTS_p1.jpg",
    r"C:\Users\paulm\Downloads\LOA_CTS_p2.jpg",
]
pdf_path = r"C:\Users\paulm\Downloads\LOA_CTS.pdf"

images = [Image.open(jpg) for jpg in jpg_files]

images[-1].save(pdf_path, save_all=True, append_images=images[:-1])
