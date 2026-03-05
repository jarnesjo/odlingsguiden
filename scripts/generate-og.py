"""Generera OG-bild varianter v3 - bättre proportioner."""
import io
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import cairosvg

BASE = "/Users/jarnesjo/code/jarnesjo/odlingsguiden"
SPROUT = f"{BASE}/public/brand/symbol-sprout.svg"
LOGO = f"{BASE}/public/brand/lilla-bosgarden/lillabosgarden-vit-rak.svg"
W, H = 1200, 630

# Fonts
def load_font(paths, size):
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except:
            continue
    return ImageFont.load_default(size)

fraunces = ["/Users/jarnesjo/Library/Fonts/Fraunces-Bold.ttf",
            f"{BASE}/node_modules/@fontsource/fraunces/files/fraunces-latin-700-normal.woff"]
lora = ["/Users/jarnesjo/Library/Fonts/Lora-Regular.ttf",
        f"{BASE}/node_modules/@fontsource/lora/files/lora-latin-400-normal.woff"]

# Bättre proportioner: 58/26 = 2.2:1 (närmare appens 2:1)
font_title = load_font(fraunces, 58)
font_tagline = load_font(lora, 26)
font_small = load_font(lora, 18)

LIGHT_GREEN = (140, 190, 140)
WHITE = (255, 255, 255)

def crop_bg(path, vertical_bias=0.5, zoom_out=1.0):
    """Crop med vertical_bias: 0=toppen, 0.5=mitten, 1=botten.
    zoom_out < 1.0 visar mer av bilden (padding med mörk bakgrund)."""
    bg = Image.open(path)
    ratio = W / H
    bg_ratio = bg.width / bg.height
    if bg_ratio > ratio:
        new_w = int(bg.height * ratio)
        left = (bg.width - new_w) // 2
        bg = bg.crop((left, 0, left + new_w, bg.height))
    else:
        new_h = int(bg.width / ratio)
        max_top = bg.height - new_h
        top = int(max_top * vertical_bias)
        bg = bg.crop((0, top, bg.width, top + new_h))
    if zoom_out < 1.0:
        # Skala ner bilden och centrera på mörk bakgrund
        scaled_w = int(W * zoom_out)
        scaled_h = int(H * zoom_out)
        scaled = bg.resize((scaled_w, scaled_h), Image.LANCZOS)
        canvas = Image.new("RGB", (W, H), (30, 35, 28))
        canvas.paste(scaled, ((W - scaled_w) // 2, (H - scaled_h) // 2))
        return canvas
    return bg.resize((W, H), Image.LANCZOS)

def add_overlay(bg, opacity=170):
    bg = bg.filter(ImageFilter.GaussianBlur(radius=2))
    overlay = Image.new("RGBA", (W, H), (30, 35, 28, opacity))
    bg = bg.convert("RGBA")
    return Image.alpha_composite(bg, overlay)

def render_sprout(size=120):
    png = cairosvg.svg2png(url=SPROUT, output_width=size, output_height=size)
    img = Image.open(io.BytesIO(png)).convert("RGBA")
    return ImageEnhance.Brightness(img).enhance(2.5)

def render_logo(height=30):
    png = cairosvg.svg2png(url=LOGO, output_height=height)
    return Image.open(io.BytesIO(png)).convert("RGBA")

def add_footer(bg, draw):
    logo = render_logo()
    bg.paste(logo, (40, H - logo.height - 30), logo)
    url_text = "lillabosgarden.se"
    url_bbox = draw.textbbox((0, 0), url_text, font=font_small)
    url_w = url_bbox[2] - url_bbox[0]
    draw.text((W - url_w - 40, H - 50), url_text, fill=(255, 255, 255, 150), font=font_small)

tagline_text = "Allt du beh\u00f6ver veta, en gr\u00f6da i taget"

def make_inline(bg_path, output_path, vertical_bias=0.5, rotate=False, zoom_out=1.0):
    """Generera inline-variant med bättre proportioner."""
    bg = crop_bg(bg_path, vertical_bias=vertical_bias, zoom_out=zoom_out)
    if rotate:
        bg = bg.rotate(180)
    bg = add_overlay(bg, opacity=170)
    draw = ImageDraw.Draw(bg)

    title_bbox = draw.textbbox((0, 0), "Odlingsguiden", font=font_title)
    title_h = title_bbox[3] - title_bbox[1]
    title_w = title_bbox[2] - title_bbox[0]
    tag_bbox = draw.textbbox((0, 0), tagline_text, font=font_tagline)
    tag_h = tag_bbox[3] - tag_bbox[1]

    # Grodd proportionell till textblocket
    sprout_h = title_h + 14 + tag_h
    sprout = render_sprout(sprout_h)

    gap = 20
    total_w = sprout_h + gap + title_w
    start_x = (W - total_w) // 2
    text_y = (H - title_h - 14 - tag_h) // 2
    sprout_y = text_y - 4

    bg.paste(sprout, (start_x, sprout_y), sprout)
    draw = ImageDraw.Draw(bg)
    text_x = start_x + sprout_h + gap
    draw.text((text_x, text_y), "Odlingsguiden", fill=WHITE, font=font_title)
    draw.text((text_x, text_y + title_h + 10), tagline_text, fill=LIGHT_GREEN, font=font_tagline)

    add_footer(bg, draw)
    bg.convert("RGB").save(output_path, "JPEG", quality=90)
    print(f"Saved: {output_path}")


# V5: Odlingar - inline, bättre proportioner
make_inline(
    f"{BASE}/public/images/lilla-bosgarden-odlingar.jpeg",
    f"{BASE}/public/brand/og-image-v5-odlingar-inline.jpg",
    vertical_bias=0.5,
    rotate=True,
)

# V5b: Rotfrukter - inline, centrerad crop (visar mer av korgen)
make_inline(
    f"{BASE}/public/images/korg-med-rotfrukter-fran-lilla-bosgarden.jpeg",
    f"{BASE}/public/brand/og-image-v5-rotfrukter-inline.jpg",
    vertical_bias=0.5,
)

# V5c: Grönsakskasse - inline, bättre proportioner, mer kasse (som V1-cropen)
make_inline(
    f"{BASE}/public/images/gronsakskasse.jpeg",
    f"{BASE}/public/brand/og-image-v5-kasse-inline.jpg",
    vertical_bias=0.85,
)

# V5d: Grönsakskasse med påsar - inline, balans kasse/grönsaker
make_inline(
    f"{BASE}/public/images/gronsakskasse.jpeg",
    f"{BASE}/public/brand/og-image-v5-kasse-darker-inline.jpg",
    vertical_bias=0.5,
)

print("\nDone! 4 variants generated.")
