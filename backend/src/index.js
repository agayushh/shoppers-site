import connectToDb from "./db";
import app from "./app";

//Mistake 1
// connectToDb().then(() => {
//   try {
//     () => {
//       app.on("Error", (err) => {
//         console.log("Error", err);
//         throw err;
//       });
//       app.listen(process.env.PORT || 8000, () => {
//         console.log(`Server is listening on port ${process.env.PORT}`);
//       });
//     };
//   } catch {
//     console.log(`Couldn't connect to the server `);
//   }
// });

connectToDb()
  .then(() => {
    app.on("Error", (err) => {
      console.log(`Error`, err);
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Couldn't connect to the database due to ${err}`);
  });
