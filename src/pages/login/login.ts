import { Component, NgZone } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, AlertController } from "ionic-angular";
import firebase, { auth } from "firebase";
import { SignUpPage } from "../sign-up/sign-up";
import { TransactionHomePage } from "../transaction-home/transaction-home";
import { StorageProvider } from "../../providers/storage/storage";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { UserProfilePage } from "../user-profile/user-profile";
import { Message, Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
})
export class LoginPage {
  email = "";
  password = "";
  selectedLanguage: string;

  listOfLang: string[] = [];

  constructor(
    public navCtrl: NavController,
    public zone: NgZone,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public facebook: Facebook,
    public sp: StorageProvider,
    public alertCtrl: AlertController,
    private translateConfigService: TranslateConfigService,
  ) {
    this.loadDropDowns();
    this.getInfo();

    firebase.auth().onAuthStateChanged(async function(user) {
      if (user) {
        await firebase
          .firestore()
          .collection("users")
          .where("owner", "==", firebase.auth().currentUser.uid)
          .get()
          .then(function(querySnapshot) {
            if (querySnapshot.size == 0) {
              // console.log("Not permitted - this account has not filled their data (Fb Login) or no internet");
              // navCtrl.setRoot(UserProfilePage, {
              //   uid: firebase.auth().currentUser.uid,
              //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              //});
              console.log("No Internet");
              // console.log(firebase.auth().currentUser.uid);
              //MOVE SIGN UP OPTIONS RIGHT HERE AND CREATE A DOCUMENT

              this.toastCtrl
                .create({
                  message: "Check your connection",
                  duration: 2000,
                })
                .present();
            } else {
              sp.setMem().then(() => {
                zone.run(() => {
                  console.log("firing from constructor");
                  navCtrl.setRoot(TransactionHomePage);
                });
              });
            }
          })
          .catch(error => {
            // this.toastCtrl.create({
            //   message: error,
            //   duration: 2000,
            // });
          });
      } else {
        // No user is signed in.
        console.log("no-user is previously signed in");
      }
    });

    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  
contactphone;
  getInfo() {
    firebase
      .firestore()
      .collection("contact-us")
      .get()
      .then(doc => {
        this.contactphone = doc.docs[0].data().phone;
      });
  }

  language;

  loadDropDowns() {
    firebase
      .firestore()
      .collection("sign-up")
      .get()
      .then(doc => {
        doc.docs[0].data().language.forEach(l => {
          this.listOfLang.push(l);
          //console.log(this.listOfLang);
        });
      })
      .catch(error => {
        this.toastCtrl.create({
          message: error,
          duration: 2000,
        });
      });
  }

  loginWithFB() {
    this.facebook
      .login(["email"])
      .then((res: FacebookLoginResponse) => {
        console.log("Logged into Facebook!", res);

        firebase
          .auth()
          .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
          .then(async success => {
            this.checkifexist();

            console.log("Firebase success", success);
            // const temp = success;
            // await firebase
            //   .firestore()
            //   .collection("users")
            //   .where("owner", "==", firebase.auth().currentUser.uid)
            //   .get()
            //   .then(function (querySnapshot) {
            //     if (querySnapshot.size == 0) {
            //       console.log("Not permitted - no sign up");
            //       this.navCtrl.setRoot(UserProfilePage, {
            //         uid: firebase.auth().currentUser.uid,
            //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //       });
            //     } else {
            //       this.loginProcedure();
            //     }
            //   });
          })
          .catch(err => {
            console.log("Firebase error", err);
          });
      })
      .catch(e => console.log("Error logging into Facebook", e));
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  ionViewDidEnter() {
    firebase.auth().useDeviceLanguage();
    this.applicationVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
      callback: function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.signInPhone();
      },
    });
  }

  applicationVerifier;

  login() {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.loginProcedure();
          })
          .catch(err => {
            console.log(err);
            this.toastCtrl
              .create({
                message: err.message,
                duration: 3000,
              })
              .present();
          });
      });
    //console.log(user)
  }

  loginAction() {
    const message = this.translateConfigService.getTranslatedMessage("This feature will open shortly");
    this.toastCtrl
      .create({
        // @ts-ignore
        message: message.value,
        duration: 2000,
      })
      .present();
  }

  gotoSignUp() {
    this.navCtrl.push(SignUpPage);
  }

  loginProcedure() {
    this.zone.run(() => {
      console.log("firing from login proc");
      // this.sp.clearMem();

      this.sp.setMem().then(() => {
        this.navCtrl.setRoot(TransactionHomePage);
      });
    });
  }

  languageChanged() {
    console.log(`selected language: ${this.selectedLanguage}`);
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  phone;
  signIn() {
    // add a local variable to store navCtrl object
    const thatNavCtrl = this.navCtrl;
    //Step 1 — Pass the mobile number for verification
    const tell = "+" + this.phone;

    firebase
      .auth()
      .signInWithPhoneNumber(tell, this.applicationVerifier)
      .then(function(confirmationResult) {
        const verificationCode = window.prompt(
          "Please enter the verification " + "code that was sent to your mobile device.",
        );
        return confirmationResult.confirm(verificationCode);
      })
      .catch(function(error) {
        // Handle Errors here.
      });
  }

  datet = new Date();

  newaccOwnName;
  newaccBName;
  newaccemail;
  newaccBType;

  async createAccount() {
    await firebase
      .firestore()
      .collection("users")
      .add({
        created: firebase.firestore.FieldValue.serverTimestamp(),
        owner: firebase.auth().currentUser.uid,
        owner_name: this.newaccOwnName,
        business_name: this.newaccBName,
        businesstype: this.newaccBType,
        business_address: "Sample Address",
        email: this.newaccemail,
        ph_no: "+" + this.phone,
        language: this.translateConfigService.getCurrentLanguage(),
        currency: "USD",
        cash_balance: 0,
        discount: 0,
        taxrate: 0,
        categories: [{ name: "Example" }],
        products: [
          {
            cat: "Example",
            code: "0000",
            cost: "0",
            name: "Example Product",
            price: "0",
            stock_qty: "0",
            url: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
            wholesale_price: "0",
          },
        ],

        transactions: [
          {
            datetime: new Date(this.datet).getTime(),
            discount: 0,
            discountlist: [],
            itemslist: [
              {
                cat: "Example",
                code: "0000",
                cost: "0",
                name: "Example Product",
                price: "0",
                stock_qty: "0",
              },
            ],
            pnllist: [],
            prodidlist: [],
            taxrate: 0,
            totalatax: 0,
            totaldisc: 0,
            totalsum: 0,
          },
        ],
      })
      .then(async doc => {
        console.log(doc);
        const title = this.translateConfigService.getTranslatedMessage("Account Created");
        const message = this.translateConfigService.getTranslatedMessage("Your account has been created successfully");
        this.alertCtrl
          .create({
            // @ts-ignore
            title: title.value,
            // @ts-ignore
            message: message.value,
            buttons: [
              {
                text: "OK",
                handler: () => {
                  //this.sp.clearMem();
                  this.sp.setMem();
                  this.navCtrl.setRoot(TransactionHomePage); //navigate to feeds page
                }, //end handler
              },
            ], //end button
          })
          .present();
      })
      .catch(err => {
        console.log(err);
      });

    console.log("Done");
  }

  async checkifexist() {
    let flag = 0;

    await firebase
      .firestore()
      .collection("users")
      .where("owner", "==", firebase.auth().currentUser.uid)
      .get()
      .then(async function(querySnapshot) {
        if (querySnapshot.size == 0) {
          console.log("Bun");
          flag = 1;
        } else {
          console.log("loggin you in");
          flag = 0;
        }
      })
      .catch(error => {
        console.log(error);
      });

    if (flag == 1) {
      this.alertCtrl
        .create({
          title: "Sign Up", //translate
          message: "Please enter your details to create an account",
          inputs: [
            { name: "UserName", placeholder: "Your Name" },
            { name: "PhoneNumber", placeholder: "Phone Number", value: this.phone },
            { name: "BusinessName", placeholder: "Business Name" },
            { name: "BusinessType", placeholder: "Business Type" },
            { name: "Email", placeholder: "Email: example@abc.com" },
          ],
          buttons: [
            {
              text: "Cancel",
              handler: data => {
                console.log("Cancel clicked");
              },
            },
            {
              text: "Submit",
              handler: data => {
                this.newaccOwnName = data.UserName;
                this.newaccBName = data.BusinessName;
                this.newaccBType = data.BusinessType;
                this.newaccemail = data.Email;
                this.createAccount();
              },
            },
          ],
        })
        .present();
    } else {
      console.log("flag!=1");
      this.loginProcedure();
    }
  }

  async signInPhone() {
    if (this.phone == null) {
      console.log("hi");
      this.alertCtrl
        .create({
          message: "No Phone Number Entered",
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
            },
          ],
        })
        .present();
    } else {
      const phoneNumber = "+" + this.phone;
      const appVerifier = this.applicationVerifier;

      let flag = 0;
      await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(confirmationResult => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          const prompt = this.alertCtrl.create({
            title: "Enter the Confirmation code",
            message:
              "A 6 digit code will be sent to you in the next few minutes. Please enter that number in the box below to verify your number and login:",
            inputs: [{ name: "confirmationCode", placeholder: "Confirmation Code" }],
            buttons: [
              {
                text: "Cancel",
                handler: data => {
                  console.log("Cancel clicked");
                },
              },
              {
                text: "Send",
                handler: async data => {
                  await confirmationResult
                    .confirm(data.confirmationCode)
                    .then(async function(result) {
                      // User signed in successfully.
                      console.log(result.user);
                      flag = 1;
                      // ...
                    })
                    .catch(function(error) {
                      // User couldn't sign in (bad verification code?)
                      // ...
                      console.log(error);
                    })
                    .finally(() => {
                      if (flag == 1) {
                        this.checkifexist();
                      }
                    });
                },
              },
            ],
          });
          prompt.present();
          console.log(confirmationResult);
        })
        .catch(error => {
          // Error; SMS not sent
          // ...
          this.toastCtrl
            .create({
              message: error,
              duration: 2000,
            })
            .present();
          console.log("SMS Not Sent: " + error);
        });

      // if(flag==1){
      //   console.log("yeahh")
      //   this.createAccount();
      // }
    }
  }
}
