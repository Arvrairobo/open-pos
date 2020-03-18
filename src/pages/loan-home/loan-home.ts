import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController,
  Events,
  ModalController,
  ViewController,
} from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { StorageProvider } from "../../providers/storage/storage";
import firebase from "firebase";
import { GettersetterProvider } from "../../providers/gettersetter/gettersetter";
import { empty } from "rxjs/Observer";
import { GeolocationService } from "../../providers/geolocation/geolocation.service";

/**
 * Generated class for the LoanHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-loan-home",
  templateUrl: "loan-home.html",
})
export class LoanHomePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    private barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    public getset: GettersetterProvider,
    private toastCtrl: ToastController,
    public events: Events,
    private modal: ModalController,
    private view: ViewController,
    public gps: GeolocationService,
  ) {
    this.getUserData();

    this.events.subscribe("cbUpdate:created", data => {
      this.getUserData();
    });
  }

  dismiss() {
    this.view.dismiss();
  }

  userdata: any = {
    autosave: 0,
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: "",
    owner: "",
    logo_url: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };
  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          console.log(this.userdata);
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  ionViewDidLoad() {
    this.showloan = 0;
    this.loanvar = [];
  }

  uploadbtn() {
    this.sp
      .backupStorage()
      .then()
      .catch();
    const message = this.translateConfigService.getTranslatedMessage("Online backup ready");
    this.toastCtrl
      .create({
        // @ts-ignore
        message: message.value,
        duration: 2000,
      })
      .present();
  }

  showloan = 0;
  loanvar: any = [];
  showloanform() {
    this.showloan = this.showloan == 1 ? 0 : 1;
  }

  loan1;
  loan2;
  loan3;
  loan4;
  loan5;
  loan6;
  //@ts-ignore
  loanq1 = this.translateConfigService.getTranslatedMessage("1. How urgently do you need a loan?").value;
  //@ts-ignore
  loanq2 = this.translateConfigService.getTranslatedMessage("2. When would you like to get this loan?").value;
  //@ts-ignore
  loanq3 = this.translateConfigService.getTranslatedMessage("3. How much would you like to borrow?").value;
  //@ts-ignore
  loanq4 = this.translateConfigService.getTranslatedMessage("4. How long will you need to pay it back?").value;
  //@ts-ignore
  loanq5 = this.translateConfigService.getTranslatedMessage("5. What do you need the loan for?").value;
  //@ts-ignore
  loanq6 = this.translateConfigService.getTranslatedMessage("6. What's the best way to contact you?").value;
  //@ts-ignore
  randovar = this.translateConfigService.getTranslatedMessage("Close");

  emptyField = false;

  async submitloanform() {
    if (
      this.loan1 == undefined ||
      this.loan2 == undefined ||
      this.loan3 == undefined ||
      this.loan4 == undefined ||
      this.loan5 == undefined ||
      this.loan6 == undefined
    ) {
      this.emptyField = true;
      return;
    }
    this.emptyField = false;
    this.loanvar.push({
      q: this.loanq1,
      a: this.loan1,
    });
    this.loanvar.push({
      q: this.loanq2,
      a: this.loan2,
    });
    this.loanvar.push({
      q: this.loanq3,
      a: this.loan3,
    });
    this.loanvar.push({
      q: this.loanq4,
      a: this.loan4,
    });
    this.loanvar.push({
      q: this.loanq5,
      a: this.loan5,
    });
    this.loanvar.push({
      q: this.loanq6,
      a: this.loan6,
    });

    await this.gps
      .getCoordinates()
      .then(coordinates => {
        const c: any = coordinates;
        this.loanvar.push({
          q: "Location",
          a: "Latitude: " + c.latitude + " Longitude: " + c.longitude,
        });
      })
      .catch(e => {
        this.loanvar.push({
          q: "Location",
          a: "Error obtaining location",
        });
      });

    console.log(this.loanvar);

    firebase
      .firestore()
      .collection("loan_apps")
      .add({
        user: this.userdata,
        loan_details: this.loanvar,
      })
      .then(async doc => {})
      .catch(err => {
        console.log(err);
      });
    this.loanvar = [];
    this.showloan = 0;
    const msg = this.translateConfigService.getTranslatedMessage("Submitted!");
    this.toastCtrl
      .create({
        //@ts-ignore
        message: msg.value,
        duration: 3000,
      })
      .present();
  }

  async cashbtn() {
    await this.getUserData();
    const message = this.translateConfigService.getTranslatedMessage("Balance");
    const message1 = this.translateConfigService.getTranslatedMessage("Edit");
    const message2 = this.translateConfigService.getTranslatedMessage("Enter Current Cash Balance");
    const message3 = this.translateConfigService.getTranslatedMessage("Update");
    const message4 = this.translateConfigService.getTranslatedMessage("Cancel");
    const message5 = this.translateConfigService.getTranslatedMessage("OK");

    this.alertCtrl
      .create({
        //@ts-ignore
        message: message.value + ": " + this.userdata.cash_balance,

        buttons: [
          {
            //@ts-ignore
            text: message1.value,
            handler: data => {
              this.alertCtrl
                .create({
                  inputs: [
                    //@ts-ignore
                    { name: "cb", placeholder: message2.value },
                  ],
                  buttons: [
                    {
                      //@ts-ignore
                      text: message3.value,
                      handler: data1 => {
                        if (data1.cb != null) {
                          //console.log("Update CB to :"+data1.cb)
                          this.getUserData();
                          this.userdata.cash_balance = parseFloat(data1.cb).toString();
                          this.sp.setUserDat(this.userdata);
                        }
                      },
                    },
                    {
                      //@ts-ignore
                      text: message4.value,
                      role: "cancel",
                    },
                  ],
                })
                .present();
            },
          }, // end Edit Button
          {
            //translate these buttons
            //@ts-ignore
            text: message5.value,
            role: "Cancel",
          }, // end OK Button
        ], //end button
      })
      .present();
  }

  help() {
    const passedData = {
      //youtube link, required text
      page: "Loan Page",
    };
    const helpModal = this.modal.create("HelpPage", { data: passedData });
    helpModal.present();
  }
}
