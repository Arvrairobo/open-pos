cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-backbutton.Backbutton",
      "file": "plugins/cordova-plugin-backbutton/www/Backbutton.js",
      "pluginId": "cordova-plugin-backbutton",
      "clobbers": [
        "navigator.Backbutton"
      ]
    },
    {
      "id": "cordova-plugin-bluetooth-serial.bluetoothSerial",
      "file": "plugins/cordova-plugin-bluetooth-serial/www/bluetoothSerial.js",
      "pluginId": "cordova-plugin-bluetooth-serial",
      "clobbers": [
        "window.bluetoothSerial"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-datepicker.DatePicker",
      "file": "plugins/cordova-plugin-datepicker/www/android/DatePicker.js",
      "pluginId": "cordova-plugin-datepicker",
      "clobbers": [
        "datePicker"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
      "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
      "pluginId": "cordova-plugin-facebook4",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-x-toast.Toast",
      "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
      "pluginId": "cordova-plugin-x-toast",
      "clobbers": [
        "window.plugins.toast"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
      "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
      "pluginId": "phonegap-plugin-barcodescanner",
      "clobbers": [
        "cordova.plugins.barcodeScanner"
      ]
    },
    {
      "id": "cordova-plugin-app-version.AppVersionPlugin",
      "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
      "pluginId": "cordova-plugin-app-version",
      "clobbers": [
        "cordova.getAppVersion"
      ]
    },
    {
      "id": "cordova-plugin-market.Market",
      "file": "plugins/cordova-plugin-market/www/market.js",
      "pluginId": "cordova-plugin-market",
      "clobbers": [
        "cordova.plugins.market"
      ]
    },
    {
      "id": "cordova-plugin-call-number.CallNumber",
      "file": "plugins/cordova-plugin-call-number/www/CallNumber.js",
      "pluginId": "cordova-plugin-call-number",
      "clobbers": [
        "call"
      ]
    },
    {
      "id": "cordova-plugin-email-composer.EmailComposer",
      "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
      "pluginId": "cordova-plugin-email-composer",
      "clobbers": [
        "cordova.plugins.email"
      ]
    },
    {
      "id": "call-number.CallNumber",
      "file": "plugins/call-number/www/CallNumber.js",
      "pluginId": "call-number",
      "clobbers": [
        "call"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-x-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-x-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.androidFileSystem",
      "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-photo-library.PhotoLibrary",
      "file": "plugins/cordova-plugin-photo-library/www/PhotoLibrary.js",
      "pluginId": "cordova-plugin-photo-library",
      "clobbers": [
        "cordova.plugins.photoLibrary"
      ]
    },
    {
      "id": "cordova-plugin-photo-library.async",
      "file": "plugins/cordova-plugin-photo-library/www/async/dist/async.min.js",
      "pluginId": "cordova-plugin-photo-library"
    },
    {
      "id": "cordova-plugin-photo-library.async_map",
      "file": "plugins/cordova-plugin-photo-library/www/async/dist/async.min.map",
      "pluginId": "cordova-plugin-photo-library"
    },
    {
      "id": "cordova-plugin-contacts.contacts",
      "file": "plugins/cordova-plugin-contacts/www/contacts.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "navigator.contacts"
      ]
    },
    {
      "id": "cordova-plugin-contacts.Contact",
      "file": "plugins/cordova-plugin-contacts/www/Contact.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "Contact"
      ]
    },
    {
      "id": "cordova-plugin-contacts.convertUtils",
      "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
      "pluginId": "cordova-plugin-contacts"
    },
    {
      "id": "cordova-plugin-contacts.ContactAddress",
      "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactAddress"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactError",
      "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactError"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactField",
      "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactField"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactFindOptions",
      "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactFindOptions"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactName",
      "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactName"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactOrganization",
      "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactOrganization"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactFieldType",
      "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
      "pluginId": "cordova-plugin-contacts",
      "merges": [
        ""
      ]
    },
    {
      "id": "cordova-sms-plugin.Sms",
      "file": "plugins/cordova-sms-plugin/www/sms.js",
      "pluginId": "cordova-sms-plugin",
      "clobbers": [
        "window.sms"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-android-support-gradle-release": "3.0.1",
    "cordova-plugin-androidx": "1.0.2",
    "cordova-plugin-androidx-adapter": "1.1.0",
    "cordova-plugin-backbutton": "0.3.0",
    "cordova-plugin-bluetooth-serial": "0.4.7",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-datepicker": "0.9.3",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-facebook4": "1.7.4",
    "cordova-plugin-firebasex": "6.1.0",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.1.3",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-x-toast": "2.7.2",
    "cordova-sqlite-storage": "3.4.0",
    "phonegap-plugin-barcodescanner": "8.1.0",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-market": "1.2.0",
    "cordova-plugin-call-number": "1.0.1",
    "cordova-plugin-email-composer": "0.9.2",
    "call-number": "0.0.2",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.6.3",
    "cordova-plugin-file": "6.0.2",
    "cordova-plugin-photo-library": "2.2.1",
    "cordova-plugin-contacts": "3.0.1",
    "cordova-sms-plugin": "1.0.0"
  };
});