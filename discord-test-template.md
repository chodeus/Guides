# Discord test template

An updated version of the test template for media player posts in the Discord suggestions channel. It covers every column in the Tested Media Players table.

- New lines: `FEL` and `MEL` under HDR, plus a new section for `Hi10`, `ASS/SSA` and `PGS`. These still need example files.
- `Media Player Device` is split into `Device` and `Player/Product`, which match the table headers and Tautulli's **Player** and **Product** fields.
- `FLAC` is now `FLAC/PCM` to match the column, and the `DD/AC3` line has its colon back.
- Subtitle tests should include Tautulli's `SUBTITLE` line in the results.
- It's 2,275 characters, over Discord's 2,000-character limit without Nitro.

```text
Please use the following template to provide your test results to make it more uniform
Just replace the examples with your used devices and media files
If you didn't test a format, leave it blank or add Not Tested

--------------------------------------------------------------------------------------------

Which Devices used for the test
Device (Tautulli "Player"): Chromecast Google TV
Player/Product (Tautulli "Product"): Plex for Android (TV)
TV (Brand+model/type): LG OLED65CX6LA
Audio Setup: Samsung Q990B

Plex Server Version: Version 1.40.2.8395
Plex Client Version: 10.15.0.571
Kodi Version: x
Device Version: x

Media information
Which media files did you use for testing?
If you don't use the guide naming scheme, we will need links to the media info of those files so we can see which audio and HDR formats the file has

Tested Media Players table: <link to the new page>

HDR Formats
DV Profile 5: Fallout (2024) - S01E01 - The End [AMZN WEBDL-2160p][DV][EAC3 Atmos 5.1][h265]-FLUX
DV Profile 7: 1917 (2019) [Remux-2160p][DV HDR10Plus][TrueHD Atmos 7.1][HEVC]-FraMeSToR
DV Profile 8: Kung Fu Panda 4 (2024) [WEBDL-2160p][DV HDR10Plus][EAC3 Atmos 5.1][h265]-FLUX
FEL:
MEL:
HDR10: American Made (2017) [Bluray-2160p][HDR10][DTS-X 7.1][x265]-W4NK3R
HDR10+: The Contractor (2022) [Hybrid][Remux-2160p][HDR10Plus][DTS-HD MA 7.1][HEVC]-BLURANiUM

Audio Formats
TrueHD Atmos: 1917 (2019) [Remux-2160p][DV HDR10Plus][TrueHD Atmos 7.1][HEVC]-FraMeSToR
DTS X: American Made (2017) [Bluray-2160p][HDR10][DTS-X 7.1][x265]-W4NK3R
DD+ Atmos: Kung Fu Panda 4 (2024) [WEBDL-2160p][DV HDR10Plus][EAC3 Atmos 5.1][h265]-FLUX
TrueHD: Kill Bill Vol. 2 (2004) [Remux-1080p Proper][TrueHD 7.1][AVC]-TRiToN
DTS-HD MA: The Contractor (2022) [Hybrid][Remux-2160p][HDR10Plus][DTS-HD MA 7.1][HEVC]-BLURANiUM
FLAC/PCM: Convoy (1978) [Bluray-1080p][FLAC 2.0][x264]-CtrlHD
DD+/E-AC3: Road House (2024) [AMZN][WEBDL-2160p][HDR10Plus][EAC3 5.1][h265]-FLUX
DTS: Escape Plan 2 Hades (2018) [Bluray-1080p][DTS 5.1][x264]-BHDStudio
AAC: Dragon Ball Super (2015) - S05E01 - 077 - Lets Do It Grand Zeno! The Universes Best Tournament!! [HDTV-1080p][8bit][x264][AAC 2.0]-KaiDubs
DD/AC3: DOA Dead or Alive (2006) [Bluray-1080p][AC3 5.1][x264]-BHDStudio

Video and Subtitle Formats
Hi10:
ASS/SSA:
PGS:
```
