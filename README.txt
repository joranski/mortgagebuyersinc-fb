1) Install packages
# npm install -g firebase @angular/cli@latest

1b) Connect Github
 
2) Connect accounts to computer
# firebase login

3) Create repo (Mabye in GitHub first and "git clone project")
# cd .\Projects\ 
# ng new <projectName>

? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS

# cd <projectName>
# ng serve -o ///// TO VIEW NEW SITE


((((If not git clone to begin with then create github account https://github.com/new ))))
# git init
# git add -A
# git commit -am "Init"
# git remote add origin git@github.com:joranski/<projectName>.git
# git push -u origin master

4) Connect to firebase itself!!!!!
  a) https://console.firebase.google.com/u/0/ // CREATE PROJECT
  b) Go to project settings to get Firebase config
    (((( EXAMPLE BELOW ))))
    var firebaseConfig = {
        apiKey: "AI...d8",
        authDomain: "m...a.firebaseapp.com",
        databaseURL: "https://m...a.firebaseio.com",
        projectId: "mortgagebuyersinc-6b9ea",
        storageBucket: "mortgagebuyersinc-6b9ea.appspot.com",
        messagingSenderId: "8...4",
        appId: "1:8...1",
        measurementId: "G-O...T"
    };
  c) Open src/enviroments/enviroments.ts and paste/edit EXAMPLE ABOVE:
    export const environment = {
        production: false,
        firebaseConfig: {
            apiKey: "AI...d8",
            authDomain: "m...a.firebaseapp.com",
            databaseURL: "https://m...a.firebaseio.com",
            projectId: "mortgagebuyersinc-6b9ea",
            storageBucket: "mortgagebuyersinc-6b9ea.appspot.com",
            messagingSenderId: "8...4",
            appId: "1:8...1",
            measurementId: "G-O...T"
        }
    };
  d) # ng build
  e) # firebase init
    1) ? Please select an option: (Use arrow keys) > Use an existing project
    NOTE YOU WILL NEED TO SET UP DATABASE AND STORAGE SERVER LOCATIONS!!!!
    2) 
    ? What language would you like to use to write Cloud Functions? TypeScript
    ? Do you want to use TSLint to catch probable bugs and enforce style? Yes
    ? Do you want to install dependencies with npm now? Yes
    !!!!!!! BELOW
    ? What do you want to use as your public directory? (public) CHANGE TO ----> dist/<projectName>
    ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) Yes
    ? File dist/swm-firebase-fe/index.html already exists. Overwrite? (y/N) YES
    === Emulators Setup
    ? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. 

    (*) Functions
    ( ) Firestore
    ( ) Database
    ( ) Hosting
    >(*) Pubsub

    ? Would you like to download the emulators now? (y/N) YES
    
  f) FIREBASE BUG.... since you might not have a function but you probably included it you will need to comment out first line in ./functions/src/index.ts
  <OPTIONAL> EDIT ./storage.rules
      ADD TO TOP OF FILE>       rules_version = '2';
  g) ADD all new files and:
     # git commit -am "added firebase and firestore files"
  h) # firebase deploy



