# AegisRunner Starter Project

This starter Android project demonstrates a simple architecture for executing flows (JSON-defined scripts) on an Android device without any additional automation apps. Flows can perform actions like getting the device's location, sending data to web services, showing toasts/notifications, and launching the camera. The project includes a sample build pipeline for GitHub Actions that produces a debug APK.

## Structure

The project is organized as a typical Android app. Most of the interesting pieces live in:

- **app/src/main/java/com/example/aegisrunner/MainActivity.kt** – Main activity that loads flows and presents them.
- **app/src/main/assets/flows/** – Contains JSON files representing flows. Each flow has a name and a list of steps. Steps supported include obtaining the current location, making HTTP GET/POST requests, showing a toast, sending a notification, and launching the camera.

## Sample Flows

Two example flows are provided:

* `rb_log.json` – Posts a log entry with the current location to a configured Apps Script endpoint to record a red/blue (RB) co‑presence observation in a parking lot.
* `rb_seam_adj.json` – Posts a log entry for an RB seam adjacency observation in an indoor store setting.

You can customize the values inside these JSON files or add your own flows.

## Building via GitHub Actions

To automate building the APK, a workflow can be placed in `.github/workflows/build.yml`. When triggered, it will unzip this repository, insert your `WEBAPP_URL` secret into the flow definitions, build the debug APK, and upload it as an artifact.

See the accompanying documentation or README_Aegis_Mobile_Stack.md for more details about deploying and configuring the project.
