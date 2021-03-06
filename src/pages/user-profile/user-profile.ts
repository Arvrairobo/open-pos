import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TransactionHomePage } from "../transaction-home/transaction-home";
import { cloneDeep, isEqual } from "lodash";
import firebase from "firebase";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-user-profile",
  templateUrl: "user-profile.html",
})
export class UserProfilePage {
  temptimes: any;
  tempuser: any;
  user: any = {
    autosave: 0,
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: "en",
    owner: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };
  oldUser: any = {
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: "en",
    owner: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };
  formUser: FormGroup;
  submitButton: boolean;
  listOfBType: string[] = [];
  listOfCurrency: string[] = [];
  listOfLang: string[] = [];
  toggleSaver = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sp: StorageProvider,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private translateConfigService: TranslateConfigService,
    public alertCtrl: AlertController,
    private modal: ModalController,
  ) {
    (this.temptimes = this.navParams.get("timestamp")),
      (this.tempuser = this.navParams.get("user")),
      console.log(this.temptimes + " " + this.tempuser),
      (this.user = {
        business_address: "",
        business_name: "",
        cash_balance: "",
        currency: "",
        created: "",
        language: "en",
        owner: "",
        owner_name: "",
        ph_no: "",
        businesstype: "",
        taxrate: 0.0,
        discount: 0.0,
      });
    this.oldUser = {
      business_address: "",
      business_name: "",
      cash_balance: "",
      currency: "",
      created: "",
      language: "en",
      owner: "",
      owner_name: "",
      ph_no: "",
      businesstype: "",
      taxrate: 0.0,
      discount: 0.0,
    };

    this.submitButton = false;
    //this.loadDropDowns();
    this.formUser = this.formBuilder.group({
      autosave: new FormControl(0, Validators.required),
      business_name: new FormControl("", Validators.required),
      business_address: new FormControl("", Validators.required),
      owner_name: new FormControl("", Validators.required),
      businesstype: new FormControl("", Validators.required),
      ph_no: new FormControl("", Validators.required),
      currency: new FormControl("", Validators.required),
      cash_balance: new FormControl(0, Validators.required),
      discount: new FormControl(0, Validators.required),
      taxrate: new FormControl(0, Validators.required),
      language: new FormControl("", Validators.required),
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserProfilePage");
    this.getUser().then();
    this.oldUser = cloneDeep(this.user);
  }

  // loadDropDowns() {
  //   firebase
  //     .firestore()
  //     .collection("sign-up")
  //     .get()
  //     .then(doc => {
  //       doc.docs[0].data().businessType.forEach(b => {
  //         this.listOfBType.push(b);
  //       });
  //       doc.docs[0].data().currency.forEach(c => {
  //         this.listOfCurrency.push(c);
  //       });
  //       doc.docs[0].data().language.forEach(l => {
  //         this.listOfLang.push(l);
  //       });
  //     });
  // }

  goBack() {
    this.navCtrl.pop();
  }

  async getUser() {
    const user = JSON.parse(await this.sp.getUserDat());
    if (user === null || !user.id) {
      console.log("user profile page: user is null");
    } else {
      this.user = user;
    }
  }

  setUser() {
    if (!this.formUser.valid) {
      console.log("invalid user update");
      const message = this.translateConfigService.getTranslatedMessage("Incomplete");
      this.toastCtrl
        .create({
          // @ts-ignore
          message: message.value,
          duration: 1000,
        })
        .present();
    } else {
      this.translateConfigService.setLanguage(this.user.language);
      this.sp.storageReady().then(() => {
        this.sp
          .setUserDat(this.user)
          .then(() => {
            console.log("new user data saved in storage");
            this.navCtrl.setRoot(TransactionHomePage);
          })
          .catch(error => {
            console.error(error);
          });
      });
      const message = this.translateConfigService.getTranslatedMessage("Update profile successful");
      this.toastCtrl
        .create({
          // @ts-ignore
          message: message.value,
          duration: 2000,
        })
        .present();
    }
  }

  onChange() {
    this.submitButton = !isEqual(this.user, this.oldUser);
  }

  toggleButton() {
    if (this.toggleSaver && this.user.autosave == 1) {
      this.toggleSaver = false;
      return;
    }
    this.toggleSaver = false;
    if (this.user.autosave == 1) {
      this.user.autosave = -1;
    } else this.user.autosave = 1;
    console.log(this.user.autosave);
    this.onChange();
  }

  help() {
    const passedData = {
      //youtube link, required text
      page: "Profile Page",
    };
    const helpModal = this.modal.create("HelpPage", { data: passedData });
    helpModal.present();
  }
}
