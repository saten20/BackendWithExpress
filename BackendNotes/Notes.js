// ****************************** Express With http**********************

// ExpressJS is framework of js , it is used to send the request from the machine and accept the request form the server.
// The main Task of the express is handle the request response.
// it is also used to handle the bussiness logic. To install express -- npm i express
// By using const app = express() , Now we can use all the functionality provided by the express.
// it uses  method of http protocol like get, post, put, delete, listen
// when we make any method using express we get four parameter inside the funtion (error, req, res, next)

// app.get('path', (req, res) =>{res.send()}) -- it is used to get the data from the server
// app.put('path', (req, res) =>{res.json()}) -- it is used to update the data into db.
// app.post('path', (req, res) => {}) -- it is used to add the data in the db
// app.delete('path', (req, res) =>{}) -- it is used to delete the data from the db.
// app.listen(PortNo, ()=>{// Message that we want to disply}) -- using this method our server is listning to the specified port and provide the response.
// res.send() method is used to send the response to the client. we can send the json object as well.
// app.patch('path', (req, res) =>{}) -- it will update only the required filed.

// There are different status code that we used in server client commmunication using http or any other method
// 1XX -- To send the information
// 2XX -- To send the success
// 3XX -- To send the redirection(This resource is not avaiable at mention location like that)
// 4XX -- Client side Error
// 5XX -- server side error





// axios
// This is used to fetch the data from the Server. This is similar to fetch() method.
// axios provide some default method which meke data retrival smooth.




// proxy
// proxy is used to white list our ip
// That is server will take our request as genuine request and server it.
// syntex

// server:{
//     proxy:{
//       '/api':'http://localhost:3000'
//     }
//   }





// "type":"module" add this inside the package.json file.
// This is used when we dont want to use the comman js funtionality, so here require() will not work
// Instead we will use import



//**************************************************mongoose**************************************

// mongoose is used to create the data model.That is what is the structure of our model.
// There are three step that we have to do to create the model.
// By adding the timestamps mongoose will create the createdAt and updatedAt field in the model which say when this model is created and when updated.
// First step is import
// const schemaName = new mongoose.Schema({},{timestamps: true})  -- step 2
// export User = mongoose.model("User", schemaName)

// import mongoose from 'mongoose'

// const userSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         required:true,
//         lowercase:true
//     },
//     {timestamps: true}
// })

// export const User = mongoose.model("User", userSchema);



// nodemon
// It is used to restart the server automatically whenever any file is saved after making the changes in that file.
// This is dev dependencies that is , it is used during the development of the software, it wont be include in production.
// npm i -D nodemon









//*********************************************DB Connection*****************************************

// To connect with the DB we use the mongoose.connect() method provided by the mongoose.
// our DB is present on the different quantinant so it is important to use the async await 
// Chances of errro is high so use try{} catch(){} block to connect with the DB.
// Syntex

// import mongoose from 'mongoose'

// const connection = async()=>{
//     try{
//         const connectionInstance = mongoose.connect('dburl');
//     }
//     catch(error){
//         console.log("Error while connecting the DB", error);
//     }
// }
// export default connection




//*************************************Config Server to take the different types of data********************************

// app.use() is used to explicitly tell the server that you have to use this.

// app.use(cors({origin:"path"})) -- respond to the request comming from the mention path. This is similar to whilisting your ip
// if we not do this then anyone can access our server.
// cors stand for cross origin resource sharing 

// app.use(express.json({limit:"16kb"})) -- take the data of the json format also. limit is used to specify that only this much amount of data
// in the format of the json is taken.

// app.use(express.urlencoded({extended:true, limit:"16kb"})) -- take the data from the address bar also.

// app.use(cookieParser()) -- to access the client cookie.






// mongoose aggregation Piplines
//




// ****************************************All About becrypt***************************

// bcrypt is a password-hashing function designed to securely store and verify passwords.

// 1. Hashes Passwords Securely:
// When a user creates an account or changes their password, bcrypt converts the plain-text password into a secure, hashed version.
// This hash is what gets stored in the database, not the plain password.

// 2. Uses Salt for Added Security:
// bcrypt automatically generates a random salt for each password.
// Salt is a random string added to the password before hashing, making it unique even if two users have the same password.
// This ensures that even if two users choose "password123," their hashed passwords will look different.

// 3. Slow Hashing Function:
// bcrypt is intentionally slow, which makes brute-force attacks (trying every possible combination) much harder for attackers.
// The "slowness" is adjustable via a cost factor, so it can remain effective even as computers get faster.

// 4. Verification:
// When a user logs in, bcrypt takes the entered password, hashes it again with the same salt, and compares it to the stored hash pass of db.
// If the two hashes match, the user is authenticated.

// example

// When bcrypt creates a hashed password, it doesn't just store the hash. Instead, the resulting hash string contains multiple pieces of information, 
// including:

// 1. The algorithm identifier (e.g., $2b).
// 2. The cost factor (workload or rounds, e.g., 12).
// 3. The salt (automatically generated string for that password).
// 4. The hashed password itself (derived from the salt and plain-text password)

// $2b$12$Xni.Eixxa5KOvl3h4.9XguFJrQ7mXYj4RJf1tWrCt68P7Q5zq4mUG

// $2b: Algorithm version.
// $12: Cost factor (number of rounds).
// Xni.Eixxa5KOvl3h4.9Xgu: The salt (22-character string).
// FJrQ7mXYj4RJf1tWrCt68P7Q5zq4mUG: The hashed password.

