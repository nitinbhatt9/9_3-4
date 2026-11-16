import Hogwarts from "../schema/prof.schema.js";
import { uploadFileToImage } from "../service/storage.js";

const Harry = async (req, res) => {
  try {
    const { name, league, power, address, teahcer, magicspell, stickname } =
      req.body;
    const FileUpload = req.file;

    if (!name || !stickname) {
      return res.status(400).json({ message: "Something Is Missing" });
    }
    const isDataExists = await Hogwarts.findOne({ name, stickname });
    if (isDataExists) {
      return res.status(400).json({ message: "Data Already Exists" });
    }

    const uploadfile = await uploadFileToImage(
      FileUpload.buffer,
      FileUpload.originalname,
    );

    const newUser = new Hogwarts({
      name,
      league,
      power,
      address,
      teahcer,
      magicspell,
      stickname,
      image: uploadfile.url,
    });
    await newUser.save();
    return res.status(200).json({ message: "Data Added Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "System Error", error });
  }
};

export default Harry;
