import os
import requests

# 저장할 로컬 디렉토리
SAVE_DIR = "./Users/imsunjae/Documents/GitHub/gorilla51_framer/arpeggio.framer.website"
os.makedirs(SAVE_DIR, exist_ok=True)

# 다운로드할 .mjs 링크 리스트
urls = [
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-5XG76WEH.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-Z5PNMCM7.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-RL5E2GBA.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-A3IIQ6X3.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-HZL4YIMB.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-K3DJB6LH.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-XW7AWP4U.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-NT66AP4B.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-X4PHJ7MQ.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-QJU3B2HE.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-H4YRIPBY.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-QTVK6HLP.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-H6GU6JGP.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-DEQSPWZG.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-SPINAU55.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-TVZRU6SD.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-CGWXMN7Q.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-J6OIRZ2V.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-FNWNVS7D.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-IW5URUB4.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-42U43NKG.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/yx-944-Joqh3P6qTvpdJg1sZ1nMRNwN9qeE99_dBj98.AJBKQFFI.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-4HQROK5C.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-ZPGIHODC.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-DJN5BWXW.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-NV23ZGGQ.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-BGOARGBX.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-AOTAJPJ2.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-5ZL2BBJX.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-IW5C7LHO.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-BZQNOJNN.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-2EWZWWCU.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-IMQ7HU5Y.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-ATLOQQWM.mjs",
    "https://framerusercontent.com/sites/EkfVtDpGRyOLbm2HsLyR4/chunk-M42USZN7.mjs"
]

for url in urls:
    filename = url.split("/")[-1]
    path = os.path.join(SAVE_DIR, filename)

    try:
        response = requests.get(url)
        response.raise_for_status()
        with open(path, "wb") as f:
            f.write(response.content)
        print(f"✅ 저장 완료: {filename}")
    except Exception as e:
        print(f"❌ 실패: {filename} → {e}")