// const hashpaword = becrypt.hash(password , 10) -- This will add all above 3 things and hash the password
// becrypt.compare(password, user.password) -- user.password is the hash password that we have store in the db. it will return true or false.
// becrypt.compare() will hash the entered password and compare it with the exsisting password of the DB.

// schemName.pre("save", async function(){// operation that we want to do just before the saving the data}) 
// This is called as pre hook which run just before the execution of the mention operation

// schemaName.post("delete", function(){// operation that we want to execute just after the mention opertion })
// This is called as post hook which run just after the execution of the mention operation.






// ********************************* jsonwebtoken(jwt) ***********************************

// Token is primarly used for authorization.
// JSON Web Token (JWT) is a compact, URL-safe way to securely transmit information between two parties as a JSON object.
// It is commonly used for authentication and information exchange in web applications.
// it is made up of three part 
// Header -- contain the information about the algorithm that is used
// payload -- actual data that we want to send
// signature -- with the help of which token will be verified


// The client stores the token, typically in local storage, session storage, or cookies.
// Usage of JWT token

// Authentication:
// After a user logs in, the server issues a JWT to authenticate the user in subsequent requests.
// Example: OAuth 2.0.

// Information Exchange:
// JWT can securely transmit data between systems.

// Authorization:
// Permissions and roles can be encoded in the token to restrict access to resources.


// The jwt.sign() method is used to generate a JWT. 
// It takes the payload (data to encode in the token), a secret key, and optional configuration options.
// jwt.sign(payload, secretOrPrivateKey, [options, callback])

// The jwt.verify() method is used to validate a JWT and decode its payload. It ensures that the token was not tampered with and is still valid.
// jwt.verify(token, secretOrPublicKey, [options, callback])




//*********************************** Cookies *****************************

// Cookies is used to send the token in the response body.
// we can directly send the token in the response body, but client have to manage where this token will store in local or session storage
// client have to add the token every time in the request body.

// The browser automatically stores the cookie.
// For subsequent requests to the same domain, the browser automatically includes the cookie in the Cookie header.
// res.status(200).cookie("key", value, option) 
// option = {httpOnly : true, secure: true} -- This means that cookie can be change at server side only. client is not allowed to change the 
// cookie.
// res.status(200).clearCookie("cookieName", option) -- it will remove the cookie form the localstorage.







//************************************* File Upload ************************

// File upload can done with the help of express fileupload or multer

// 1. User Uploads a File:
// The user provides a file in the request body (usually via a form with enctype="multipart/form-data").

// 2. Multer Processes the File:
// Multer extracts the file from the request and handles basic validations, such as: File size (limits.fileSize), File type (fileFilter).
// Multer then temporarily stores the file: i) In the file system (if using diskStorage). ii)In memory (if using memoryStorage).

// 3. Pass the File to Cloudinary:
// If the file passes Multer's validation, the server uploads it to Cloudinary using Cloudinary's SDK.
// You can access: The file's path (if stored in the file system) or The file's buffer (if stored in memory).

// 4. Optional Cleanup:
// If the file was saved to the file system, you can delete it after a successful upload to Cloudinary.

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Directory to store files in the local server
    },
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueName); // Name of the file 
    },
});
  
  const upload = multer({ storage: storage });
  
  app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
  
    const localFilePath = req.file.path; // Local file path (e.g., uploads/12345-file.jpg)
  
    // Upload to Cloudinary
    cloudinary.uploader.upload(
      localFilePath,
      { folder: "uploads" }, // Optional: Specify a Cloudinary folder

      (error, result) => {
        if (error) {
          return res.status(500).send("Cloudinary upload failed.");
        }
  
        // Delete local file after successful upload
        fs.unlink(localFilePath, (err) => {
          if (err) console.error("Failed to delete local file:", err);
        });
  
        // Respond with Cloudinary file URL
        res.status(200).json({
          message: "File uploaded successfully!",
          fileUrl: result.secure_url, // Cloudinary URL of the uploaded file
        });
      }
      
    );
  });




//************************************** Router  *****************************

// Router is a core feature of the Express framework.

// Modular Code: Each router handles specific functionality.Example: One router for /users, another for /products.
// Separation of Concerns: Group routes logically (e.g., user-related routes vs. product-related routes).
// Easier to debug and maintain.
// Reusability: Routers can be exported and reused in different parts of the app.
// export default router -- we can give our own name in the file where we are importing
// export {router} -- we have to give the same name as mention in the export statement when  we are importing 

// Syntex
// import {Router} from 'express'
// const router = Router()

// router.route('/').post(methodName)

// export default router




//********************************** Mongodb  ***************************************

// $or -- > user.findone({ $or: [{email} , {username}]  })  -- it will find user with anyone of the mention field in the array
// $unset:{refreshToken:1} -- it is used to remove the mention entry from the database.  


// const user = await User.findById(id)
// user.refreshToken = refreshToken
// user.save()

// in above code when we fetch the data from db and if we want any changes made in that should reflect in the original db then we have to 
// save it.










//******************************* Access Token & refresh token ********************************

// Access token -- This token is used for authorization. Expiry of access token is very short(expire mins)
// RefreshToken -- This token is used to generate the access token(expire days or month)

// when user is logged in for long time then after some time it's access token will expire, so to access authorized route user have to perfrom
// the login again. so to solve this problem we used Refresh Token. Refresh token is store in the db and also send in the cookie.
// so when the access token will expire client will send the Refresh token which hit particular end point through which we will verify the 
// refresh token saved in our db.
// Once Refresh Token is verified , it will generate one new access token and add it in the cookie.