# this script will traverse the /public/images folder and generate/populate the photoMetaData.json file
# this eliminates the manual need to write the json objects and saves manual labor
# this does not need to be run every time, this is a one time run, or everytime there is a change in
# the images, or if new images are added. 

# from cProfile import label
import os
import json

IMAGE_FOLDER = "./public/images"
OUTPUT_FILE_PATH = "./data/photoMetaData.json"

location_map = {
    "YOS": {
        "label": "Yosemite Valley, California",
        "location": "Yosemite"
    },
    "ANC": {
        "label":"Anchorage, Alaska",
        "location": "Alaska"
    },
    "SEW": {
        "label":"Seward, Alaska",
        "location": "Alaska"
    },
    "DEN": {
        "label":"Denali National Park, Alaska",
        "location": "Alaska"
    },
    "TAH": {
        "label":"Lake Tahoe, California",
        "location": "Lake Tahoe"
    },
    "DTH": {
        "label":"Death Valley National Park, California",
        "location": "Death Valley"
    },
    "RAJ": {
        "label": "Rajasthan, India",
        "location":"Rajasthan"
    },
    "THL": {
        "label":"Phuket, Thailand",
        "location":"Thailand"
    },
    "SHV": {
        "label":"Shivneri, Maharashtra, India",
        "location":"Shivneri"
    },
    "MAN": {
        "label":"Manali, Himachal Pradesh, India",
        "location":"Manali"
    },
    "FLW": {
        "label": "Amongst the Wildflowers",
        "location": "Nature"
    },
    "HMP": {
        "label": "Hampi, Karnataka, India",
        "location": "Hampi"
    },
    "BGS": {
        "label": "Big Sur, California",
        "location": "Big Sur"
    },
    "SBR": {
        "label": "Santa Barbara, California",
        "location": "Santa Barbara"
    },
    "SHA": {
        "label": "Lake Shasta, California",
        "location": "Lake Shasta & Burney Falls"
    },
    "BUR": {
        "label": "Burney Falls, California",
        "location": "Lake Shasta & Burney Falls"
    },
    "PET": {
        "label": "Tail Tales",
        "location": "Furry Friends"
    },
    "SFO": {
        "label": "San Francisco, California",
        "location": "San Francisco"
    },
    "SEA": {
        "label": "Seattle, Washington",
        "location": "Seattle"
    },
    "MCH": {
        "label": "Michigan",
        "location": "Michigan"
    },
    "VAD": {
        "label": "Vadodara, Gujarat, India",
        "location": "Vadodara"
    },
    "LOA": {
        "label": "Los Angeles, California",
        "location": "Los Angeles"
    },
    "SDG": {
        "label": "San Diego, California",
        "location": "San Diego"
    },
    "COL": {
        "label": "Colorado",
        "location": "Colorado"
    },
    "PRB": {
        "label": "Paso Robles, California",
        "location": "Paso Robles"
    },
    "PIS": {
        "label": "Pismo Beach, California",
        "location": "Pismo Beach"
    },
    "SCZ": {
        "label": "Santa Cruz, California",
        "location": "Santa Cruz"
    },
    "TIA": {
        "label": "Tioga Pass, California",
        "location": "Tioga Pass"
    },
    "FBK": {
        "label": "Fairbanks, Alaska",
        "location": "Alaska"
    },

}

theme_map = {
    "MV": "Mountain Vistas",
    "AD": "Architectural Details",
    "CS": "Coastal Scenes",
    "SL": "Scenic Landscapes",
    "LV": "Lakeside Views",
    "DD": "Dust & Dunes",
    "CC": "Cityscapes",
    "FC": "Floral Closeups",
    "VR": "Visual Rhythm",
    "CF": "Cascading Falls",
    "LH": "Living Heritage",
    "FF": "Furry Friends",
    "CH": "Chasing Horizons"
}

def generate_filename(filename):
    name, ext = os.path.splitext(filename)
    parts = name.split("_")

    if len(parts) < 5:
        print(f"Skipping '{filename}' - invalid format")
        return None

    location_code, _, theme_code, is_gallery_flag, is_location_cover_flag = parts

    label = location_map.get(location_code)["label"]

    location = location_map.get(location_code)["location"]
    theme = theme_map.get(theme_code)

    if not location or not theme or not label:
        print("Skipping '{filename}' – unrecognized code(s)")
        return None

    return {
        "filename": filename, 
        "label": label,
        "location": location,
        "theme": [theme],
        "isGallery": is_gallery_flag == "T",
        "isLocationCover": is_location_cover_flag == "T",
        "title": "",
        "locationSlug": ""
    }

def main():
    print("Generating photo metadata...")

    # Load existing data if available
    if os.path.exists(OUTPUT_FILE_PATH):
        with open(OUTPUT_FILE_PATH, "r", encoding="utf-8") as f:
            existing_data = json.load(f)
    else:
        existing_data = []

    existing_filenames = {entry["filename"] for entry in existing_data}

    new_entries = []
    for filename in sorted(os.listdir(IMAGE_FOLDER)):
        if not filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            continue
        if filename in existing_filenames:
            continue

        entry = generate_filename(filename)
        if entry:
            new_entries.append(entry)

    if not new_entries:
        print("No new entries found. All caught up.")
        return

    combined = existing_data + new_entries

    os.makedirs(os.path.dirname(OUTPUT_FILE_PATH), exist_ok=True)
    with open(OUTPUT_FILE_PATH, "w", encoding="utf-8") as f:
        json.dump(combined, f, indent=2)
    
    print(f"Added {len(new_entries)} new entries to {OUTPUT_FILE_PATH}")

if __name__ == "__main__":
    main()